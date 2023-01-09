import _ from "../../index.js"
import { navigation } from "./navigation.js"

const linkNavigateSymbol = Symbol('link-navigate')
const linkStateSymbol = Symbol('state')
const linkMethodSymbol = Symbol('method')

/**
 * @typedef LinkPropertiesDef
 * @property {string} [href]
 * @property {History['state']} [state]
 * @property {'push' | 'replace'} [method]
 */

/**
 * @typedef {import("../../libs/core.js").FunctionalDOMProperties & LinkPropertiesDef} LinkProperties
 */

/**
 * Anchor tag to do navigation using the history API
 * @param {LinkProperties} [options] 
 * @param  {import("../../libs/core.js").Children} children 
 * @returns {HTMLAnchorElement}
 */
export function Link(options, ...children) {
  const {href, state, method} = options ?? {}

  const anchor = _.a(options, ...children)

  anchor[linkNavigateSymbol] = undefined

  anchor[linkStateSymbol] = state

  if (typeof href === 'string') {
    anchor.href = href
  }

  if (typeof method === 'string') {
    anchor.dataset.method = method
    anchor[linkMethodSymbol] = method
  }

  return anchor
}


window.addEventListener('click', event => {

  /**@type {HTMLAnchorElement}*/
  // @ts-ignore
  const anchor = event.target.closest('a')

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
