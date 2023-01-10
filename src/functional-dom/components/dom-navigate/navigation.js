/**
 * @typedef {{
 *  'custom-navigate': CustomEvent<CustomNavigateDetail>,
 *  'custom-hash-change': CustomEvent<CustomHashChangeDetail>
 * }} NavigateEventsMap
 */

/**
 * @typedef {keyof NavigateEventsMap} NavigateEvents
 */

/**
 * @typedef CustomNavigateDetail
 * @property {string} path This is the same as using `window.location.pathname`
 */

/**
 * @typedef CustomHashChangeDetail
 * @property {string} hash This is the same as using `window.location.hash`
 */

/**
 * @template {NavigateEvents} T
 * @typedef {(event: NavigateEventsMap[T]) => void} CallbackListener
 */

const navigation = {

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
    history.pushState(state, '', url)

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
   * @param {string} value 
   */
  hash(value) {
    location.hash = value
  },

  /**
   * @template {NavigateEvents} T
   * @param {T} eventType 
   * @param {CallbackListener<T>} callbackListener 
   * @returns {() => void} Function to clean up the listener
   */
  addEventListener(eventType, callbackListener) {
    window.addEventListener(eventType, callbackListener)

    return () => {
      window.removeEventListener(eventType, callbackListener)
    }
  }

}

export default navigation


function dispatchCustomNavigate() {
  const init = {detail: {path: location.pathname}}

  const customNavigate = new CustomEvent('custom-navigate', init)
  window.dispatchEvent(customNavigate)
}

function dispatchCustomHashChange() {
  const init = {detail: {hash: location.hash}}

  const customHashChange = new CustomEvent('custom-hash-change', init)
  window.dispatchEvent(customHashChange)
}


// Fire `custom-navigate` event on `DOMContentLoaded`
window.addEventListener('DOMContentLoaded', event => {
  dispatchCustomNavigate()
  dispatchCustomHashChange()
}, {once: true})


window.addEventListener('popstate', event => {
  dispatchCustomNavigate()
})

window.addEventListener('hashchange', event => {
  dispatchCustomHashChange()
})
