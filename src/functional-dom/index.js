import DOMMaker, { buildElement, buildElementNS, NSMaker } from './libs/core.js'
import { createWebComponent } from './libs/create-web-component.js'


const _ = DOMMaker

export default _


/**
 * @typedef {NSMakerProxyProperties<SVGElement, 'http://www.w3.org/2000/svg'>} SVGMaker
 */

/**
 * @type {SVGMaker}
 */
const _svg = NSMaker('http://www.w3.org/2000/svg')

export {
  buildElement,
  createWebComponent,

  _svg,

  NSMaker,
  buildElementNS
}
