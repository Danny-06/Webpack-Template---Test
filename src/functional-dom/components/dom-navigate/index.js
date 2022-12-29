import _ from "../../index.js";

let rootPath = '/'

/**
 * @typedef NavigateRoute
 * @property {string} path
 * @property {() => import("../../libs/core.js").CoreNode} component
 */

/**
 * 
 * @param {import("../../libs/core.js").FunctionalDOMProperties} options 
 * @param {NavigateRoute[]} navigateRoutes 
 * @returns 
 */
export default function DOMNavigate(options, navigateRoutes) {
  const component = _['dom-navigate'](options)

  return {
    component,

    update() {
      let renderComponent = null

      for (const route of navigateRoutes) {
        const path = route.path.startsWith('/') ? rootPath + route.path : route.path
        if (path === location.pathname) {
          renderComponent = route.component
          break
        }
      }

      component.replaceChildren()

      if (typeof renderComponent !== 'function') {
        return
      }

      // @ts-ignore
      component.append(renderComponent())
    }
  }
}



function dispatchCustomNavigate() {
  const customNavigate = new CustomEvent('custom-navigate', {detail: null})
  window.dispatchEvent(customNavigate)
}

// Fire `custom-navigate` event on `load`
window.addEventListener('load', event => {
  dispatchCustomNavigate()
}, {once: true})


window.addEventListener('popstate', event => {
  dispatchCustomNavigate()
})

export const navigation = {

  setRoot(url) {
    const newURL = new URL(url)
    const root = newURL.pathname.split('/').slice(0, -1).join('/')

    rootPath = root
  },

  get state() {
    return history.state
  },

  /**
   * 
   * @param {string} url 
   * @param {History['state']} [state=null] 
   */
  replace(url, state = null) {
    history.replaceState(state, '', url)
    dispatchCustomNavigate()
  },

  /**
   * 
   * @param {string} url 
   * @param {History['state']} [state=null] 
   */
  push(url, state = null) {
    history.pushState(state, '', url.startsWith('/') ? rootPath + url : url)
    dispatchCustomNavigate()
  },

  forward() {
    history.forward()
  },

  back() {
    history.back()
  },

  /**
   * 
   * @param {'custom-navigate'} eventType 
   * @param {(event: CustomEvent) => void} callbackListener 
   */
  addEventListener(eventType, callbackListener) {
    window.addEventListener(eventType, callbackListener)
  }

}
