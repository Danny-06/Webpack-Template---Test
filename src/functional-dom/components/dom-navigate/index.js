import _ from "../../index.js";
import navigation from "./navigation.js";
import { sortWildCardRouteToEnd } from "./utils.js";

/**
 * @typedef NavigateRouteComponent
 * @property {string} path
 * @property {() => import("../../libs/core.js").CoreNode} component
 * @property {never} [redirect]
 */

/**
 * @typedef NavigateRouteRedirect
 * @property {string} path
 * @property {never} [component]
 * @property {string} redirect
 */

/**
 * @typedef {NavigateRouteComponent | NavigateRouteRedirect} NavigateRoute
 */

/**
 * @typedef DOMNavigateObject
 * @property {HTMLElement} component
 * @property {(pathname: string) => void} update Update component based on the provided pathname
 */

/**
 * 
 * @param {NavigateRoute[]} navigateRoutes 
 * @returns {DOMNavigateObject}
 */
export default function DOMNavigate(navigateRoutes) {
  const component = _['dom-navigate']()

  const sortedRoutes = sortWildCardRouteToEnd(navigateRoutes)  

  return {
    component,

    update(pathname) {
      let renderComponentFunc = null

      for (const route of sortedRoutes) {
        if (route.path === pathname) {
          if ('redirect' in route) {
            navigation.replace(route.redirect)
            return
          }

          renderComponentFunc = route.component
          break
        }

        if (route.path === '*') {
          if ('redirect' in route) {
            navigation.replace(route.redirect)
            return
          }

          renderComponentFunc = route.component
          break
        }
      }

      component.replaceChildren()

      if (typeof renderComponentFunc !== 'function') {
        return
      }

      const renderComponent = renderComponentFunc()

      // @ts-ignore
      component.append(renderComponent)
    }
  }
}
