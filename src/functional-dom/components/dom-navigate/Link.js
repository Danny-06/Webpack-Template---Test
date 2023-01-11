import _ from "../../index.js"
import navigation from "./navigation.js"

const linkNavigateSymbol = Symbol('link-navigate')
const linkStateSymbol = Symbol('state')
const linkMethodSymbol = Symbol('method')
const linkDefaultBehaviorSymbol = Symbol('default-behavior')

/**
 * @typedef LinkPropertiesDef
 * @property {boolean} [defaultBehavior=false]
 * @property {string} [href] Value for the `href` attribute of the `HTMLAnchorElement`
 * @property {History['state']} [state] The state value to store in `History.state`
 * @property {'push' | 'replace'} [method] The navigation method to use. If unspecified it will be `push` for normal urls but for urls that contains a hash (`#`) `replace` will be used.
 */

/**
 * @typedef {import("../../libs/core.js").FunctionalDOMProperties & LinkPropertiesDef} LinkProperties
 */

/**
 * Anchor tag to do navigation using the history API
 * @param {LinkProperties} [options] 
 * @param  {...import("../../libs/core.js").Children} children 
 * @returns {HTMLAnchorElement}
 */
export function Link(options, ...children) {
  const {href, state, method, defaultBehavior} = options ?? {}

  const anchor = _.a(options, ...children)

  anchor[linkNavigateSymbol] = undefined

  anchor[linkStateSymbol] = state

  anchor[linkDefaultBehaviorSymbol] = Boolean(defaultBehavior)

  if (typeof href === 'string') {
    anchor.href = href
  }

  if (typeof method === 'string') {
    anchor.dataset.method = method
    anchor[linkMethodSymbol] = method
  }

  // Propagate accessibility keyboard events for it to be used in inner components

  anchor.addEventListener('keydown', event => {
    if (event.code !== 'Enter') {
      return
    }

    setTimeout(() => {
      if (anchor.firstElementChild) {
        anchor.firstElementChild.dispatchEvent(new CustomEvent('pointerdown', {bubbles: false}))
      }
    })
  })

  anchor.addEventListener('keyup', event => {
    if (event.code !== 'Enter') {
      return
    }

    setTimeout(() => {
      if (anchor.firstElementChild) {
        anchor.firstElementChild.dispatchEvent(new CustomEvent('pointerup', {bubbles: false}))
      }
    })
  })

  return anchor
}


window.addEventListener('click', event => {
  /**@type {HTMLAnchorElement}*/
  // @ts-ignore
  const anchor = event.target.closest('a')

  // Use the default behavior of the anchor
  if (anchor[linkDefaultBehaviorSymbol]) {
    return
  }

  // Check Symbol property to conditionally apply the logic
  if (anchor == null || !anchor.hasOwnProperty(linkNavigateSymbol)) {
    return
  }

  // Prevent default behavior of `<a>` tags on click event
  event.preventDefault()

  const url = anchor.href

  const state = anchor[linkStateSymbol]

  switch (anchor[linkMethodSymbol]) {
    case 'replace':
      navigation.replace(url, state)
    break

    case 'push':
      navigation.push(url, state)
    break

    default:
      // If the url contains a hash then replace the current history entry else add a new entry 
      if (url.includes('#')) {
        navigation.replace(url, state)
      } else {
        navigation.push(url, state)
      }
  }

}, {capture: true})
