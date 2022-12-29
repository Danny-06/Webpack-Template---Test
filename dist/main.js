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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



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

  navigateRoutes = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.sortWildCardRouteToEnd)(navigateRoutes)  

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

  // setRoot(url) {
  //   const newURL = new URL(url)
  //   const root = newURL.pathname.split('/').slice(0, -1).join('/')

  //   rootPath = root
  // },

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


/***/ }),
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortWildCardRouteToEnd": () => (/* binding */ sortWildCardRouteToEnd)
/* harmony export */ });
/**
 * 
 * @param {import("./index.js").NavigateRoute[]} routes 
 */
function sortWildCardRouteToEnd(routes) {
  const sortedRoutes = [...routes].sort((a, b) => a.path === '*' ? 1 : b.path === '*' ? -1 : 0)
  return sortedRoutes
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

const routes = [
  {
    path: '*',
    component: function NotFound() {
      return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({}, 'NOT FOUND')
    }
  },
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
]

const Navigate = (0,_functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])({class: 'navigate-component'}, routes)

_functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__.navigation.addEventListener('custom-navigate', event => {
  Navigate.update(location.pathname)
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

  const notFoundBtn = (0,_CustomButton_index_js__WEBPACK_IMPORTED_MODULE_3__.CustomButton)()
  notFoundBtn.addEventListener('click', event => _functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__.navigation.push('/@not-found'))

  return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].main({class: 'main-component'},
    (0,_CoolBorder_index_js__WEBPACK_IMPORTED_MODULE_2__.CoolBorder)({tagName: 'h1', class: 'title-border-wrapper'},
      _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({class: 'title'}, 'Some cool title')
    ),
    CardsContainer(),

    TypeSonic(),

    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(sonicBtn, {class: 'btn', style: {backgroundColor: '#04a'}}, 'Go to Sonic'),
    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(amyBtn, {class: 'btn', style: {backgroundColor: '#b4b'}}, 'Go to Amy'),
    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(rootBtn, {class: 'btn', style: {backgroundColor: '#090'}}, 'Go to Root'),
    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(notFoundBtn, {class: 'btn', style: {backgroundColor: '#222'}}, 'Go to any Not Found'),

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2Z1bmN0aW9uYWwtZG9tL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25hbC1kb20vbGlicy9jb3JlLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25hbC1kb20vbGlicy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25hbC1kb20vbGlicy9jcmVhdGUtd2ViLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL0Nvb2xCb3JkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9Db29sQm9yZGVyL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvQ3VzdG9tQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvQ3VzdG9tQnV0dG9uL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25hbC1kb20vY29tcG9uZW50cy9kb20tbmF2aWdhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbmFsLWRvbS9jb21wb25lbnRzL2RvbS1uYXZpZ2F0ZS91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgY29uc3QgY3NzID0gXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcclxcblxcclxcbltkYXRhLWlkPVxcXCJhcHAtY29udGVudFxcXCJdIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcblxcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiYXBwLWNvbnRlbnRcXFwiXSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyXFxyXFxufVxcclxcbiAgfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICAtLXdpZHRoOiBzb25pYy1weDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgLS13aWR0aDogdGFpbHMtcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIC0td2lkdGg6IGtudWNrbGVzLXB4O1xcclxcbiAgfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICAtLXdpZHRoOiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIC0td2lkdGg6IDJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgLS13aWR0aDogM3B4O1xcclxcbiAgfVxcclxcblxcclxcbjppcyhodG1sKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoaHRtbCkgPiBib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG5cXHJcXG46aXMoaHRtbCkgPiBib2R5IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExXFxyXFxuICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4uYXNpZGUtY29tcG9uZW50IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICByb3ctZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjQzNDtcXHJcXG5cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG5cXHJcXG5cXHJcXG4uYXNpZGUtY29tcG9uZW50IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZVxcclxcbn1cXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4uYXNpZGUtY29tcG9uZW50ID4gLml0ZW0ge1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMC42cmVtO1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjZyZW07XFxyXFxuICBcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2ZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4uYXNpZGUtY29tcG9uZW50ID4gLml0ZW06bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbi5tYWluLWNvbXBvbmVudCB7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcXHJcXG4gIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICByb3ctZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG5cXHJcXG4ubWFpbi1jb21wb25lbnQge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMVxcclxcbn1cXHJcXG4gIH1cXHJcXG5cXHJcXG4ubWFpbi1jb21wb25lbnQgPiAudGl0bGUtYm9yZGVyLXdyYXBwZXIge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbi50aXRsZS1ib3JkZXItd3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAtLXZlcnRpY2FsLWxlbmd0aDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWJvcmRlci13cmFwcGVyID4gLnRpdGxlIHtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDAuNXJlbTtcXHJcXG4gIFxcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sdW1uLWdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciA+IC5jYXJkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxOTBweDtcXHJcXG5cXHJcXG4gICAgZmxleC1zaHJpbms6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICByb3ctZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICBwYWRkaW5nLWJsb2NrOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkID4gLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2ZjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXHJcXG59XFxyXFxuXCJcblxuICBjb25zdCBzdHlsZXNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKVxuICBzdHlsZXNoZWV0LnJlcGxhY2VTeW5jKGNzcylcblxuICBleHBvcnQgZGVmYXVsdCBzdHlsZXNoZWV0XG4gICIsImltcG9ydCBET01NYWtlciwgeyBidWlsZEVsZW1lbnQsIGJ1aWxkRWxlbWVudE5TLCBidWlsZFNoYWRvd0hvc3RFbGVtZW50LCBOU01ha2VyIH0gZnJvbSAnLi9saWJzL2NvcmUuanMnXHJcbmltcG9ydCB7IGNyZWF0ZVdlYkNvbXBvbmVudCB9IGZyb20gJy4vbGlicy9jcmVhdGUtd2ViLWNvbXBvbmVudC5qcydcclxuXHJcbmNvbnN0IF8gPSBET01NYWtlclxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2xpYnMvY29yZS5qcycpLk5TTWFrZXJQcm94eVByb3BlcnRpZXM8U1ZHRWxlbWVudCwgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz59IFNWR01ha2VyXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtTVkdNYWtlcn1cclxuICovXHJcbmNvbnN0IF9zdmcgPSBOU01ha2VyKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpXHJcblxyXG5leHBvcnQge1xyXG4gIGJ1aWxkRWxlbWVudCxcclxuICBidWlsZFNoYWRvd0hvc3RFbGVtZW50LFxyXG4gIGNyZWF0ZVdlYkNvbXBvbmVudCxcclxuXHJcbiAgX3N2ZyxcclxuXHJcbiAgTlNNYWtlcixcclxuICBidWlsZEVsZW1lbnROU1xyXG59XHJcbiIsImltcG9ydCB7ICRtYXAsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUVsZW1lbnROUywgc2V0Q2hpbGRyZW4sIHNldENsYXNzZXMsIHNldFN0eWxlUHJvcGVydGllcyB9IGZyb20gJy4vaGVscGVycy5qcydcclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7c3RyaW5nIHwgbnVtYmVyIHwgSFRNTEVsZW1lbnQgfCBEb2N1bWVudEZyYWdtZW50fSBDb3JlTm9kZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7Q29yZU5vZGVbXSB8IENvcmVOb2RlW11bXX0gQ2hpbGRyZW5cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgeyguLi5jaGlsZHJlbjogQ29yZU5vZGVbXSkgPT4gRG9jdW1lbnRGcmFnbWVudH0gRE9NTWFrZXJQcm94eUZ1bmNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge3tcclxuICogIFtrZXkgaW4ga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXTogKHByb3BlcnRpZXM/OiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgLi4uY2hpbGRyZW46IENoaWxkcmVuKSA9PiBIVE1MRWxlbWVudFRhZ05hbWVNYXBba2V5XVxyXG4gKiB9fSBET01NYWtlckhUTUxQcm94eVByb3BlcnRpZXNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgU2hhZG93RE9NT3B0aW9uc1xyXG4gKiBAcHJvcGVydHkge1NoYWRvd1Jvb3RJbml0fSBbaW5pdF1cclxuICogQHByb3BlcnR5IHtTaGFkb3dSb290TW9kZX0gW21vZGU9b3Blbl1cclxuICogQHByb3BlcnR5IHtDU1NTdHlsZVNoZWV0W119IFthZG9wdGVkU3R5bGVTaGVldHM9W11dXHJcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnRbXX0gW2NoaWxkcmVuXVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiAgJDoge1trZXkgaW4ga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwXTogKHByb3BlcnRpZXM6IEZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzLCBzaGFkb3dET01PcHRpb25zOiBTaGFkb3dET01PcHRpb25zLCAuLi5jaGlsZHJlbjogQ2hpbGRyZW4pID0+IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtrZXldfVxyXG4gKiB9fSBET01NYWtlclNoYWRvd0RPTUhUTUxQcm94eVByb3BlcnRpZXNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge3tcclxuICogICQ6IHtba2V5OiBzdHJpbmddOiAocHJvcGVydGllczogRnVuY3Rpb25hbERPTVByb3BlcnRpZXMsIHNoYWRvd0RPTU9wdGlvbnM6IFNoYWRvd0RPTU9wdGlvbnMsIC4uLmNoaWxkcmVuOiBDaGlsZHJlbikgPT4gSFRNTEVsZW1lbnR9XHJcbiAqIH19IERPTU1ha2VyU2hhZG93RE9NUHJveHlQcm9wZXJ0aWVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHt7XHJcbiAqICAkbWFwOiAobGVuZ3RoOiBudW1iZXIsIGNhbGxiYWNrOiAoaW5kZXg6IG51bWJlcikgPT4gQ29yZU5vZGUpID0+IENvcmVOb2RlW11cclxuICogfX0gRE9NTWFrZXJNYXBGdW5jXHJcbiAqL1xyXG5cclxuLyoqXHJcbiogQHR5cGVkZWYge3tcclxuKiAgW2tleTogc3RyaW5nXTogKHByb3BlcnRpZXM/OiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgLi4uY2hpbGRyZW46IENoaWxkcmVuKSA9PiBIVE1MRWxlbWVudFxyXG4qIH19IERPTU1ha2VyUHJveHlQcm9wZXJ0aWVzXHJcbiovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge0RPTU1ha2VyUHJveHlGdW5jICYgRE9NTWFrZXJIVE1MUHJveHlQcm9wZXJ0aWVzICYgRE9NTWFrZXJTaGFkb3dET01IVE1MUHJveHlQcm9wZXJ0aWVzICYgRE9NTWFrZXJTaGFkb3dET01Qcm94eVByb3BlcnRpZXMgJiBET01NYWtlck1hcEZ1bmMgJiBET01NYWtlclByb3h5UHJvcGVydGllc30gRE9NTWFrZXJQcm94eVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiBGdW5jdGlvbmFsRE9NUHJvcGVydGllc1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2lkXVxyXG4gKiBAcHJvcGVydHkge3N0cmluZyB8IHN0cmluZ1tdfSBbY2xhc3NdXHJcbiAqIEBwcm9wZXJ0eSB7e1trZXk6IHN0cmluZ106IHN0cmluZ319IFtkYXRhc2V0XVxyXG4gKiBAcHJvcGVydHkge3tba2V5OiBzdHJpbmddOiBzdHJpbmd9fSBbYXR0cmlidXRlc11cclxuICogQHByb3BlcnR5IHt7W2tleTogc3RyaW5nXTogc3RyaW5nfX0gW3N0eWxlXVxyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICogQHR5cGUge0RPTU1ha2VyUHJveHl9XHJcbiAqIFxyXG4gKiBQcm94eSBvYmplY3QgdGhhdCBpcyB0aGUgY29yZSBvZiB0aGlzIGxpYnJhcnkuICBcclxuICogQnkgaW52b2tpbmcgaXQgYXMgYSBgZnVuY3Rpb25gIHlvdSBjYW4gd3JhcCBtdWx0aXBsZSBgRE9NIGVsZW1lbnRzYCBpbiBhIGBEb2N1bWVudEZyYW1nZW50YC5cclxuICogXHJcbiAqIElmIGluc3RlYWQgd2UgYWNjZXNzIGEgYHByb3BlcnR5YCBvZiBpdCAgXHJcbiAqIHdlIHdpbGwgZ2V0IGEgYGZ1bmN0aW9uYCB0aGF0IGNyZWF0ZXMgYSBgRE9NIGVsZW1lbnRgICBcclxuICogd2hpY2ggYHRhZ05hbWVgIG1hdGNoIHRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbi5cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gKiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICogXHJcbiAqICAvLyBEb2N1bWVudEZyYWdtZW50PEhUTUxEaXZFbGVtZW50LCBIVE1MQnV0dG9uRWxlbWVudD5cclxuICogIGNvbnN0IGRvY3VtZW50RnJhZ21lbnQgPSBET01NYWtlcihkaXYsIGJ1dHRvbilcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGRpdiAgICA9IERPTU1ha2VyLmRpdigpXHJcbiAqIGNvbnN0IGJ1dHRvbiA9IERPTU1ha2VyLmJ1dHRvbigpXHJcbiAqIFxyXG4gKiBjb25zdCBjdXN0b21FbGVtZW50ID0gRE9NTWFrZXJbJ2N1c3RvbS1lbGVtZW50J10oKVxyXG4gKiAgXHJcbiAqL1xyXG5jb25zdCBET01NYWtlciA9IG5ldyBQcm94eShmdW5jdGlvbigpIHt9LCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFxyXG4gICAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50W119IGFyZ0FycmF5IFxyXG4gICAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fVxyXG4gICAqL1xyXG4gIGFwcGx5OiAodGFyZ2V0LCB0aGlzQXJnLCBhcmdBcnJheSkgPT4ge1xyXG4gICAgY29uc3QgZG9jdW1lbnRGcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KClcclxuXHJcbiAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZCguLi5hcmdBcnJheS5maWx0ZXIobm9kZSA9PiBub2RlICE9IG51bGwpKVxyXG5cclxuICAgIHJldHVybiBkb2N1bWVudEZyYWdtZW50XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHsqfSB0YXJnZXQgXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IFxyXG4gICAqIEBwYXJhbSB7Kn0gcmVjZWl2ZXIgXHJcbiAgICogQHJldHVybnMgeyp9XHJcbiAgICovXHJcbiAgZ2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpID0+IHtcclxuICAgIHN3aXRjaCAocHJvcGVydHkpIHtcclxuICAgICAgY2FzZSAnJCc6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShmdW5jdGlvbigpIHt9LCB7XHJcbiAgICAgICAgICAvKipcclxuICAgICAgICAgICAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFxyXG4gICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlubmVyUHJvcGVydHkgXHJcbiAgICAgICAgICAgKiBAcGFyYW0geyp9IHJlY2VpdmVyIFxyXG4gICAgICAgICAgICogQHJldHVybnMgeyp9XHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGdldDogKHRhcmdldCwgaW5uZXJQcm9wZXJ0eSwgcmVjZWl2ZXIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnRpZXMsIHNoYWRvd0RPTU9wdGlvbnMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoaW5uZXJQcm9wZXJ0eSlcclxuXHJcbiAgICAgICAgICAgICAgYnVpbGRTaGFkb3dIb3N0RWxlbWVudChlbGVtZW50LCBwcm9wZXJ0aWVzLCBzaGFkb3dET01PcHRpb25zLCAuLi5jaGlsZHJlbilcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICBjYXNlICckbWFwJzpcclxuICAgICAgICByZXR1cm4gJG1hcFxyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydGllcywgLi4uY2hpbGRyZW4pIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQocHJvcGVydHkpXHJcblxyXG4gICAgICBidWlsZEVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pXHJcblxyXG4gICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBET01NYWtlclxyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEBwYXJhbSB7VCBleHRlbmRzIEhUTUxFbGVtZW50ID8gVCA6IG5ldmVyfSBlbGVtZW50IFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uYWxET01Qcm9wZXJ0aWVzfSBbcHJvcGVydGllc10gXHJcbiAqIEBwYXJhbSAgey4uLkNvcmVOb2RlfSBjaGlsZHJlbiBcclxuICogQHJldHVybnMge1R9XHJcbiAqIFxyXG4gKiBJdCdzIHNpbWlsYXIgdG8gYERPTU1ha2VyLnByb3BlcnR5KClgIGJ1dCBpbnN0ZWFkIG9mICBcclxuICogY3JlYXRpbmcgYW4gZWxlbWVudCBpdCBqdXN0IHRha2VzIGFuIGBlbGVtZW50YCBhbmQgYXBwbGllcyAgXHJcbiAqIHRoZSBgcHJvcGVydGllc2AgYW5kIHRoZSBgY2hpbGRyZW5gIHRvIGl0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRWxlbWVudChlbGVtZW50LCBwcm9wZXJ0aWVzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgY29uc3Qge2lkLCBjbGFzczogY2xhc3NlcywgZGF0YXNldCwgYXR0cmlidXRlcywgc3R5bGV9ID0gcHJvcGVydGllcyA/PyB7fVxyXG5cclxuICBjb25zdCB0cCA9IHdpbmRvdy50cnVzdGVkVHlwZXMgPyB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCcnLCB7Y3JlYXRlSFRNTDogZSA9PiBlLCBjcmVhdGVTY3JpcHRVUkw6IGUgPT4gZSB9KSA6IHtjcmVhdGVIVE1MOiBlID0+IGUsIGNyZWF0ZVNjcmlwdFVSTDogZSA9PiBlIH1cclxuXHJcbiAgaWYgKGlkKSB7XHJcbiAgICBlbGVtZW50LmlkID0gaWRcclxuICB9XHJcblxyXG4gIGlmIChjbGFzc2VzKSB7XHJcbiAgICBzZXRDbGFzc2VzKGVsZW1lbnQsIGNsYXNzZXMpXHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YXNldCkge1xyXG4gICAgZm9yIChjb25zdCBbcHJvcGVydHksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhc2V0ID8/IHt9KSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgY29udGludWVcclxuXHJcbiAgICAgIGVsZW1lbnQuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBbcHJvcGVydHksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzID8/IHt9KSkge1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlXHJcblxyXG4gICAgaWYgKFsnc3JjJywgJ2hyZWYnXS5pbmNsdWRlcyhwcm9wZXJ0eSkpIHtcclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHRwLmNyZWF0ZVNjcmlwdFVSTCh2YWx1ZSkpXHJcblxyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSlcclxuICB9XHJcblxyXG4gIGlmIChzdHlsZSkge1xyXG4gICAgc2V0U3R5bGVQcm9wZXJ0aWVzKGVsZW1lbnQuc3R5bGUsIHN0eWxlKVxyXG4gIH1cclxuXHJcbiAgc2V0Q2hpbGRyZW4oZWxlbWVudCwgY2hpbGRyZW4pXHJcblxyXG4gIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0ge1QgZXh0ZW5kcyBIVE1MRWxlbWVudCA/IFQgOiBuZXZlcn0gZWxlbWVudCBcclxuICogQHBhcmFtIHtGdW5jdGlvbmFsRE9NUHJvcGVydGllcz19IHByb3BlcnRpZXMgXHJcbiAqIEBwYXJhbSB7U2hhZG93RE9NT3B0aW9ucz19IHNoYWRvd0RPTU9wdGlvbnNcclxuICogQHBhcmFtICB7Li4uSFRNTEVsZW1lbnR9IGNoaWxkcmVuIFxyXG4gKiBAcmV0dXJucyB7VH1cclxuICogXHJcbiAqIEl0J3Mgc2ltaWxhciB0byBgYnVpbGRFbGVtZW50YCBidXQgaXQgYWxzbyBhY2NlcHRzXHJcbiAqIGFuIGV4dHJhIHBhcmFtZXRlciB0byBjb25maWd1cmUgdGhlIGBTaGFkb3cgRE9NYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2hhZG93SG9zdEVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcyA9IHt9LCBzaGFkb3dET01PcHRpb25zID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgYnVpbGRFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkcmVuKVxyXG5cclxuICBjb25zdCBzaGFkb3dSb290SW5pdCA9IHttb2RlOiAnb3BlbicsIC4uLnNoYWRvd0RPTU9wdGlvbnMuaW5pdH1cclxuXHJcbiAgaWYgKHNoYWRvd0RPTU9wdGlvbnMubW9kZSkge1xyXG4gICAgc2hhZG93Um9vdEluaXQubW9kZSA9IHNoYWRvd0RPTU9wdGlvbnMubW9kZVxyXG4gIH1cclxuICBcclxuICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5hdHRhY2hTaGFkb3coc2hhZG93Um9vdEluaXQpXHJcbiAgXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoc2hhZG93RE9NT3B0aW9ucy5hZG9wdGVkU3R5bGVTaGVldHMpKSB7XHJcbiAgICBzaGFkb3dSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IHNoYWRvd0RPTU9wdGlvbnMuYWRvcHRlZFN0eWxlU2hlZXRzXHJcbiAgfVxyXG4gIFxyXG4gIHNoYWRvd1Jvb3QuYXBwZW5kKC4uLnNoYWRvd0RPTU9wdGlvbnMuY2hpbGRyZW4gPz8gW10pXHJcbiAgXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gVE8gRE9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdGVtcGxhdGUgUlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiAgW2tleSBpbiBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcF06IChwcm9wZXJ0aWVzPzogRnVuY3Rpb25hbERPTVByb3BlcnRpZXMsIC4uLmNoaWxkcmVuOiBUW10pID0+IFIgZXh0ZW5kcyAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnID8gU1ZHRWxlbWVudFRhZ05hbWVNYXBba2V5XSA6IEVsZW1lbnRcclxuICogfX0gTlNNYWtlclByb3h5U1ZHUHJvcGVydGllc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdGVtcGxhdGUgUlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiAgW2tleTogc3RyaW5nXTogKHByb3BlcnRpZXM/OiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgLi4uY2hpbGRyZW46IFRbXSkgPT4gUiBleHRlbmRzICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgPyBTVkdFbGVtZW50IDogVFxyXG4gKiB9fSBOU01ha2VyUHJveHlTdHJpbmdQcm9wZXJ0aWVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0ZW1wbGF0ZSBSXHJcbiAqIEB0eXBlZGVmIHtOU01ha2VyUHJveHlTVkdQcm9wZXJ0aWVzPFQsIFI+ICYgTlNNYWtlclByb3h5U3RyaW5nUHJvcGVydGllczxULCBSPn0gTlNNYWtlclByb3h5UHJvcGVydGllc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7PFQgZXh0ZW5kcyAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHwgc3RyaW5nPihuYW1lc3BhY2U6IFQpID0+IFQgZXh0ZW5kcyAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnID8gTlNNYWtlclByb3h5UHJvcGVydGllczxTVkdFbGVtZW50LCBUPiA6IE5TTWFrZXJQcm94eVByb3BlcnRpZXM8RWxlbWVudCwgVD59IE5TTWFrZXJcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGUge05TTWFrZXJ9XHJcbiAqIFxyXG4gKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm94eSBvYmplY3QgdG8gY3JlYXRlIGVsZW1lbnRzIG9mIGEgc3BlY2lmaWMgbmFtZXNwYWNlLiAgXHJcbiAqIEl0IGlzIHNpbWlsYXIgdG8gYERPTU1ha2VyYCBpbiBiZWhhdmlvciBidXQganVzdCBsaW1pdGVkIHRvIG90aGVyIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBIVE1MLiAgXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBTVkdNYWtlciA9IE5TTWFrZXIoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJylcclxuICogXHJcbiAqIGNvbnN0IHN2ZyA9IFNWR01ha2VyLnN2ZygpXHJcbiAqIGNvbnN0IHJlY3QgPSBTVkdNYWtlci5yZWN0KClcclxuICogXHJcbiAqIGNvbnN0IEN1c3RvbU1ha2VyID0gTlNNYWtlcignbXktbmFtZXNwYWNlJylcclxuICogXHJcbiAqIGNvbnN0IGN1c3RvbUVsZW1lbnQgPSBOU01ha2VyLmN1c3RvbWVsZW1lbnQoKVxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjb25zdCBOU01ha2VyID0gbmFtZXNwYWNlID0+IHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcmV0dXJuIG5ldyBQcm94eShmdW5jdGlvbigpIHt9LCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdGVtcGxhdGUgVFxyXG4gICAgICogQHBhcmFtIHsqfSB0YXJnZXQgXHJcbiAgICAgKiBAcGFyYW0ge1QgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAgPyBUIDogSFRNTEVsZW1lbnR9IHByb3BlcnR5IFxyXG4gICAgICogQHBhcmFtIHsqfSByZWNlaXZlciBcclxuICAgICAqIEByZXR1cm5zIHsocHJvcGVydGllczogRnVuY3Rpb25hbERPTVByb3BlcnRpZXMsIC4uLmNoaWxkcmVuOiBIVE1MRWxlbWVudFtdKSA9PiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF19XHJcbiAgICAgKi9cclxuICAgIGdldDogKHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSA9PiB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnRpZXMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50TlMocHJvcGVydHksIG5hbWVzcGFjZSlcclxuICBcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgYnVpbGRFbGVtZW50TlMoZWxlbWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pXHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0ge1QgZXh0ZW5kcyBFbGVtZW50ID8gVCA6IG5ldmVyfSBlbGVtZW50IFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uYWxET01Qcm9wZXJ0aWVzPX0gcHJvcGVydGllcyBcclxuICogQHBhcmFtICB7Li4uRWxlbWVudH0gY2hpbGRyZW4gXHJcbiAqIEByZXR1cm5zIHtUfVxyXG4gKiBcclxuICogSXQncyBzaW1pbGFyIHRvIGBET01NYWtlci5wcm9wZXJ0eSgpYCBidXQgaW5zdGVhZCBvZiAgXHJcbiAqIGNyZWF0aW5nIGFuIGVsZW1lbnQgaXQganVzdCB0YWtlcyBhbiBgZWxlbWVudGAgYW5kIGFwcGxpZXMgIFxyXG4gKiB0aGUgYHByb3BlcnRpZXNgIGFuZCB0aGUgYGNoaWxkcmVuYCB0byBpdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVsZW1lbnROUyhlbGVtZW50LCBwcm9wZXJ0aWVzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgY29uc3Qge2lkLCBjbGFzczogY2xhc3NlcywgZGF0YXNldCwgYXR0cmlidXRlcywgc3R5bGV9ID0gcHJvcGVydGllc1xyXG5cclxuICBjb25zdCB0cCA9IHdpbmRvdy50cnVzdGVkVHlwZXMgPyB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCcnLCB7Y3JlYXRlSFRNTDogZSA9PiBlLCBjcmVhdGVTY3JpcHRVUkw6IGUgPT4gZX0pIDoge2NyZWF0ZUhUTUw6IGUgPT4gZSwgY3JlYXRlU2NyaXB0VVJMOiBlID0+IGUgfVxyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIGVsZW1lbnQuaWQgPSBpZFxyXG4gIH1cclxuXHJcbiAgaWYgKGNsYXNzZXMpIHtcclxuICAgIHNldENsYXNzZXMoZWxlbWVudCwgY2xhc3NlcylcclxuICB9XHJcblxyXG4gIGlmIChkYXRhc2V0KSB7XHJcbiAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGFzZXQgPz8ge30pKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxyXG5cclxuICAgICAgZWxlbWVudC5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMgPz8ge30pKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgY29udGludWVcclxuXHJcbiAgICBpZiAoWydzcmMnLCAnaHJlZiddLmluY2x1ZGVzKHByb3BlcnR5KSkge1xyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdHAuY3JlYXRlU2NyaXB0VVJMKHZhbHVlKSlcclxuXHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgaWYgKHN0eWxlKSB7XHJcbiAgICBzZXRTdHlsZVByb3BlcnRpZXMoZWxlbWVudC5zdHlsZSwgc3R5bGUpXHJcbiAgfVxyXG5cclxuICBzZXRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbilcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG4iLCJcclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEBwYXJhbSB7VCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCA/IFQgOiBzdHJpbmd9IHRhZ05hbWUgXHJcbiAqIEByZXR1cm5zIHtUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwID8gSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdIDogSFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lKSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge2FueX1cclxuICAgKi9cclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtzdHJpbmd9IFRcclxuICogQHRlbXBsYXRlIHtzdHJpbmcgfCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnfSBSXHJcbiAqIEBwYXJhbSB7VCBleHRlbmRzIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwID8gVCA6IHN0cmluZ30gdGFnTmFtZSBcclxuICogQHBhcmFtIHtSfSBuYW1lc3BhY2VcclxuICogQHJldHVybnMge25hbWVzcGFjZSBleHRlbmRzICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgPyBUIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXAgPyBTVkdFbGVtZW50VGFnTmFtZU1hcFtUXSA6IFNWR0VsZW1lbnQgOiBFbGVtZW50fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyh0YWdOYW1lLCBuYW1lc3BhY2UpIHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7YW55fVxyXG4gICAqL1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCB0YWdOYW1lKVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgXHJcbiAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW119IGNsYXNzZXMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2xhc3NlcyhlbGVtZW50LCBjbGFzc2VzKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJylcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc2VzID09PSAnc3RyaW5nJykge1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc2VzXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgXHJcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb3JlLmpzXCIpLkNoaWxkcmVufSBjaGlsZHJlbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbikge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBlbGVtZW50LmFwcGVuZCguLi5jaGlsZHJlbi5mbGF0KEluZmluaXR5KSlcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmNvbnN0IGxvd2VyQ2FzZVRvSHlwaGVuID0gc3RyaW5nID0+IHN0cmluZy5zcGxpdCgvKD89W0EtWl0pLykubWFwKHN0ciA9PiBzdHIudG9Mb3dlckNhc2UoKSkuam9pbignLScpXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZVxyXG4gKiBAcGFyYW0ge3tba2V5OiBzdHJpbmddOiBzdHJpbmd9fSBwcm9wZXJ0aWVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGVQcm9wZXJ0aWVzKHN0eWxlLCBwcm9wZXJ0aWVzKSB7XHJcbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XHJcblxyXG4gICAgbGV0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5XHJcblxyXG4gICAgY29uc3QgaXNDdXN0b21Qcm9wZXJ0eSA9IHByb3BlcnR5TmFtZS5zdGFydHNXaXRoKCctLScpXHJcbiAgICBjb25zdCBoYXNIeXBoZW4gPSBwcm9wZXJ0eU5hbWUuaW5jbHVkZXMoJy0nKVxyXG4gICAgaWYoIWlzQ3VzdG9tUHJvcGVydHkgJiYgIWhhc0h5cGhlbikge1xyXG4gICAgICBwcm9wZXJ0eU5hbWUgPSBsb3dlckNhc2VUb0h5cGhlbihwcm9wZXJ0eU5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJlZml4VmVuZG9ycyA9IHByb3BlcnR5TmFtZS5zZWFyY2goL14od2Via2l0fG1venxtc3xvKS0vKSAhPT0gLTFcclxuICAgIGlmKHByZWZpeFZlbmRvcnMpIHtcclxuICAgICAgcHJvcGVydHlOYW1lID0gYC0ke3Byb3BlcnR5TmFtZX1gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XS5tYXRjaCgvIVthLXpdKyQvaWcpPy5bMF0uc2xpY2UoMSkgPz8gJydcclxuICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSBwcmlvcml0eSA/IHByb3BlcnRpZXNbcHJvcGVydHldLnJlcGxhY2UobmV3IFJlZ0V4cChgISR7cHJpb3JpdHl9JGAsICdpJyksICcnKSA6IHByb3BlcnRpZXNbcHJvcGVydHldXHJcblxyXG4gICAgc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlLCBwcmlvcml0eSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAkbWFwKGxlbmd0aCwgY2FsbGJhY2spIHtcclxuICBjb25zdCBjb2xsZWN0aW9uID0gbmV3IEFycmF5KGxlbmd0aClcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgY29sbGVjdGlvbltpXSA9IGNhbGxiYWNrKGkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29sbGVjdGlvblxyXG59XHJcbiIsIi8vIEB0cy1ub2NoZWNrXHJcblxyXG5jb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcclxuICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiB7XHJcbiAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldFxyXG5cclxuICAgICAgY29uc3QgbmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWVcclxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZVxyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUobmFtZSlcclxuXHJcbiAgICAgIHRhcmdldD8uYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSlcclxuICAgIH1cclxuICB9KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIGVsZW1lbnRzIHRocm91Z2ggYW55IGBIVE1MRWxlbWVudGAgbGlrZSBhIGA8ZGl2PmAuICBcclxuICogVGhlIGNsYXNzIHByb3ZpZGVkIGlzIGludm9rZWQgaW4gdGhlIGBlbGVtZW50YCBhbmQgdGhlbiBpdHMgYHByb3RvdHlwZWAgaXMgY2hhbmdlZCAgXHJcbiAqIHdpdGggdGhlIHByb3RvdHlwZSBvZiB0aGUgYGNsYXNzYC4gIFxyXG4gKiBcclxuICogVG8gZGVjbGFyZSB0aGUgYGNvbnN0cnVjdG9yYCBvZiB0aGUgY2xhc3MgaXQgbXVzdCBiZSBkZWNsYXJlZCBhcyBgX2NvbnN0cnVjdG9yX2AgIFxyXG4gKiBpbnN0ZWFkIG9mIHRoZSBub3JtYWwgY29uc3RydWN0b3IgdG8gYWxsb3cgdGhlIGZ1bmN0aW9uIHRvIGludm9rZSBpdCBpbiB0aGUgYGVsZW1lbnRgLiAgXHJcbiAqIFxyXG4gKiBTaW5jZSB0aGUgYGVsZW1lbnRgIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGlzIG5vdCBwb3NpYmxlIHRvIHVzZSBgcHJpdmF0ZSBwcm9wZXJ0aWVzYC4gIFxyXG4gKiBGb3IgdGhhdCByZWFzb24sIGlzIHJlY29tbWVuZGVkIHRvIHJlcGxhY2UgdGhlbSB3aXRoIHByb3BlcnRpZXMgdGhhdCBzdGFydHMgd2l0aCBhbiB1bmRlcnNjb3JlLiAgXHJcbiAqIFxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0ge1QgZXh0ZW5kcyB0eXBlb2YgSFRNTEVsZW1lbnQgPyBUIDogbmV2ZXJ9IGNsYXNzQ29tcG9uZW50IFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbZWxlbWVudFRvQXBwbHk9bnVsbF1cclxuICogQHJldHVybnMge0luc3RhbmNlVHlwZTxUPn1cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZVdlYkNvbXBvbmVudChjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICogICBfY29uc3RydWN0b3JfKCkge1xyXG4gKiAgICAgdGhpcy5wcm9wZXJ0eSA9ICd2YWx1ZSdcclxuICpcclxuICogICAgIGNvbnNvbGUubG9nKHRoaXMuX3ByaXZhdGVWYWx1ZSlcclxuICogICB9XHJcbiAqXHJcbiAqICAgZ2V0IGlubmVySFRNTCgpIHtcclxuICogICAgIHJldHVybiBzdXBlci5pbm5lckhUTUxcclxuICogICB9XHJcbiAqXHJcbiAqICAgc2V0IGlubmVySFRNTCh2YWx1ZSkge1xyXG4gKiAgICAgc3VwZXIuaW5uZXJIVE1MID0gdmFsdWVcclxuICogICB9XHJcbiAqXHJcbiAqICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAqICAgICByZXR1cm4gWydteS1hdHRyaWJ1dGUnXVxyXG4gKiAgIH1cclxuICpcclxuICogICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XHJcbiAqICAgICBjb25zb2xlLmxvZyguLi5hcmd1bWVudHMpXHJcbiAqICAgfVxyXG4gKiB9KVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlYkNvbXBvbmVudChjbGFzc0NvbXBvbmVudCwgZWxlbWVudFRvQXBwbHkgPSBudWxsKSB7XHJcbiAgaWYgKCEoY2xhc3NDb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjbGFzcyBjb21wb25lbnQgbXVzdCBleHRlbmRzIEhUTUxFbGVtZW50YClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGVsZW1lbnRUb0FwcGx5ID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gIGlmIChjbGFzc0NvbXBvbmVudC5vYnNlcnZlZEF0dHJpYnV0ZXMpIHtcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb21wb25lbnQsIHtcclxuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgYXR0cmlidXRlRmlsdGVyOiBjbGFzc0NvbXBvbmVudC5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNvbXBvbmVudCwgY2xhc3NDb21wb25lbnQucHJvdG90eXBlKVxyXG4gIGNsYXNzQ29tcG9uZW50LnByb3RvdHlwZS5fY29uc3RydWN0b3JfPy5jYWxsKGNvbXBvbmVudClcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudFxyXG59XHJcbiIsImltcG9ydCBfLCB7IGJ1aWxkRWxlbWVudCBhcyAkfSBmcm9tICcuLi9mdW5jdGlvbmFsLWRvbS9pbmRleC5qcydcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi9tYWluLmNzcydcclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdHlwZWRlZiBDb29sQm9yZGVyT3B0aW9uc0RlZlxyXG4gKiBAcHJvcGVydHkge1QgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAgPyBUIDogc3RyaW5nfSBbdGFnTmFtZT1cImRpdlwiXVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdHlwZWRlZiB7Q29vbEJvcmRlck9wdGlvbnNEZWY8VD4gJiBpbXBvcnQoJy4uL2Z1bmN0aW9uYWwtZG9tL2xpYnMvY29yZS5qcycpLkZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzfSBDb29sQm9yZGVyT3B0aW9uc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0ge0Nvb2xCb3JkZXJPcHRpb25zPFQ+fSBvcHRpb25zXHJcbiAqIEBwYXJhbSAgey4uLkhUTUxFbGVtZW50fSBjaGlsZHJlbiBcclxuICogQHJldHVybnMge1QgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAgPyBIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF0gOiBIVE1MRWxlbWVudH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb29sQm9yZGVyKG9wdGlvbnMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgY29uc3Qge3RhZ05hbWUgPSAnZGl2J30gPSBvcHRpb25zID8/IHt9XHJcblxyXG4gIGNvbnN0IHNoYWRvd1Jvb3RDb250ZW50ID0gXy5kaXYoe2NsYXNzOiAnd3JhcHBlci1ib3JkZXItZWZmZWN0IF9ncmlkLW92ZXJsYXlfJ30sIFxyXG4gICAgXy5kaXYoe2NsYXNzOiAnbXktY29udGVudCd9LFxyXG4gICAgICBfLnNsb3QoKSxcclxuICAgICksXHJcbiAgICBfLmRpdih7Y2xhc3M6ICdib3JkZXItZWZmZWN0J30sXHJcbiAgICAgIF8uZGl2KHtjbGFzczogJ2JvcmRlcid9KSxcclxuICAgICAgXy5kaXYoe2NsYXNzOiAnYm9yZGVyJ30pLFxyXG4gICAgICBfLmRpdih7Y2xhc3M6ICdib3JkZXInfSksXHJcbiAgICAgIF8uZGl2KHtjbGFzczogJ2JvcmRlcid9KSxcclxuICAgIClcclxuICApXHJcblxyXG4gIGNvbnN0IHdyYXBwZXIgPSBfLiRbdGFnTmFtZV0obnVsbCwge1xyXG4gICAgYWRvcHRlZFN0eWxlU2hlZXRzOiBbc3R5bGVzaGVldF0sXHJcbiAgICBjaGlsZHJlbjogW3NoYWRvd1Jvb3RDb250ZW50XVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAkKHdyYXBwZXIsIG9wdGlvbnMsIC4uLmNoaWxkcmVuKVxyXG59XHJcbiIsIlxuICBjb25zdCBjc3MgPSBcIjpob3N0IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbio6bm90KDpob3N0KSxcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm15LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFV0aWxpdHkgQ2xhc3NlcyBTdGFydCAqL1xcclxcblxcclxcbi5fZ3JpZC1vdmVybGF5XyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdvdmVybGF5JztcXHJcXG59XFxyXFxuXFxyXFxuLl9ncmlkLW92ZXJsYXlfID4gKiB7XFxyXFxuICBncmlkLWFyZWE6IG92ZXJsYXk7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVdGlsaXR5IENsYXNzZXMgRW5kICovXFxyXFxuXFxyXFxuXFxyXFxuLyogQm9yZGVyIEVmZmVjdCAqL1xcclxcblxcclxcbjpob3N0IHtcXHJcXG4gIC0tYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAtLWhvcml6b250YWwtbGVuZ3RoOiAxMDBweDtcXHJcXG4gIC0tdmVydGljYWwtbGVuZ3RoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItYm9yZGVyLWVmZmVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItYm9yZGVyLWVmZmVjdCA+IDpmaXJzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci13aWR0aDogdmFyKC0tYm9yZGVyLXdpZHRoKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJvcmRlci1lZmZlY3Qge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAtLWhvcml6b250YWwtYW5nbGU6IDkwZGVnO1xcclxcbiAgLS1ob3Jpem9udGFsLXJldmVyc2VkLWFuZ2xlOiAyNzBkZWc7XFxyXFxuXFxyXFxuICAtLXZlcnRpY2FsLWFuZ2xlOiAxODBkZWc7XFxyXFxuICAtLXZlcnRpY2FsLXJldmVyc2VkLWFuZ2xlOiAwZGVnO1xcclxcbiAgXFxyXFxuICAtLXZlcnRpY2FsLWNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMCAwLFxcclxcbiAgICAxMDAlIDAsXFxyXFxuICAgIDUwJSBjYWxjKHZhcigtLXZlcnRpY2FsLWxlbmd0aCkgKiAyKVxcclxcbiAgKTtcXHJcXG4gIFxcclxcbiAgLS12ZXJ0aWNhbC1jbGlwLXBhdGgtcmV2ZXJzZWQ6IHBvbHlnb24oXFxyXFxuICAgIDUwJSBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1sZW5ndGgpICogMiksXFxyXFxuICAgIDEwMCUgMTAwJSxcXHJcXG4gICAgMCUgMTAwJVxcclxcbiAgKTtcXHJcXG4gIFxcclxcbiAgLS1ob3Jpem9udGFsLWNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMCAwLFxcclxcbiAgICAwIDEwMCUsXFxyXFxuICAgIGNhbGModmFyKC0taG9yaXpvbnRhbC1sZW5ndGgpICogMikgNTAlXFxyXFxuICApO1xcclxcbiAgXFxyXFxuICAtLWhvcml6b250YWwtY2xpcC1wYXRoLXJldmVyc2VkOiBwb2x5Z29uKFxcclxcbiAgICBjYWxjKDEwMCUgLSB2YXIoLS1ob3Jpem9udGFsLWxlbmd0aCkgKiAyKSA1MCUsXFxyXFxuICAgIDEwMCUgMCxcXHJcXG4gICAgMTAwJSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyLWVmZmVjdCA+IC5ib3JkZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb3Jpem9udGFsIFRvcCAqL1xcclxcbi5ib3JkZXItZWZmZWN0ID4gLmJvcmRlcjpudGgtY2hpbGQoMSkge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1ib3JkZXItd2lkdGgpO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB2YXIoLS1ob3Jpem9udGFsLWFuZ2xlKSxcXHJcXG4gICAgI2ZmZjksXFxyXFxuICAgIHRyYW5zcGFyZW50IHZhcigtLWhvcml6b250YWwtbGVuZ3RoKVxcclxcbiAgKTtcXHJcXG5cXHJcXG4gIGNsaXAtcGF0aDogdmFyKC0taG9yaXpvbnRhbC1jbGlwLXBhdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBWZXJ0aWNhbCBMZWZ0ICovXFxyXFxuLmJvcmRlci1lZmZlY3QgPiAuYm9yZGVyOm50aC1jaGlsZCgyKSB7XFxyXFxuICB0b3A6IHZhcigtLWJvcmRlci13aWR0aCk7XFxyXFxuICBsZWZ0OiAwO1xcclxcblxcclxcbiAgd2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLWJvcmRlci13aWR0aCkpO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB2YXIoLS12ZXJ0aWNhbC1hbmdsZSksXFxyXFxuICAgICNmZmY5LFxcclxcbiAgICB0cmFuc3BhcmVudCBjYWxjKHZhcigtLXZlcnRpY2FsLWxlbmd0aCkgLSAycHgpXFxyXFxuICApO1xcclxcblxcclxcbiAgY2xpcC1wYXRoOiB2YXIoLS12ZXJ0aWNhbC1jbGlwLXBhdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb3Jpem9udGFsIEJvdHRvbSAqL1xcclxcbi5ib3JkZXItZWZmZWN0ID4gLmJvcmRlcjpudGgtY2hpbGQoMykge1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogdmFyKC0tYm9yZGVyLXdpZHRoKTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdmFyKC0taG9yaXpvbnRhbC1yZXZlcnNlZC1hbmdsZSksXFxyXFxuICAgICNmZmY5LFxcclxcbiAgICB0cmFuc3BhcmVudCB2YXIoLS1ob3Jpem9udGFsLWxlbmd0aClcXHJcXG4gICk7XFxyXFxuXFxyXFxuICBjbGlwLXBhdGg6IHZhcigtLWhvcml6b250YWwtY2xpcC1wYXRoLXJldmVyc2VkKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVmVydGljYWwgUmlnaHQgKi9cXHJcXG4uYm9yZGVyLWVmZmVjdCA+IC5ib3JkZXI6bnRoLWNoaWxkKDQpIHtcXHJcXG4gIGJvdHRvbTogdmFyKC0tYm9yZGVyLXdpZHRoKTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcblxcclxcbiAgd2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLWJvcmRlci13aWR0aCkpO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB2YXIoLS12ZXJ0aWNhbC1yZXZlcnNlZC1hbmdsZSksXFxyXFxuICAgICNmZmY5LFxcclxcbiAgICB0cmFuc3BhcmVudCBjYWxjKHZhcigtLXZlcnRpY2FsLWxlbmd0aCkgLSAycHgpXFxyXFxuICApO1xcclxcblxcclxcbiAgY2xpcC1wYXRoOiB2YXIoLS12ZXJ0aWNhbC1jbGlwLXBhdGgtcmV2ZXJzZWQpO1xcclxcbn1cXHJcXG5cIlxuXG4gIGNvbnN0IHN0eWxlc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpXG4gIHN0eWxlc2hlZXQucmVwbGFjZVN5bmMoY3NzKVxuXG4gIGV4cG9ydCBkZWZhdWx0IHN0eWxlc2hlZXRcbiAgIiwiaW1wb3J0IF8sIHsgYnVpbGRFbGVtZW50IGFzICQsIGJ1aWxkU2hhZG93SG9zdEVsZW1lbnQgYXMgJCQgfSBmcm9tICcuLi9mdW5jdGlvbmFsLWRvbS9pbmRleC5qcydcclxuaW1wb3J0IG1haW5TdHlsZVNoZWV0IGZyb20gJy4vbWFpbi5jc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tQnV0dG9uKG9wdGlvbnMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgY29uc3QgZWZmZWN0ID0gXy5kaXYoKVxyXG5cclxuICBjb25zdCBob3N0ID0gX1snY3VzdG9tLWJ1dHRvbiddKClcclxuICBob3N0LnJvbGUgPSAnYnV0dG9uJ1xyXG5cclxuICBsZXQgaXNFbmQgPSBmYWxzZVxyXG5cclxuICBsZXQgaXNQcmVzc2VkID0gZmFsc2VcclxuXHJcbiAgLy8gaG9zdC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgZXZlbnQgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgLy8gICBpc0VuZCA9IGZhbHNlXHJcbiAgLy8gICBpc1ByZXNzZWQgPSB0cnVlXHJcblxyXG4gIC8vICAgZWZmZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3cnKVxyXG4gIC8vICAgZWZmZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3ctcmV2ZXJzZWQnKVxyXG4gIC8vIH0pXHJcblxyXG4gIGhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBldmVudCA9PiB7XHJcbiAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlzRW5kID0gZmFsc2VcclxuICAgIGlzUHJlc3NlZCA9IHRydWVcclxuXHJcbiAgICBlZmZlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZ3JvdycpXHJcbiAgICBlZmZlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZ3Jvdy1yZXZlcnNlZCcpXHJcblxyXG4gICAgLy8gVHJpZ2dlciBsYXlvdXQgdG8gY29tcHV0ZSBzdHlsZXNcclxuICAgIGVmZmVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgIGVmZmVjdC5jbGFzc0xpc3QuYWRkKCdncm93JylcclxuXHJcbiAgICBlZmZlY3Quc3R5bGUuc2V0UHJvcGVydHkoJy0teScsIGAke2V2ZW50Lm9mZnNldFl9cHhgKVxyXG4gICAgZWZmZWN0LnN0eWxlLnNldFByb3BlcnR5KCctLXgnLCBgJHtldmVudC5vZmZzZXRYfXB4YClcclxuXHJcbiAgICBjb25zdCBtYXhTaXplID0gTWF0aC5tYXgoaG9zdC5vZmZzZXRXaWR0aCwgaG9zdC5vZmZzZXRIZWlnaHQpXHJcblxyXG4gICAgZWZmZWN0LnN0eWxlLnNldFByb3BlcnR5KCctLXNpemUnLCBgJHttYXhTaXplfXB4YClcclxuXHJcbiAgICBjb25zdCBwb2ludGVyVXBMaXN0ZW5lciA9IGV2ZW50ID0+IHtcclxuICAgICAgaXNQcmVzc2VkID0gZmFsc2VcclxuXHJcbiAgICAgIGlmIChpc0VuZCkge1xyXG4gICAgICAgIGVmZmVjdC5jbGFzc0xpc3QucmVtb3ZlKCdncm93JylcclxuICAgICAgICBlZmZlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICBlZmZlY3QuY2xhc3NMaXN0LmFkZCgnZ3Jvdy1yZXZlcnNlZCcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWZmZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIGlmIChpc1ByZXNzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZWZmZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3cnKVxyXG4gICAgICAgICAgZWZmZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICBlZmZlY3QuY2xhc3NMaXN0LmFkZCgnZ3Jvdy1yZXZlcnNlZCcpXHJcbiAgICAgICAgfSwge29uY2U6IHRydWV9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSAndG91Y2gnKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHBvaW50ZXJVcExpc3RlbmVyLCB7Y2FwdHVyZTogdHJ1ZSwgb25jZTogdHJ1ZX0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgcG9pbnRlclVwTGlzdGVuZXIsIHtjYXB0dXJlOiB0cnVlLCBvbmNlOiB0cnVlfSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBlZmZlY3QuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZXZlbnQgPT4ge1xyXG4gICAgaXNFbmQgPSB0cnVlXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuICQkKGhvc3QsIG9wdGlvbnMsXHJcbiAgICB7XHJcbiAgICAgIGFkb3B0ZWRTdHlsZVNoZWV0czogW21haW5TdHlsZVNoZWV0XSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgXy5zbG90KCksXHJcbiAgICAgIF8uZGl2KHtjbGFzczogJ2VmZmVjdC13cmFwcGVyJ30sXHJcbiAgICAgICAgJChlZmZlY3QsIHtjbGFzczogJ3JpcHBsZS1lZmZlY3QnLCBhdHRyaWJ1dGVzOiB7cGFydDogJ3JpcHBsZS1lZmZlY3QnfX0pLFxyXG4gICAgICApXHJcbiAgICBdXHJcbiAgICB9LFxyXG4gICAgLi4uY2hpbGRyZW5cclxuICApXHJcbn1cclxuIiwiXG4gIGNvbnN0IGNzcyA9IFwiOmhvc3Qge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmY7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxyXFxufVxcclxcblxcclxcbjpob3N0IHtcXHJcXG4gIC0tcmlwcGxlLWNvbG9yOiAjMDAwNztcXHJcXG59XFxyXFxuXFxyXFxuLmVmZmVjdC13cmFwcGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcblxcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlwcGxlLWVmZmVjdCB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcblxcclxcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogdmFyKC0teSk7XFxyXFxuICBsZWZ0OiB2YXIoLS14KTtcXHJcXG5cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmlwcGxlLWNvbG9yKTtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvdyB7XFxyXFxuICBhbmltYXRpb246IGdyb3cgMC4ycyBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLmdyb3ctcmV2ZXJzZWQge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuNSk7XFxyXFxuXFxyXFxuICBhbmltYXRpb246IGdyb3cgMC4ycyBlYXNlLW91dCByZXZlcnNlIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGdyb3cge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIlxuXG4gIGNvbnN0IHN0eWxlc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpXG4gIHN0eWxlc2hlZXQucmVwbGFjZVN5bmMoY3NzKVxuXG4gIGV4cG9ydCBkZWZhdWx0IHN0eWxlc2hlZXRcbiAgIiwiaW1wb3J0IF8gZnJvbSBcIi4uLy4uL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHNvcnRXaWxkQ2FyZFJvdXRlVG9FbmQgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIE5hdmlnYXRlUm91dGVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHBhdGhcclxuICogQHByb3BlcnR5IHsoKSA9PiBpbXBvcnQoXCIuLi8uLi9saWJzL2NvcmUuanNcIikuQ29yZU5vZGV9IGNvbXBvbmVudFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtpbXBvcnQoXCIuLi8uLi9saWJzL2NvcmUuanNcIikuRnVuY3Rpb25hbERPTVByb3BlcnRpZXN9IG9wdGlvbnMgXHJcbiAqIEBwYXJhbSB7TmF2aWdhdGVSb3V0ZVtdfSBuYXZpZ2F0ZVJvdXRlcyBcclxuICogQHJldHVybnMgXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBET01OYXZpZ2F0ZShvcHRpb25zLCBuYXZpZ2F0ZVJvdXRlcykge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IF9bJ2RvbS1uYXZpZ2F0ZSddKG9wdGlvbnMpXHJcblxyXG4gIG5hdmlnYXRlUm91dGVzID0gc29ydFdpbGRDYXJkUm91dGVUb0VuZChuYXZpZ2F0ZVJvdXRlcykgIFxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29tcG9uZW50LFxyXG5cclxuICAgIHVwZGF0ZShwYXRobmFtZSkge1xyXG4gICAgICBsZXQgcmVuZGVyQ29tcG9uZW50ID0gbnVsbFxyXG5cclxuICAgICAgZm9yIChjb25zdCByb3V0ZSBvZiBuYXZpZ2F0ZVJvdXRlcykge1xyXG4gICAgICAgIGlmIChyb3V0ZS5wYXRoID09PSBwYXRobmFtZSkge1xyXG4gICAgICAgICAgcmVuZGVyQ29tcG9uZW50ID0gcm91dGUuY29tcG9uZW50XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJvdXRlLnBhdGggPT09ICcqJykge1xyXG4gICAgICAgICAgcmVuZGVyQ29tcG9uZW50ID0gcm91dGUuY29tcG9uZW50XHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29tcG9uZW50LnJlcGxhY2VDaGlsZHJlbigpXHJcblxyXG4gICAgICBpZiAodHlwZW9mIHJlbmRlckNvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGNvbXBvbmVudC5hcHBlbmQocmVuZGVyQ29tcG9uZW50KCkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BhdGNoQ3VzdG9tTmF2aWdhdGUoKSB7XHJcbiAgY29uc3QgY3VzdG9tTmF2aWdhdGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2N1c3RvbS1uYXZpZ2F0ZScsIHtkZXRhaWw6IG51bGx9KVxyXG4gIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGN1c3RvbU5hdmlnYXRlKVxyXG59XHJcblxyXG4vLyBGaXJlIGBjdXN0b20tbmF2aWdhdGVgIGV2ZW50IG9uIGBsb2FkYFxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcclxuICBkaXNwYXRjaEN1c3RvbU5hdmlnYXRlKClcclxufSwge29uY2U6IHRydWV9KVxyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGV2ZW50ID0+IHtcclxuICBkaXNwYXRjaEN1c3RvbU5hdmlnYXRlKClcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uID0ge1xyXG5cclxuICAvLyBzZXRSb290KHVybCkge1xyXG4gIC8vICAgY29uc3QgbmV3VVJMID0gbmV3IFVSTCh1cmwpXHJcbiAgLy8gICBjb25zdCByb290ID0gbmV3VVJMLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmpvaW4oJy8nKVxyXG5cclxuICAvLyAgIHJvb3RQYXRoID0gcm9vdFxyXG4gIC8vIH0sXHJcblxyXG4gIGdldCBzdGF0ZSgpIHtcclxuICAgIHJldHVybiBoaXN0b3J5LnN0YXRlXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBcclxuICAgKiBAcGFyYW0ge0hpc3RvcnlbJ3N0YXRlJ119IFtzdGF0ZT1udWxsXSBcclxuICAgKi9cclxuICByZXBsYWNlKHVybCwgc3RhdGUgPSBudWxsKSB7XHJcbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgJycsIHVybClcclxuICAgIGRpc3BhdGNoQ3VzdG9tTmF2aWdhdGUoKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgXHJcbiAgICogQHBhcmFtIHtIaXN0b3J5WydzdGF0ZSddfSBbc3RhdGU9bnVsbF0gXHJcbiAgICovXHJcbiAgcHVzaCh1cmwsIHN0YXRlID0gbnVsbCkge1xyXG4gICAgaGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUsICcnLCB1cmwpXHJcbiAgICBkaXNwYXRjaEN1c3RvbU5hdmlnYXRlKClcclxuICB9LFxyXG5cclxuICBmb3J3YXJkKCkge1xyXG4gICAgaGlzdG9yeS5mb3J3YXJkKClcclxuICB9LFxyXG5cclxuICBiYWNrKCkge1xyXG4gICAgaGlzdG9yeS5iYWNrKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcGFyYW0geydjdXN0b20tbmF2aWdhdGUnfSBldmVudFR5cGUgXHJcbiAgICogQHBhcmFtIHsoZXZlbnQ6IEN1c3RvbUV2ZW50KSA9PiB2b2lkfSBjYWxsYmFja0xpc3RlbmVyIFxyXG4gICAqL1xyXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFja0xpc3RlbmVyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrTGlzdGVuZXIpXHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogXHJcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9pbmRleC5qc1wiKS5OYXZpZ2F0ZVJvdXRlW119IHJvdXRlcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0V2lsZENhcmRSb3V0ZVRvRW5kKHJvdXRlcykge1xyXG4gIGNvbnN0IHNvcnRlZFJvdXRlcyA9IFsuLi5yb3V0ZXNdLnNvcnQoKGEsIGIpID0+IGEucGF0aCA9PT0gJyonID8gMSA6IGIucGF0aCA9PT0gJyonID8gLTEgOiAwKVxyXG4gIHJldHVybiBzb3J0ZWRSb3V0ZXNcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtYWluU3R5bGVTaGVldCBmcm9tICcuL3N0eWxlcy9tYWluLmNzcydcclxuaW1wb3J0IF8sIHtidWlsZEVsZW1lbnQgYXMgJCwgYnVpbGRTaGFkb3dIb3N0RWxlbWVudCBhcyAkJH0gZnJvbSAnLi9mdW5jdGlvbmFsLWRvbS9pbmRleC5qcydcclxuaW1wb3J0IHsgQ29vbEJvcmRlciB9IGZyb20gJy4vQ29vbEJvcmRlci9pbmRleC5qcydcclxuaW1wb3J0IHsgQ3VzdG9tQnV0dG9uIH0gZnJvbSAnLi9DdXN0b21CdXR0b24vaW5kZXguanMnXHJcbmltcG9ydCBET01OYXZpZ2F0ZSwgeyBuYXZpZ2F0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbmFsLWRvbS9jb21wb25lbnRzL2RvbS1uYXZpZ2F0ZS9pbmRleC5qcydcclxuXHJcbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IFttYWluU3R5bGVTaGVldF1cclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnKicsXHJcbiAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIE5vdEZvdW5kKCkge1xyXG4gICAgICByZXR1cm4gXy5kaXYoe30sICdOT1QgRk9VTkQnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgY29tcG9uZW50OiBmdW5jdGlvbiBSb290KCkge1xyXG4gICAgICByZXR1cm4gXy5kaXYoe2NsYXNzOiAncm9vdCd9LCAnVGhlIHJvb3Qgb2YgdGhpbmdzJylcclxuICAgIH1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvc29uaWMnLFxyXG4gICAgY29tcG9uZW50OiBmdW5jdGlvbiBTb25pYygpIHtcclxuICAgICAgcmV0dXJuIF9bJ3NvbmljLXAnXSh7fSxcclxuICAgICAgICAnU29uaWMnLFxyXG4gICAgICAgIF8uZGl2KHtjbGFzczogJ3N0YXRlJ30sIGBTdGF0ZSB2YWx1ZSBvZiB0aGlzIHBhdGg6ICR7SlNPTi5zdHJpbmdpZnkobmF2aWdhdGlvbi5zdGF0ZSl9YClcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9hbXknLFxyXG4gICAgY29tcG9uZW50OiBmdW5jdGlvbiBBbXkoKSB7XHJcbiAgICAgIHJldHVybiBfWydhbXktcCddKHt9LCAnQW15JylcclxuICAgIH1cclxuICB9LFxyXG5dXHJcblxyXG5jb25zdCBOYXZpZ2F0ZSA9IERPTU5hdmlnYXRlKHtjbGFzczogJ25hdmlnYXRlLWNvbXBvbmVudCd9LCByb3V0ZXMpXHJcblxyXG5uYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2N1c3RvbS1uYXZpZ2F0ZScsIGV2ZW50ID0+IHtcclxuICBOYXZpZ2F0ZS51cGRhdGUobG9jYXRpb24ucGF0aG5hbWUpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIF8uZGl2KHtkYXRhc2V0OiB7aWQ6ICdhcHAnfX0sXHJcbiAgICBfLmRpdih7ZGF0YXNldDoge2lkOiAnYXBwLWNvbnRlbnQnfX0sXHJcbiAgICAgIEFzaWRlKCksXHJcbiAgICAgIE1haW4oKSxcclxuICAgIClcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFzaWRlKCkge1xyXG4gIHJldHVybiBfLmFzaWRlKHtjbGFzczogJ2FzaWRlLWNvbXBvbmVudCd9LFxyXG4gICAgXy4kbWFwKDYsIGluZGV4ID0+IF8uZGl2KHtjbGFzczogJ2l0ZW0nfSwgaW5kZXggKyAxKSlcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3Qgc29uaWNCdG4gPSBDdXN0b21CdXR0b24oKVxyXG4gIHNvbmljQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gbmF2aWdhdGlvbi5wdXNoKCcvc29uaWMnLCAnUHJpbmNlc3MgRWxpc2UnKSlcclxuXHJcbiAgY29uc3QgYW15QnRuID0gQ3VzdG9tQnV0dG9uKClcclxuICBhbXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBuYXZpZ2F0aW9uLnB1c2goJy9hbXknKSlcclxuXHJcbiAgY29uc3Qgcm9vdEJ0biA9IEN1c3RvbUJ1dHRvbigpXHJcbiAgcm9vdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IG5hdmlnYXRpb24ucHVzaCgnLycpKVxyXG5cclxuICBjb25zdCBub3RGb3VuZEJ0biA9IEN1c3RvbUJ1dHRvbigpXHJcbiAgbm90Rm91bmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBuYXZpZ2F0aW9uLnB1c2goJy9Abm90LWZvdW5kJykpXHJcblxyXG4gIHJldHVybiBfLm1haW4oe2NsYXNzOiAnbWFpbi1jb21wb25lbnQnfSxcclxuICAgIENvb2xCb3JkZXIoe3RhZ05hbWU6ICdoMScsIGNsYXNzOiAndGl0bGUtYm9yZGVyLXdyYXBwZXInfSxcclxuICAgICAgXy5kaXYoe2NsYXNzOiAndGl0bGUnfSwgJ1NvbWUgY29vbCB0aXRsZScpXHJcbiAgICApLFxyXG4gICAgQ2FyZHNDb250YWluZXIoKSxcclxuXHJcbiAgICBUeXBlU29uaWMoKSxcclxuXHJcbiAgICAkKHNvbmljQnRuLCB7Y2xhc3M6ICdidG4nLCBzdHlsZToge2JhY2tncm91bmRDb2xvcjogJyMwNGEnfX0sICdHbyB0byBTb25pYycpLFxyXG4gICAgJChhbXlCdG4sIHtjbGFzczogJ2J0bicsIHN0eWxlOiB7YmFja2dyb3VuZENvbG9yOiAnI2I0Yid9fSwgJ0dvIHRvIEFteScpLFxyXG4gICAgJChyb290QnRuLCB7Y2xhc3M6ICdidG4nLCBzdHlsZToge2JhY2tncm91bmRDb2xvcjogJyMwOTAnfX0sICdHbyB0byBSb290JyksXHJcbiAgICAkKG5vdEZvdW5kQnRuLCB7Y2xhc3M6ICdidG4nLCBzdHlsZToge2JhY2tncm91bmRDb2xvcjogJyMyMjInfX0sICdHbyB0byBhbnkgTm90IEZvdW5kJyksXHJcblxyXG4gICAgTmF2aWdhdGUuY29tcG9uZW50LFxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gVHlwZVNvbmljKCkge1xyXG4gIGNvbnN0IHR5cGVFZmZlY3QgPSBUeXBlRWZmZWN0KClcclxuXHJcbiAgY29uc3QgYnRuID0gQ3VzdG9tQnV0dG9uKClcclxuXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgdHlwZUVmZmVjdC5pbml0QW5pbWF0aW9uKCdTb25pYyBUaGUgSGVkZ2Vob2cnLCAxMDApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIF8oXHJcbiAgICAkKHR5cGVFZmZlY3QuY29tcG9uZW50LCB7Y2xhc3M6ICd0eXBlLWVmZmVjdC1jb21wb25lbnQnfSksXHJcbiAgICAkKGJ0bixcclxuICAgICAge2NsYXNzOiAnYnRuJywgc3R5bGU6IHthbGlnblNlbGY6ICdmbGV4LXN0YXJ0J319LFxyXG4gICAgICAnQ2xpY2sgTWUnXHJcbiAgICApLFxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZHNDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIF8uZGl2KHtjbGFzczogJ2NhcmRzLWNvbnRhaW5lcid9LFxyXG4gICAgXy4kbWFwKDMsICgpID0+IF8uZGl2KHtjbGFzczogJ2NhcmQnfSxcclxuICAgICAgICBfLmRpdih7Y2xhc3M6ICd0aXRsZSd9LCAnQ2FyZCBUaXRsZScpLFxyXG4gICAgICAgIF8uZGl2KHtjbGFzczogJ2NvbnRlbnQnfSwgJ015IHBlcmZlY3QgY29udGVudFxcbicucmVwZWF0KDQpKVxyXG4gICAgICApXHJcbiAgICApLFxyXG4gIClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFR5cGVFZmZlY3QoKSB7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJGb3JFbXB0eVN0cmluZyA9ICgpID0+IF8ucHJlKHt9LCAnICcpXHJcbiAgY29uc3QgY29tcG9uZW50ID0gX1sndHlwZS1lZmZlY3QnXSh7Y2xhc3M6ICd0eXBlLWVmZmVjdC1jb21wb25lbnQnLCBzdHlsZToge2xpbmVIZWlnaHQ6ICcxLjNlbSd9fSwgcGxhY2Vob2xkZXJGb3JFbXB0eVN0cmluZygpKVxyXG5cclxuICBsZXQgaVxyXG4gIGxldCB0aW1lb3V0QW5pbWF0aW9uXHJcblxyXG4gIGZ1bmN0aW9uIGFuaW0odGV4dCwgZGVsYXkpIHtcclxuICAgIGNvbXBvbmVudC5pbm5lclRleHQgPSB0ZXh0LnNsaWNlKDAsIGkpXHJcblxyXG4gICAgaWYgKCsraSA+IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRpbWVvdXRBbmltYXRpb24gPSBzZXRUaW1lb3V0KGFuaW0sIGRlbGF5LCAuLi5hcmd1bWVudHMpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29tcG9uZW50LFxyXG4gICAgaW5pdEFuaW1hdGlvbih0ZXh0ID0gJ05vIFRleHQgVG8gVHlwZScsIGRlbGF5ID0gMTAwKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0QW5pbWF0aW9uKVxyXG4gICAgICBpID0gMVxyXG5cclxuICAgICAgY29tcG9uZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICAgIGNvbXBvbmVudC5hcHBlbmQocGxhY2Vob2xkZXJGb3JFbXB0eVN0cmluZygpKVxyXG5cclxuICAgICAgc2V0VGltZW91dChhbmltLCBkZWxheSwgLi4uYXJndW1lbnRzKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVuZGVyID0gXyhcclxuICBBcHAoKSxcclxuKVxyXG5cclxuZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGRyZW4oKVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmQocmVuZGVyKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=