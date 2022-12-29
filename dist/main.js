/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

  const css = "@charset \"UTF-8\";\r\n\r\n[data-id=\"app-content\"] {\r\n  display: grid;\r\n  grid-template-columns: 300px 1fr;\r\n  grid-template-rows: 1fr;\r\n\r\n  padding: 0;\r\n\r\n  overflow: auto;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\r\n[data-id=\"app-content\"] {\r\n    grid-template-columns: 1fr\r\n}\r\n  }\r\n\r\nhtml {\r\n    --width: sonic-px;\r\n  }\r\n\r\nhtml {\r\n    --width: tails-px;\r\n  }\r\n\r\nhtml {\r\n    --width: knuckles-px;\r\n  }\r\n\r\nhtml {\r\n    --width: 1px;\r\n  }\r\n\r\nhtml {\r\n    --width: 2px;\r\n  }\r\n\r\nhtml {\r\n    --width: 3px;\r\n  }\r\n\r\n:is(html) {\r\n  background-color: #000;\r\n}\r\n\r\n:is(html) > body {\r\n    background-color: #000;\r\n  }\r\n\r\n@media (max-width: 700px) {\r\n\r\n:is(html) > body {\r\n      background-color: #111\r\n  }\r\n    }\r\n\r\n\r\n.aside-component {\r\n  grid-column: 1 / span 1;\r\n  grid-row: 1 / span 1;\r\n  background-color: #000;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 0.5rem;\r\n\r\n  padding: 1rem;\r\n\r\n  background-color: #142434;\r\n\r\n  overflow: auto;\r\n}\r\n\r\n\r\n@media (max-width: 600px) {\r\n\r\n\r\n.aside-component {\r\n    display: none\r\n}\r\n  }\r\n\r\n\r\n.aside-component > .item {\r\n    padding-inline: 0.6rem;\r\n    padding-block: 0.6rem;\r\n  \r\n    border: solid 2px #fff;\r\n    background-color: #06f;\r\n  }\r\n\r\n\r\n.aside-component > .item:last-child {\r\n      margin-top: auto;\r\n    }\r\n\r\n.main-component {\r\n  grid-column: 2 / span 1;\r\n  grid-row: 1 / span 1;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1rem;\r\n\r\n  padding: 1rem;\r\n\r\n  overflow: auto;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\r\n.main-component {\r\n    grid-column: 1 / span 1\r\n}\r\n  }\r\n\r\n.main-component > .title-border-wrapper {\r\n    align-self: center;\r\n\r\n    padding-bottom: 1rem;\r\n  }\r\n\r\n.title-border-wrapper {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  --vertical-length: 3rem;\r\n}\r\n\r\n.title-border-wrapper > .title {\r\n    padding-block: 1rem;\r\n    padding-inline: 0.5rem;\r\n  \r\n    text-align: center;\r\n  }\r\n\r\n.cards-container {\r\n  align-self: center;\r\n\r\n  width: 100%;\r\n  max-width: 700px;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  column-gap: 1rem;\r\n}\r\n\r\n.cards-container > .card {\r\n    max-width: 190px;\r\n\r\n    flex-shrink: 1;\r\n  }\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 0.5rem;\r\n\r\n  padding-block: 0.5rem;\r\n  padding-inline: 1rem;\r\n\r\n  border-radius: 0.6rem;\r\n  background-color: #06f;\r\n}\r\n\r\n.card > .title {\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n  }\r\n\r\n.btn {\r\n  background-color: #06f;\r\n  padding: 1rem;\r\n  border-radius: 0.3em;\r\n}\r\n"

  const stylesheet = new CSSStyleSheet()
  stylesheet.replaceSync(css)

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylesheet);
  

/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NSMaker": () => (/* reexport safe */ _libs_core_js__WEBPACK_IMPORTED_MODULE_0__.NSMaker),
/* harmony export */   "_svg": () => (/* binding */ _svg),
/* harmony export */   "buildElement": () => (/* reexport safe */ _libs_core_js__WEBPACK_IMPORTED_MODULE_0__.buildElement),
/* harmony export */   "buildElementNS": () => (/* reexport safe */ _libs_core_js__WEBPACK_IMPORTED_MODULE_0__.buildElementNS),
/* harmony export */   "buildShadowHostElement": () => (/* reexport safe */ _libs_core_js__WEBPACK_IMPORTED_MODULE_0__.buildShadowHostElement),
/* harmony export */   "createWebComponent": () => (/* reexport safe */ _libs_create_web_component_js__WEBPACK_IMPORTED_MODULE_1__.createWebComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _libs_create_web_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



const _ = _libs_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_);


/**
 * @typedef {import('./libs/core.js').NSMakerProxyProperties<SVGElement, 'http://www.w3.org/2000/svg'>} SVGMaker
 */

/**
 * @type {SVGMaker}
 */
const _svg = (0,_libs_core_js__WEBPACK_IMPORTED_MODULE_0__.NSMaker)('http://www.w3.org/2000/svg')




/***/ }),
/* 3 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NSMaker": () => (/* binding */ NSMaker),
/* harmony export */   "buildElement": () => (/* binding */ buildElement),
/* harmony export */   "buildElementNS": () => (/* binding */ buildElementNS),
/* harmony export */   "buildShadowHostElement": () => (/* binding */ buildShadowHostElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/**
 * @typedef {string | number | HTMLElement | DocumentFragment} CoreNode
 */

/**
 * @typedef {CoreNode[] | CoreNode[][]} Children
 */

/**
 * @typedef {(...children: CoreNode[]) => DocumentFragment} DOMMakerProxyFunc
 */

/**
 * @typedef {{
 *  [key in keyof HTMLElementTagNameMap]: (properties?: FunctionalDOMProperties, ...children: Children) => HTMLElementTagNameMap[key]
 * }} DOMMakerHTMLProxyProperties
 */

/**
 * @typedef ShadowDOMOptions
 * @property {ShadowRootInit} [init]
 * @property {ShadowRootMode} [mode=open]
 * @property {CSSStyleSheet[]} [adoptedStyleSheets=[]]
 * @property {HTMLElement[]} [children]
 */

/**
 * @typedef {{
 *  $: {[key in keyof HTMLElementTagNameMap]: (properties: FunctionalDOMProperties, shadowDOMOptions: ShadowDOMOptions, ...children: Children) => HTMLElementTagNameMap[key]}
 * }} DOMMakerShadowDOMHTMLProxyProperties
 */

/**
 * @typedef {{
 *  $: {[key: string]: (properties: FunctionalDOMProperties, shadowDOMOptions: ShadowDOMOptions, ...children: Children) => HTMLElement}
 * }} DOMMakerShadowDOMProxyProperties
 */

/**
 * @typedef {{
 *  $map: (length: number, callback: (index: number) => CoreNode) => CoreNode[]
 * }} DOMMakerMapFunc
 */

/**
* @typedef {{
*  [key: string]: (properties?: FunctionalDOMProperties, ...children: Children) => HTMLElement
* }} DOMMakerProxyProperties
*/

/**
 * @typedef {DOMMakerProxyFunc & DOMMakerHTMLProxyProperties & DOMMakerShadowDOMHTMLProxyProperties & DOMMakerShadowDOMProxyProperties & DOMMakerMapFunc & DOMMakerProxyProperties} DOMMakerProxy
 */

/**
 * @typedef FunctionalDOMProperties
 * @property {string} [id]
 * @property {string | string[]} [class]
 * @property {{[key: string]: string}} [dataset]
 * @property {{[key: string]: string}} [attributes]
 * @property {{[key: string]: string}} [style]
 */


/**
 * @type {DOMMakerProxy}
 * 
 * Proxy object that is the core of this library.  
 * By invoking it as a `function` you can wrap multiple `DOM elements` in a `DocumentFramgent`.
 * 
 * If instead we access a `property` of it  
 * we will get a `function` that creates a `DOM element`  
 * which `tagName` match the name of the function.
 * 
 * @example
 *  const div = document.createElement('div')
 *  const button = document.createElement('button')
 * 
 *  // DocumentFragment<HTMLDivElement, HTMLButtonElement>
 *  const documentFragment = DOMMaker(div, button)
 * 
 * @example
 * const div    = DOMMaker.div()
 * const button = DOMMaker.button()
 * 
 * const customElement = DOMMaker['custom-element']()
 *  
 */
const DOMMaker = new Proxy(function() {}, {

  /**
   * 
   * @param {*} target 
   * @param {*} thisArg 
   * @param {HTMLElement[]} argArray 
   * @returns {DocumentFragment}
   */
  apply: (target, thisArg, argArray) => {
    const documentFragment = new DocumentFragment()

    documentFragment.append(...argArray.filter(node => node != null))

    return documentFragment
  },

  /**
   * @param {*} target 
   * @param {string} property 
   * @param {*} receiver 
   * @returns {*}
   */
  get: (target, property, receiver) => {
    switch (property) {
      case '$':
        return new Proxy(function() {}, {
          /**
           * @param {*} target 
           * @param {string} innerProperty 
           * @param {*} receiver 
           * @returns {*}
           */
          get: (target, innerProperty, receiver) => {
            return function(properties, shadowDOMOptions, ...children) {
              const element = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(innerProperty)

              buildShadowHostElement(element, properties, shadowDOMOptions, ...children)

              return element
            }
          }
        })

      case '$map':
        return _helpers_js__WEBPACK_IMPORTED_MODULE_0__.$map

      default:
    }

    return function(properties, ...children) {
      const element = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(property)

      buildElement(element, properties, ...children)

      return element
    }
  }

})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMMaker);

/**
 * @template T
 * @param {T extends HTMLElement ? T : never} element 
 * @param {FunctionalDOMProperties} [properties] 
 * @param  {...CoreNode} children 
 * @returns {T}
 * 
 * It's similar to `DOMMaker.property()` but instead of  
 * creating an element it just takes an `element` and applies  
 * the `properties` and the `children` to it.
 */
function buildElement(element, properties = {}, ...children) {
  const {id, class: classes, dataset, attributes, style} = properties ?? {}

  const tp = window.trustedTypes ? trustedTypes.createPolicy('', {createHTML: e => e, createScriptURL: e => e }) : {createHTML: e => e, createScriptURL: e => e }

  if (id) {
    element.id = id
  }

  if (classes) {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setClasses)(element, classes)
  }

  if (dataset) {
    for (const [property, value] of Object.entries(dataset ?? {})) {
      if (value === undefined) continue

      element.dataset[property] = value
    }
  }

  for (const [property, value] of Object.entries(attributes ?? {})) {
    if (value === undefined) continue

    if (['src', 'href'].includes(property)) {
      element.setAttribute(property, tp.createScriptURL(value))

      continue
    }

    element.setAttribute(property, value)
  }

  if (style) {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setStyleProperties)(element.style, style)
  }

  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setChildren)(element, children)

  return element
}

/**
 * @template T
 * @param {T extends HTMLElement ? T : never} element 
 * @param {FunctionalDOMProperties=} properties 
 * @param {ShadowDOMOptions=} shadowDOMOptions
 * @param  {...HTMLElement} children 
 * @returns {T}
 * 
 * It's similar to `buildElement` but it also accepts
 * an extra parameter to configure the `Shadow DOM`
 */
function buildShadowHostElement(element, properties = {}, shadowDOMOptions = {}, ...children) {
  buildElement(element, properties, ...children)

  const shadowRootInit = {mode: 'open', ...shadowDOMOptions.init}

  if (shadowDOMOptions.mode) {
    shadowRootInit.mode = shadowDOMOptions.mode
  }
  
  const shadowRoot = element.attachShadow(shadowRootInit)
  
  if (Array.isArray(shadowDOMOptions.adoptedStyleSheets)) {
    shadowRoot.adoptedStyleSheets = shadowDOMOptions.adoptedStyleSheets
  }
  
  shadowRoot.append(...shadowDOMOptions.children ?? [])
  
  return element
}




// TO DO

/**
 * @template T
 * @template R
 * @typedef {{
 *  [key in keyof SVGElementTagNameMap]: (properties?: FunctionalDOMProperties, ...children: T[]) => R extends 'http://www.w3.org/2000/svg' ? SVGElementTagNameMap[key] : Element
 * }} NSMakerProxySVGProperties
 */

/**
 * @template T
 * @template R
 * @typedef {{
 *  [key: string]: (properties?: FunctionalDOMProperties, ...children: T[]) => R extends 'http://www.w3.org/2000/svg' ? SVGElement : T
 * }} NSMakerProxyStringProperties
 */

/**
 * @template T
 * @template R
 * @typedef {NSMakerProxySVGProperties<T, R> & NSMakerProxyStringProperties<T, R>} NSMakerProxyProperties
 */

/**
 * @typedef {<T extends 'http://www.w3.org/2000/svg' | string>(namespace: T) => T extends 'http://www.w3.org/2000/svg' ? NSMakerProxyProperties<SVGElement, T> : NSMakerProxyProperties<Element, T>} NSMaker
 */

/**
 * @type {NSMaker}
 * 
 * Function that returns a Proxy object to create elements of a specific namespace.  
 * It is similar to `DOMMaker` in behavior but just limited to other elements that are not HTML.  
 * 
 * @example
 * const SVGMaker = NSMaker('http://www.w3.org/2000/svg')
 * 
 * const svg = SVGMaker.svg()
 * const rect = SVGMaker.rect()
 * 
 * const CustomMaker = NSMaker('my-namespace')
 * 
 * const customElement = NSMaker.customelement()
 * 
 */
const NSMaker = namespace => {
  // @ts-ignore
  return new Proxy(function() {}, {

    /**
     * @template T
     * @param {*} target 
     * @param {T extends keyof HTMLElementTagNameMap ? T : HTMLElement} property 
     * @param {*} receiver 
     * @returns {(properties: FunctionalDOMProperties, ...children: HTMLElement[]) => HTMLElementTagNameMap[T]}
     */
    get: (target, property, receiver) => {
      // @ts-ignore
      return function(properties, ...children) {
        // @ts-ignore
        const element = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createElementNS)(property, namespace)
  
        // @ts-ignore
        buildElementNS(element, properties, ...children)
  
        return element
      }
    }
  
  })
}

/**
 * @template T
 * @param {T extends Element ? T : never} element 
 * @param {FunctionalDOMProperties=} properties 
 * @param  {...Element} children 
 * @returns {T}
 * 
 * It's similar to `DOMMaker.property()` but instead of  
 * creating an element it just takes an `element` and applies  
 * the `properties` and the `children` to it.
 */
function buildElementNS(element, properties = {}, ...children) {
  const {id, class: classes, dataset, attributes, style} = properties

  const tp = window.trustedTypes ? trustedTypes.createPolicy('', {createHTML: e => e, createScriptURL: e => e}) : {createHTML: e => e, createScriptURL: e => e }

  if (id) {
    element.id = id
  }

  if (classes) {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setClasses)(element, classes)
  }

  if (dataset) {
    for (const [property, value] of Object.entries(dataset ?? {})) {
      if (value === undefined) continue

      element.dataset[property] = value
    }
  }

  for (const [property, value] of Object.entries(attributes ?? {})) {
    if (value === undefined) continue

    if (['src', 'href'].includes(property)) {
      element.setAttribute(property, tp.createScriptURL(value))

      continue
    }

    element.setAttribute(property, value)
  }

  if (style) {
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setStyleProperties)(element.style, style)
  }

  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setChildren)(element, children)

  return element
}


/***/ }),
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$map": () => (/* binding */ $map),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createElementNS": () => (/* binding */ createElementNS),
/* harmony export */   "setChildren": () => (/* binding */ setChildren),
/* harmony export */   "setClasses": () => (/* binding */ setClasses),
/* harmony export */   "setStyleProperties": () => (/* binding */ setStyleProperties)
/* harmony export */ });

/**
 * @template T
 * @param {T extends keyof HTMLElementTagNameMap ? T : string} tagName 
 * @returns {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : HTMLElement}
 */
function createElement(tagName) {
  /**
   * @type {any}
   */
  const element = document.createElement(tagName)

  return element
}

/**
 * @template {string} T
 * @template {string | 'http://www.w3.org/2000/svg'} R
 * @param {T extends keyof SVGElementTagNameMap ? T : string} tagName 
 * @param {R} namespace
 * @returns {namespace extends 'http://www.w3.org/2000/svg' ? T extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[T] : SVGElement : Element}
 */
function createElementNS(tagName, namespace) {
  /**
   * @type {any}
   */
  const element = document.createElementNS(namespace, tagName)

  return element
}

/**
 * 
 * @param {HTMLElement} element 
 * @param {string | string[]} classes 
 */
function setClasses(element, classes) {
  if (Array.isArray(classes)) {
    element.className = classes.join(' ')
  } else if (typeof classes === 'string') {
    element.className = classes
  }
}

/**
 * 
 * @param {HTMLElement} element 
 * @param {import("./core.js").Children} children 
 */
function setChildren(element, children) {
  // @ts-ignore
  element.append(...children.flat(Infinity))
}


/**
 * 
 * @param {string} string 
 * @returns {string}
 */
const lowerCaseToHyphen = string => string.split(/(?=[A-Z])/).map(str => str.toLowerCase()).join('-')

/**
 *
 * @param {CSSStyleDeclaration} style
 * @param {{[key: string]: string}} properties
 */
function setStyleProperties(style, properties) {
  for (const property in properties) {

    let propertyName = property

    const isCustomProperty = propertyName.startsWith('--')
    const hasHyphen = propertyName.includes('-')
    if(!isCustomProperty && !hasHyphen) {
      propertyName = lowerCaseToHyphen(propertyName)
    }

    const prefixVendors = propertyName.search(/^(webkit|moz|ms|o)-/) !== -1
    if(prefixVendors) {
      propertyName = `-${propertyName}`
    }

    const priority = properties[property].match(/![a-z]+$/ig)?.[0].slice(1) ?? ''
    const propertyValue = priority ? properties[property].replace(new RegExp(`!${priority}$`, 'i'), '') : properties[property]

    style.setProperty(propertyName, propertyValue, priority)

  }
}



function $map(length, callback) {
  const collection = new Array(length)

  for (let i = 0; i < length; i++) {
    collection[i] = callback(i)
  }

  return collection
}


/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWebComponent": () => (/* binding */ createWebComponent)
/* harmony export */ });
// @ts-nocheck

const mutationObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type === 'attributes') {
      const target = mutation.target

      const name = mutation.attributeName
      const oldValue = mutation.oldValue
      const newValue = target.getAttribute(name)

      target?.attributeChangedCallback(name, oldValue, newValue)
    }
  })
})

/**
 * Allows the creation of custom elements through any `HTMLElement` like a `<div>`.  
 * The class provided is invoked in the `element` and then its `prototype` is changed  
 * with the prototype of the `class`.  
 * 
 * To declare the `constructor` of the class it must be declared as `_constructor_`  
 * instead of the normal constructor to allow the function to invoke it in the `element`.  
 * 
 * Since the `element` is not an instance of the component is not posible to use `private properties`.  
 * For that reason, is recommended to replace them with properties that starts with an underscore.  
 * 
 * @template T
 * @param {T extends typeof HTMLElement ? T : never} classComponent 
 * @param {HTMLElement} [elementToApply=null]
 * @returns {InstanceType<T>}
 * 
 * @example
 * const component = createWebComponent(class MyComponent extends HTMLElement {
 *   _constructor_() {
 *     this.property = 'value'
 *
 *     console.log(this._privateValue)
 *   }
 *
 *   get innerHTML() {
 *     return super.innerHTML
 *   }
 *
 *   set innerHTML(value) {
 *     super.innerHTML = value
 *   }
 *
 *   static get observedAttributes() {
 *     return ['my-attribute']
 *   }
 *
 *   attributeChangedCallback(name, oldValue, newValue) {
 *     console.log(...arguments)
 *   }
 * })
 */
function createWebComponent(classComponent, elementToApply = null) {
  if (!(classComponent.prototype instanceof HTMLElement)) {
    throw new TypeError(`class component must extends HTMLElement`)
  }

  const component = elementToApply ?? document.createElement('div')

  if (classComponent.observedAttributes) {
    mutationObserver.observe(component, {
      attributes: true,
      attributeFilter: classComponent.observedAttributes,
      attributeOldValue: true
    })
  }

  Object.setPrototypeOf(component, classComponent.prototype)
  classComponent.prototype._constructor_?.call(component)

  return component
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoolBorder": () => (/* binding */ CoolBorder)
/* harmony export */ });
/* harmony import */ var _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



/**
 * @template T
 * @typedef CoolBorderOptionsDef
 * @property {T extends keyof HTMLElementTagNameMap ? T : string} [tagName="div"]
 */

/**
 * @template T
 * @typedef {CoolBorderOptionsDef<T> & import('../functional-dom/libs/core.js').FunctionalDOMProperties} CoolBorderOptions
 */

/**
 * @template T
 * @param {CoolBorderOptions<T>} options
 * @param  {...HTMLElement} children 
 * @returns {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : HTMLElement}
 */
function CoolBorder(options, ...children) {
  const {tagName = 'div'} = options ?? {}

  const shadowRootContent = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({class: 'wrapper-border-effect _grid-overlay_'}, 
    _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({class: 'my-content'},
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].slot(),
    ),
    _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({class: 'border-effect'},
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({class: 'border'}),
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({class: 'border'}),
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({class: 'border'}),
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({class: 'border'}),
    )
  )

  const wrapper = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].$[tagName](null, {
    adoptedStyleSheets: [_main_css__WEBPACK_IMPORTED_MODULE_1__["default"]],
    children: [shadowRootContent]
  })

  return (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.buildElement)(wrapper, options, ...children)
}


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

  const css = ":host {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*:not(:host),\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n\r\n.my-content {\r\n  display: grid;\r\n  place-items: center;\r\n}\r\n\r\n/* Utility Classes Start */\r\n\r\n._grid-overlay_ {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 1fr;\r\n  grid-template-areas: 'overlay';\r\n}\r\n\r\n._grid-overlay_ > * {\r\n  grid-area: overlay;\r\n  z-index: 0;\r\n}\r\n\r\n/* Utility Classes End */\r\n\r\n\r\n/* Border Effect */\r\n\r\n:host {\r\n  --border-width: 3px;\r\n  --horizontal-length: 100px;\r\n  --vertical-length: 100px;\r\n}\r\n\r\n.wrapper-border-effect {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.wrapper-border-effect > :first-child {\r\n  border-style: solid;\r\n  border-color: transparent;\r\n  border-width: var(--border-width);\r\n}\r\n\r\n\r\n\r\n.border-effect {\r\n  pointer-events: none;\r\n\r\n  position: relative;\r\n\r\n  --horizontal-angle: 90deg;\r\n  --horizontal-reversed-angle: 270deg;\r\n\r\n  --vertical-angle: 180deg;\r\n  --vertical-reversed-angle: 0deg;\r\n  \r\n  --vertical-clip-path: polygon(\r\n    0 0,\r\n    100% 0,\r\n    50% calc(var(--vertical-length) * 2)\r\n  );\r\n  \r\n  --vertical-clip-path-reversed: polygon(\r\n    50% calc(100% - var(--vertical-length) * 2),\r\n    100% 100%,\r\n    0% 100%\r\n  );\r\n  \r\n  --horizontal-clip-path: polygon(\r\n    0 0,\r\n    0 100%,\r\n    calc(var(--horizontal-length) * 2) 50%\r\n  );\r\n  \r\n  --horizontal-clip-path-reversed: polygon(\r\n    calc(100% - var(--horizontal-length) * 2) 50%,\r\n    100% 0,\r\n    100% 100%\r\n  );\r\n}\r\n\r\n.border-effect > .border {\r\n  position: absolute;\r\n}\r\n\r\n/* Horizontal Top */\r\n.border-effect > .border:nth-child(1) {\r\n  top: 0;\r\n  left: 0;\r\n\r\n  width: 100%;\r\n  height: var(--border-width);\r\n\r\n  background-image: linear-gradient(\r\n    var(--horizontal-angle),\r\n    #fff9,\r\n    transparent var(--horizontal-length)\r\n  );\r\n\r\n  clip-path: var(--horizontal-clip-path);\r\n}\r\n\r\n/* Vertical Left */\r\n.border-effect > .border:nth-child(2) {\r\n  top: var(--border-width);\r\n  left: 0;\r\n\r\n  width: var(--border-width);\r\n  height: calc(100% - var(--border-width));\r\n\r\n  background-image: linear-gradient(\r\n    var(--vertical-angle),\r\n    #fff9,\r\n    transparent calc(var(--vertical-length) - 2px)\r\n  );\r\n\r\n  clip-path: var(--vertical-clip-path);\r\n}\r\n\r\n/* Horizontal Bottom */\r\n.border-effect > .border:nth-child(3) {\r\n  bottom: 0;\r\n  right: 0;\r\n\r\n  width: 100%;\r\n  height: var(--border-width);\r\n\r\n  background-image: linear-gradient(\r\n    var(--horizontal-reversed-angle),\r\n    #fff9,\r\n    transparent var(--horizontal-length)\r\n  );\r\n\r\n  clip-path: var(--horizontal-clip-path-reversed);\r\n}\r\n\r\n/* Vertical Right */\r\n.border-effect > .border:nth-child(4) {\r\n  bottom: var(--border-width);\r\n  right: 0;\r\n\r\n  width: var(--border-width);\r\n  height: calc(100% - var(--border-width));\r\n\r\n  background-image: linear-gradient(\r\n    var(--vertical-reversed-angle),\r\n    #fff9,\r\n    transparent calc(var(--vertical-length) - 2px)\r\n  );\r\n\r\n  clip-path: var(--vertical-clip-path-reversed);\r\n}\r\n"

  const stylesheet = new CSSStyleSheet()
  stylesheet.replaceSync(css)

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylesheet);
  

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomButton": () => (/* binding */ CustomButton)
/* harmony export */ });
/* harmony import */ var _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



function CustomButton(options, ...children) {
  const effect = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].div()

  const host = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]["custom-button"]()
  host.role = 'button'

  let isEnd = false

  let isPressed = false

  // host.addEventListener('pointercancel', event => {
  //   console.log(event)
  //   isEnd = false
  //   isPressed = true

  //   effect.classList.remove('grow')
  //   effect.classList.remove('grow-reversed')
  // })

  host.addEventListener('pointerdown', event => {
    if (event.button !== 0) {
      return
    }

    isEnd = false
    isPressed = true

    effect.classList.remove('grow')
    effect.classList.remove('grow-reversed')

    // Trigger layout to compute styles
    effect.getBoundingClientRect()

    effect.classList.add('grow')

    effect.style.setProperty('--y', `${event.offsetY}px`)
    effect.style.setProperty('--x', `${event.offsetX}px`)

    const maxSize = Math.max(host.offsetWidth, host.offsetHeight)

    effect.style.setProperty('--size', `${maxSize}px`)

    const pointerUpListener = event => {
      isPressed = false

      if (isEnd) {
        effect.classList.remove('grow')
        effect.getBoundingClientRect()
        effect.classList.add('grow-reversed')
      } else {
        effect.addEventListener('animationend', event => {
          if (isPressed) {
            return
          }

          effect.classList.remove('grow')
          effect.getBoundingClientRect()
          effect.classList.add('grow-reversed')
        }, {once: true})
      }
    }

    if (event.pointerType === 'touch') {
      window.addEventListener('touchend', pointerUpListener, {capture: true, once: true})
    } else {
      window.addEventListener('pointerup', pointerUpListener, {capture: true, once: true})
    }
  })

  effect.addEventListener('animationend', event => {
    isEnd = true
  })

  return (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.buildShadowHostElement)(host, options,
    {
      adoptedStyleSheets: [_main_css__WEBPACK_IMPORTED_MODULE_1__["default"]],
      children: [
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].slot(),
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].div({class: 'effect-wrapper'},
        (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_0__.buildElement)(effect, {class: 'ripple-effect', attributes: {part: 'ripple-effect'}}),
      )
    ]
    },
    ...children
  )
}


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

  const css = ":host {\r\n  position: relative;\r\n  overflow: hidden;\r\n\r\n  background-color: #06f;\r\n  padding: 1rem;\r\n  border-radius: 0.3em;\r\n}\r\n\r\n:host {\r\n  --ripple-color: #0007;\r\n}\r\n\r\n.effect-wrapper {\r\n  position: absolute;\r\n  inset: 0;\r\n  margin: auto;\r\n\r\n  pointer-events: none;\r\n\r\n  overflow: hidden;\r\n}\r\n\r\n.ripple-effect {\r\n  opacity: 0;\r\n\r\n  width: var(--size);\r\n  height: var(--size);\r\n\r\n  position: absolute;\r\n  top: var(--y);\r\n  left: var(--x);\r\n\r\n  transform: translate(-50%, -50%) scale(0);\r\n\r\n  border-radius: 50%;\r\n  background-color: var(--ripple-color);\r\n\r\n  transition: transform 0.2s;\r\n}\r\n\r\n.grow {\r\n  animation: grow 0.2s ease-out forwards;\r\n}\r\n\r\n.grow-reversed {\r\n  opacity: 1;\r\n  transform: translate(-50%, -50%) scale(1.5);\r\n\r\n  animation: grow 0.2s ease-out reverse forwards;\r\n}\r\n\r\n@keyframes grow {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate(-50%, -50%) scale(0);\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    transform: translate(-50%, -50%) scale(1.5);\r\n  }\r\n}\r\n"

  const stylesheet = new CSSStyleSheet()
  stylesheet.replaceSync(css)

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stylesheet);
  

/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMNavigate),
/* harmony export */   "navigation": () => (/* binding */ navigation)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);



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
function DOMNavigate(options, navigateRoutes) {
  const component = _index_js__WEBPACK_IMPORTED_MODULE_0__["default"]["dom-navigate"](options)

  return {
    component,

    update() {
      let renderComponent = null

      for (const route of navigateRoutes) {
        if (route.path === location.pathname) {
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
   * @param {'custom-navigate'} eventType 
   * @param {(event: CustomEvent) => void} callbackListener 
   */
  addEventListener(eventType, callbackListener) {
    window.addEventListener(eventType, callbackListener)
  }

}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _CoolBorder_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _CustomButton_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);






document.adoptedStyleSheets = [_styles_main_css__WEBPACK_IMPORTED_MODULE_0__["default"]]


const Navigate = (0,_functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])({class: 'navigate-component'}, [
  {
    path: '/',
    component: function Root() {
      return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({class: 'root'}, 'The root of things')
    }
  },
  {
    path: '/sonic',
    component: function Sonic() {
      return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]["sonic-p"]({},
        'Sonic',
        _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({class: 'state'}, `State value of this path: ${JSON.stringify(_functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__.navigation.state)}`)
      )
    }
  },
  {
    path: '/amy',
    component: function Amy() {
      return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]["amy-p"]({}, 'Amy')
    }
  },
])

_functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__.navigation.addEventListener('custom-navigate', event => {
  Navigate.update()
})

function App() {
  return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({dataset: {id: 'app'}},
    _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({dataset: {id: 'app-content'}},
      Aside(),
      Main(),
    )
  )
}

function Aside() {
  return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].aside({class: 'aside-component'},
    _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].$map(6, index => _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({class: 'item'}, index + 1))
  )
}

function Main() {
  const sonicBtn = (0,_CustomButton_index_js__WEBPACK_IMPORTED_MODULE_3__.CustomButton)()
  sonicBtn.addEventListener('click', event => _functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__.navigation.push('/sonic', 'Princess Elise'))

  const amyBtn = (0,_CustomButton_index_js__WEBPACK_IMPORTED_MODULE_3__.CustomButton)()
  amyBtn.addEventListener('click', event => _functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__.navigation.push('/amy'))

  const rootBtn = (0,_CustomButton_index_js__WEBPACK_IMPORTED_MODULE_3__.CustomButton)()
  rootBtn.addEventListener('click', event => _functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__.navigation.push('/'))

  return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].main({class: 'main-component'},
    (0,_CoolBorder_index_js__WEBPACK_IMPORTED_MODULE_2__.CoolBorder)({tagName: 'h1', class: 'title-border-wrapper'},
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({class: 'title'}, 'Some cool title')
    ),
    CardsContainer(),

    TypeSonic(),

    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(sonicBtn, {class: 'btn', style: {backgroundColor: '#04a'}}, 'Go to Sonic'),
    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(amyBtn, {class: 'btn', style: {backgroundColor: '#b4b'}}, 'Go to Amy'),
    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(rootBtn, {class: 'btn', style: {backgroundColor: '#090'}}, 'Go to Root'),

    Navigate.component,
  )
}

function TypeSonic() {
  const typeEffect = TypeEffect()

  const btn = (0,_CustomButton_index_js__WEBPACK_IMPORTED_MODULE_3__.CustomButton)()

  btn.addEventListener('click', event => {
    typeEffect.initAnimation('Sonic The Hedgehog', 100)
  })

  return (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(typeEffect.component, {class: 'type-effect-component'}),
    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(btn,
      {class: 'btn', style: {alignSelf: 'flex-start'}},
      'Click Me'
    ),
  )
}

function CardsContainer() {
  return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({class: 'cards-container'},
    _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].$map(3, () => _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({class: 'card'},
        _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({class: 'title'}, 'Card Title'),
        _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({class: 'content'}, 'My perfect content\n'.repeat(4))
      )
    ),
  )
}


function TypeEffect() {
  const placeholderForEmptyString = () => _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].pre({}, ' ')
  const component = _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]["type-effect"]({class: 'type-effect-component', style: {lineHeight: '1.3em'}}, placeholderForEmptyString())

  let i
  let timeoutAnimation

  function anim(text, delay) {
    component.innerText = text.slice(0, i)

    if (++i > text.length) {
      return
    }

    timeoutAnimation = setTimeout(anim, delay, ...arguments)
  }

  return {
    component,
    initAnimation(text = 'No Text To Type', delay = 100) {
      clearTimeout(timeoutAnimation)
      i = 1

      component.innerHTML = ''
      component.append(placeholderForEmptyString())

      setTimeout(anim, delay, ...arguments)
    }
  }
}

const render = (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  App(),
)

document.body.replaceChildren()

document.body.append(render)

})();

/******/ })()
;