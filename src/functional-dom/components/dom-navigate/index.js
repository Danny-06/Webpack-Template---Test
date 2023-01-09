import _ from "../../index.js";
import { sortWildCardRouteToEnd } from "./utils.js";

/**
 * @typedef NavigateRoute
 * @property {string} path
 * @property {() => import("../../libs/core.js").CoreNode} component
 */

/**
 * @typedef DOMNavigateObject
 * @property {HTMLElement} component
 * @property {(pathname: string) => void} update
 */

/**
 * 
 * @param {NavigateRoute[]} navigateRoutes 
 * @returns {DOMNavigateObject}
 */
export default function DOMNavigate(navigateRoutes) {
  const component = _['dom-navigate']()

  navigateRoutes = sortWildCardRouteToEnd(navigateRoutes)  

  return {
    component,

    update(pathname) {
      let renderComponent = null

      for (const route of navigateRoutes) {
        if (route.path === pathname) {
          renderComponent = route.component
          break
        }

        if (route.path === '*') {
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
