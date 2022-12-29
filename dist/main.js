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

const Navigate = (0,_functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])({class: 'navigate-component'}, [
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
])

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25hbC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbmFsLWRvbS9saWJzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbmFsLWRvbS9saWJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbmFsLWRvbS9saWJzL2NyZWF0ZS13ZWItY29tcG9uZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvQ29vbEJvcmRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL0Nvb2xCb3JkZXIvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9DdXN0b21CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9DdXN0b21CdXR0b24vbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbmFsLWRvbS9jb21wb25lbnRzL2RvbS1uYXZpZ2F0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2Z1bmN0aW9uYWwtZG9tL2NvbXBvbmVudHMvZG9tLW5hdmlnYXRlL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICBjb25zdCBjc3MgPSBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcImFwcC1jb250ZW50XFxcIl0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcblxcclxcbltkYXRhLWlkPVxcXCJhcHAtY29udGVudFxcXCJdIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnJcXHJcXG59XFxyXFxuICB9XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIC0td2lkdGg6IHNvbmljLXB4O1xcclxcbiAgfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICAtLXdpZHRoOiB0YWlscy1weDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgLS13aWR0aDoga251Y2tsZXMtcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIC0td2lkdGg6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgLS13aWR0aDogMnB4O1xcclxcbiAgfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICAtLXdpZHRoOiAzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuOmlzKGh0bWwpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbjppcyhodG1sKSA+IGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgfVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcblxcclxcbjppcyhodG1sKSA+IGJvZHkge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTFcXHJcXG4gIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbi5hc2lkZS1jb21wb25lbnQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxyXFxuICBncmlkLXJvdzogMSAvIHNwYW4gMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDAuNXJlbTtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyNDM0O1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcblxcclxcblxcclxcbi5hc2lkZS1jb21wb25lbnQge1xcclxcbiAgICBkaXNwbGF5OiBub25lXFxyXFxufVxcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5hc2lkZS1jb21wb25lbnQgPiAuaXRlbSB7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAwLjZyZW07XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDAuNnJlbTtcXHJcXG4gIFxcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZmO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5hc2lkZS1jb21wb25lbnQgPiAuaXRlbTpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuLm1haW4tY29tcG9uZW50IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDFyZW07XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcblxcclxcbi5tYWluLWNvbXBvbmVudCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxXFxyXFxufVxcclxcbiAgfVxcclxcblxcclxcbi5tYWluLWNvbXBvbmVudCA+IC50aXRsZS1ib3JkZXItd3JhcHBlciB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuLnRpdGxlLWJvcmRlci13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIC0tdmVydGljYWwtbGVuZ3RoOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtYm9yZGVyLXdyYXBwZXIgPiAudGl0bGUge1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcclxcbiAgXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyID4gLmNhcmQge1xcclxcbiAgICBtYXgtd2lkdGg6IDE5MHB4O1xcclxcblxcclxcbiAgICBmbGV4LXNocmluazogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDAuNXJlbTtcXHJcXG5cXHJcXG4gIHBhZGRpbmctYmxvY2s6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2ZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgPiAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZmO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcclxcbn1cXHJcXG5cIlxuXG4gIGNvbnN0IHN0eWxlc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpXG4gIHN0eWxlc2hlZXQucmVwbGFjZVN5bmMoY3NzKVxuXG4gIGV4cG9ydCBkZWZhdWx0IHN0eWxlc2hlZXRcbiAgIiwiaW1wb3J0IERPTU1ha2VyLCB7IGJ1aWxkRWxlbWVudCwgYnVpbGRFbGVtZW50TlMsIGJ1aWxkU2hhZG93SG9zdEVsZW1lbnQsIE5TTWFrZXIgfSBmcm9tICcuL2xpYnMvY29yZS5qcydcclxuaW1wb3J0IHsgY3JlYXRlV2ViQ29tcG9uZW50IH0gZnJvbSAnLi9saWJzL2NyZWF0ZS13ZWItY29tcG9uZW50LmpzJ1xyXG5cclxuY29uc3QgXyA9IERPTU1ha2VyXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfXHJcblxyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbGlicy9jb3JlLmpzJykuTlNNYWtlclByb3h5UHJvcGVydGllczxTVkdFbGVtZW50LCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPn0gU1ZHTWFrZXJcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGUge1NWR01ha2VyfVxyXG4gKi9cclxuY29uc3QgX3N2ZyA9IE5TTWFrZXIoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJylcclxuXHJcbmV4cG9ydCB7XHJcbiAgYnVpbGRFbGVtZW50LFxyXG4gIGJ1aWxkU2hhZG93SG9zdEVsZW1lbnQsXHJcbiAgY3JlYXRlV2ViQ29tcG9uZW50LFxyXG5cclxuICBfc3ZnLFxyXG5cclxuICBOU01ha2VyLFxyXG4gIGJ1aWxkRWxlbWVudE5TXHJcbn1cclxuIiwiaW1wb3J0IHsgJG1hcCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlRWxlbWVudE5TLCBzZXRDaGlsZHJlbiwgc2V0Q2xhc3Nlcywgc2V0U3R5bGVQcm9wZXJ0aWVzIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtzdHJpbmcgfCBudW1iZXIgfCBIVE1MRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnR9IENvcmVOb2RlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtDb3JlTm9kZVtdIHwgQ29yZU5vZGVbXVtdfSBDaGlsZHJlblxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7KC4uLmNoaWxkcmVuOiBDb3JlTm9kZVtdKSA9PiBEb2N1bWVudEZyYWdtZW50fSBET01NYWtlclByb3h5RnVuY1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiAgW2tleSBpbiBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBdOiAocHJvcGVydGllcz86IEZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbjogQ2hpbGRyZW4pID0+IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtrZXldXHJcbiAqIH19IERPTU1ha2VySFRNTFByb3h5UHJvcGVydGllc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiBTaGFkb3dET01PcHRpb25zXHJcbiAqIEBwcm9wZXJ0eSB7U2hhZG93Um9vdEluaXR9IFtpbml0XVxyXG4gKiBAcHJvcGVydHkge1NoYWRvd1Jvb3RNb2RlfSBbbW9kZT1vcGVuXVxyXG4gKiBAcHJvcGVydHkge0NTU1N0eWxlU2hlZXRbXX0gW2Fkb3B0ZWRTdHlsZVNoZWV0cz1bXV1cclxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudFtdfSBbY2hpbGRyZW5dXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHt7XHJcbiAqICAkOiB7W2tleSBpbiBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBdOiAocHJvcGVydGllczogRnVuY3Rpb25hbERPTVByb3BlcnRpZXMsIHNoYWRvd0RPTU9wdGlvbnM6IFNoYWRvd0RPTU9wdGlvbnMsIC4uLmNoaWxkcmVuOiBDaGlsZHJlbikgPT4gSFRNTEVsZW1lbnRUYWdOYW1lTWFwW2tleV19XHJcbiAqIH19IERPTU1ha2VyU2hhZG93RE9NSFRNTFByb3h5UHJvcGVydGllc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiAgJDoge1trZXk6IHN0cmluZ106IChwcm9wZXJ0aWVzOiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgc2hhZG93RE9NT3B0aW9uczogU2hhZG93RE9NT3B0aW9ucywgLi4uY2hpbGRyZW46IENoaWxkcmVuKSA9PiBIVE1MRWxlbWVudH1cclxuICogfX0gRE9NTWFrZXJTaGFkb3dET01Qcm94eVByb3BlcnRpZXNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge3tcclxuICogICRtYXA6IChsZW5ndGg6IG51bWJlciwgY2FsbGJhY2s6IChpbmRleDogbnVtYmVyKSA9PiBDb3JlTm9kZSkgPT4gQ29yZU5vZGVbXVxyXG4gKiB9fSBET01NYWtlck1hcEZ1bmNcclxuICovXHJcblxyXG4vKipcclxuKiBAdHlwZWRlZiB7e1xyXG4qICBba2V5OiBzdHJpbmddOiAocHJvcGVydGllcz86IEZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbjogQ2hpbGRyZW4pID0+IEhUTUxFbGVtZW50XHJcbiogfX0gRE9NTWFrZXJQcm94eVByb3BlcnRpZXNcclxuKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7RE9NTWFrZXJQcm94eUZ1bmMgJiBET01NYWtlckhUTUxQcm94eVByb3BlcnRpZXMgJiBET01NYWtlclNoYWRvd0RPTUhUTUxQcm94eVByb3BlcnRpZXMgJiBET01NYWtlclNoYWRvd0RPTVByb3h5UHJvcGVydGllcyAmIERPTU1ha2VyTWFwRnVuYyAmIERPTU1ha2VyUHJveHlQcm9wZXJ0aWVzfSBET01NYWtlclByb3h5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIEZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaWRdXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgc3RyaW5nW119IFtjbGFzc11cclxuICogQHByb3BlcnR5IHt7W2tleTogc3RyaW5nXTogc3RyaW5nfX0gW2RhdGFzZXRdXHJcbiAqIEBwcm9wZXJ0eSB7e1trZXk6IHN0cmluZ106IHN0cmluZ319IFthdHRyaWJ1dGVzXVxyXG4gKiBAcHJvcGVydHkge3tba2V5OiBzdHJpbmddOiBzdHJpbmd9fSBbc3R5bGVdXHJcbiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7RE9NTWFrZXJQcm94eX1cclxuICogXHJcbiAqIFByb3h5IG9iamVjdCB0aGF0IGlzIHRoZSBjb3JlIG9mIHRoaXMgbGlicmFyeS4gIFxyXG4gKiBCeSBpbnZva2luZyBpdCBhcyBhIGBmdW5jdGlvbmAgeW91IGNhbiB3cmFwIG11bHRpcGxlIGBET00gZWxlbWVudHNgIGluIGEgYERvY3VtZW50RnJhbWdlbnRgLlxyXG4gKiBcclxuICogSWYgaW5zdGVhZCB3ZSBhY2Nlc3MgYSBgcHJvcGVydHlgIG9mIGl0ICBcclxuICogd2Ugd2lsbCBnZXQgYSBgZnVuY3Rpb25gIHRoYXQgY3JlYXRlcyBhIGBET00gZWxlbWVudGAgIFxyXG4gKiB3aGljaCBgdGFnTmFtZWAgbWF0Y2ggdGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uLlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAqICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gKiBcclxuICogIC8vIERvY3VtZW50RnJhZ21lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxCdXR0b25FbGVtZW50PlxyXG4gKiAgY29uc3QgZG9jdW1lbnRGcmFnbWVudCA9IERPTU1ha2VyKGRpdiwgYnV0dG9uKVxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgZGl2ICAgID0gRE9NTWFrZXIuZGl2KClcclxuICogY29uc3QgYnV0dG9uID0gRE9NTWFrZXIuYnV0dG9uKClcclxuICogXHJcbiAqIGNvbnN0IGN1c3RvbUVsZW1lbnQgPSBET01NYWtlclsnY3VzdG9tLWVsZW1lbnQnXSgpXHJcbiAqICBcclxuICovXHJcbmNvbnN0IERPTU1ha2VyID0gbmV3IFByb3h5KGZ1bmN0aW9uKCkge30sIHtcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsqfSB0YXJnZXQgXHJcbiAgICogQHBhcmFtIHsqfSB0aGlzQXJnIFxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXX0gYXJnQXJyYXkgXHJcbiAgICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9XHJcbiAgICovXHJcbiAgYXBwbHk6ICh0YXJnZXQsIHRoaXNBcmcsIGFyZ0FycmF5KSA9PiB7XHJcbiAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKVxyXG5cclxuICAgIGRvY3VtZW50RnJhZ21lbnQuYXBwZW5kKC4uLmFyZ0FycmF5LmZpbHRlcihub2RlID0+IG5vZGUgIT0gbnVsbCkpXHJcblxyXG4gICAgcmV0dXJuIGRvY3VtZW50RnJhZ21lbnRcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyp9IHRhcmdldCBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgXHJcbiAgICogQHBhcmFtIHsqfSByZWNlaXZlciBcclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKi9cclxuICBnZXQ6ICh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgPT4ge1xyXG4gICAgc3dpdGNoIChwcm9wZXJ0eSkge1xyXG4gICAgICBjYXNlICckJzpcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KGZ1bmN0aW9uKCkge30sIHtcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQHBhcmFtIHsqfSB0YXJnZXQgXHJcbiAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5uZXJQcm9wZXJ0eSBcclxuICAgICAgICAgICAqIEBwYXJhbSB7Kn0gcmVjZWl2ZXIgXHJcbiAgICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgZ2V0OiAodGFyZ2V0LCBpbm5lclByb3BlcnR5LCByZWNlaXZlcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydGllcywgc2hhZG93RE9NT3B0aW9ucywgLi4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChpbm5lclByb3BlcnR5KVxyXG5cclxuICAgICAgICAgICAgICBidWlsZFNoYWRvd0hvc3RFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIHNoYWRvd0RPTU9wdGlvbnMsIC4uLmNoaWxkcmVuKVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIGNhc2UgJyRtYXAnOlxyXG4gICAgICAgIHJldHVybiAkbWFwXHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChwcm9wZXJ0eSlcclxuXHJcbiAgICAgIGJ1aWxkRWxlbWVudChlbGVtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbilcclxuXHJcbiAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERPTU1ha2VyXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHBhcmFtIHtUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPyBUIDogbmV2ZXJ9IGVsZW1lbnQgXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb25hbERPTVByb3BlcnRpZXN9IFtwcm9wZXJ0aWVzXSBcclxuICogQHBhcmFtICB7Li4uQ29yZU5vZGV9IGNoaWxkcmVuIFxyXG4gKiBAcmV0dXJucyB7VH1cclxuICogXHJcbiAqIEl0J3Mgc2ltaWxhciB0byBgRE9NTWFrZXIucHJvcGVydHkoKWAgYnV0IGluc3RlYWQgb2YgIFxyXG4gKiBjcmVhdGluZyBhbiBlbGVtZW50IGl0IGp1c3QgdGFrZXMgYW4gYGVsZW1lbnRgIGFuZCBhcHBsaWVzICBcclxuICogdGhlIGBwcm9wZXJ0aWVzYCBhbmQgdGhlIGBjaGlsZHJlbmAgdG8gaXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMgPSB7fSwgLi4uY2hpbGRyZW4pIHtcclxuICBjb25zdCB7aWQsIGNsYXNzOiBjbGFzc2VzLCBkYXRhc2V0LCBhdHRyaWJ1dGVzLCBzdHlsZX0gPSBwcm9wZXJ0aWVzID8/IHt9XHJcblxyXG4gIGNvbnN0IHRwID0gd2luZG93LnRydXN0ZWRUeXBlcyA/IHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJycsIHtjcmVhdGVIVE1MOiBlID0+IGUsIGNyZWF0ZVNjcmlwdFVSTDogZSA9PiBlIH0pIDoge2NyZWF0ZUhUTUw6IGUgPT4gZSwgY3JlYXRlU2NyaXB0VVJMOiBlID0+IGUgfVxyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIGVsZW1lbnQuaWQgPSBpZFxyXG4gIH1cclxuXHJcbiAgaWYgKGNsYXNzZXMpIHtcclxuICAgIHNldENsYXNzZXMoZWxlbWVudCwgY2xhc3NlcylcclxuICB9XHJcblxyXG4gIGlmIChkYXRhc2V0KSB7XHJcbiAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGFzZXQgPz8ge30pKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxyXG5cclxuICAgICAgZWxlbWVudC5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMgPz8ge30pKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgY29udGludWVcclxuXHJcbiAgICBpZiAoWydzcmMnLCAnaHJlZiddLmluY2x1ZGVzKHByb3BlcnR5KSkge1xyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdHAuY3JlYXRlU2NyaXB0VVJMKHZhbHVlKSlcclxuXHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgaWYgKHN0eWxlKSB7XHJcbiAgICBzZXRTdHlsZVByb3BlcnRpZXMoZWxlbWVudC5zdHlsZSwgc3R5bGUpXHJcbiAgfVxyXG5cclxuICBzZXRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbilcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEBwYXJhbSB7VCBleHRlbmRzIEhUTUxFbGVtZW50ID8gVCA6IG5ldmVyfSBlbGVtZW50IFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uYWxET01Qcm9wZXJ0aWVzPX0gcHJvcGVydGllcyBcclxuICogQHBhcmFtIHtTaGFkb3dET01PcHRpb25zPX0gc2hhZG93RE9NT3B0aW9uc1xyXG4gKiBAcGFyYW0gIHsuLi5IVE1MRWxlbWVudH0gY2hpbGRyZW4gXHJcbiAqIEByZXR1cm5zIHtUfVxyXG4gKiBcclxuICogSXQncyBzaW1pbGFyIHRvIGBidWlsZEVsZW1lbnRgIGJ1dCBpdCBhbHNvIGFjY2VwdHNcclxuICogYW4gZXh0cmEgcGFyYW1ldGVyIHRvIGNvbmZpZ3VyZSB0aGUgYFNoYWRvdyBET01gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTaGFkb3dIb3N0RWxlbWVudChlbGVtZW50LCBwcm9wZXJ0aWVzID0ge30sIHNoYWRvd0RPTU9wdGlvbnMgPSB7fSwgLi4uY2hpbGRyZW4pIHtcclxuICBidWlsZEVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pXHJcblxyXG4gIGNvbnN0IHNoYWRvd1Jvb3RJbml0ID0ge21vZGU6ICdvcGVuJywgLi4uc2hhZG93RE9NT3B0aW9ucy5pbml0fVxyXG5cclxuICBpZiAoc2hhZG93RE9NT3B0aW9ucy5tb2RlKSB7XHJcbiAgICBzaGFkb3dSb290SW5pdC5tb2RlID0gc2hhZG93RE9NT3B0aW9ucy5tb2RlXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LmF0dGFjaFNoYWRvdyhzaGFkb3dSb290SW5pdClcclxuICBcclxuICBpZiAoQXJyYXkuaXNBcnJheShzaGFkb3dET01PcHRpb25zLmFkb3B0ZWRTdHlsZVNoZWV0cykpIHtcclxuICAgIHNoYWRvd1Jvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gc2hhZG93RE9NT3B0aW9ucy5hZG9wdGVkU3R5bGVTaGVldHNcclxuICB9XHJcbiAgXHJcbiAgc2hhZG93Um9vdC5hcHBlbmQoLi4uc2hhZG93RE9NT3B0aW9ucy5jaGlsZHJlbiA/PyBbXSlcclxuICBcclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBUTyBET1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0ZW1wbGF0ZSBSXHJcbiAqIEB0eXBlZGVmIHt7XHJcbiAqICBba2V5IGluIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwXTogKHByb3BlcnRpZXM/OiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgLi4uY2hpbGRyZW46IFRbXSkgPT4gUiBleHRlbmRzICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgPyBTVkdFbGVtZW50VGFnTmFtZU1hcFtrZXldIDogRWxlbWVudFxyXG4gKiB9fSBOU01ha2VyUHJveHlTVkdQcm9wZXJ0aWVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0ZW1wbGF0ZSBSXHJcbiAqIEB0eXBlZGVmIHt7XHJcbiAqICBba2V5OiBzdHJpbmddOiAocHJvcGVydGllcz86IEZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbjogVFtdKSA9PiBSIGV4dGVuZHMgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyA/IFNWR0VsZW1lbnQgOiBUXHJcbiAqIH19IE5TTWFrZXJQcm94eVN0cmluZ1Byb3BlcnRpZXNcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHRlbXBsYXRlIFJcclxuICogQHR5cGVkZWYge05TTWFrZXJQcm94eVNWR1Byb3BlcnRpZXM8VCwgUj4gJiBOU01ha2VyUHJveHlTdHJpbmdQcm9wZXJ0aWVzPFQsIFI+fSBOU01ha2VyUHJveHlQcm9wZXJ0aWVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHs8VCBleHRlbmRzICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgfCBzdHJpbmc+KG5hbWVzcGFjZTogVCkgPT4gVCBleHRlbmRzICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgPyBOU01ha2VyUHJveHlQcm9wZXJ0aWVzPFNWR0VsZW1lbnQsIFQ+IDogTlNNYWtlclByb3h5UHJvcGVydGllczxFbGVtZW50LCBUPn0gTlNNYWtlclxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7TlNNYWtlcn1cclxuICogXHJcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb3h5IG9iamVjdCB0byBjcmVhdGUgZWxlbWVudHMgb2YgYSBzcGVjaWZpYyBuYW1lc3BhY2UuICBcclxuICogSXQgaXMgc2ltaWxhciB0byBgRE9NTWFrZXJgIGluIGJlaGF2aW9yIGJ1dCBqdXN0IGxpbWl0ZWQgdG8gb3RoZXIgZWxlbWVudHMgdGhhdCBhcmUgbm90IEhUTUwuICBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IFNWR01ha2VyID0gTlNNYWtlcignaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKVxyXG4gKiBcclxuICogY29uc3Qgc3ZnID0gU1ZHTWFrZXIuc3ZnKClcclxuICogY29uc3QgcmVjdCA9IFNWR01ha2VyLnJlY3QoKVxyXG4gKiBcclxuICogY29uc3QgQ3VzdG9tTWFrZXIgPSBOU01ha2VyKCdteS1uYW1lc3BhY2UnKVxyXG4gKiBcclxuICogY29uc3QgY3VzdG9tRWxlbWVudCA9IE5TTWFrZXIuY3VzdG9tZWxlbWVudCgpXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE5TTWFrZXIgPSBuYW1lc3BhY2UgPT4ge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICByZXR1cm4gbmV3IFByb3h5KGZ1bmN0aW9uKCkge30sIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0ZW1wbGF0ZSBUXHJcbiAgICAgKiBAcGFyYW0geyp9IHRhcmdldCBcclxuICAgICAqIEBwYXJhbSB7VCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCA/IFQgOiBIVE1MRWxlbWVudH0gcHJvcGVydHkgXHJcbiAgICAgKiBAcGFyYW0geyp9IHJlY2VpdmVyIFxyXG4gICAgICogQHJldHVybnMgeyhwcm9wZXJ0aWVzOiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgLi4uY2hpbGRyZW46IEhUTUxFbGVtZW50W10pID0+IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtUXX1cclxuICAgICAqL1xyXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpID0+IHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydGllcywgLi4uY2hpbGRyZW4pIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnROUyhwcm9wZXJ0eSwgbmFtZXNwYWNlKVxyXG4gIFxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBidWlsZEVsZW1lbnROUyhlbGVtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbilcclxuICBcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEBwYXJhbSB7VCBleHRlbmRzIEVsZW1lbnQgPyBUIDogbmV2ZXJ9IGVsZW1lbnQgXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb25hbERPTVByb3BlcnRpZXM9fSBwcm9wZXJ0aWVzIFxyXG4gKiBAcGFyYW0gIHsuLi5FbGVtZW50fSBjaGlsZHJlbiBcclxuICogQHJldHVybnMge1R9XHJcbiAqIFxyXG4gKiBJdCdzIHNpbWlsYXIgdG8gYERPTU1ha2VyLnByb3BlcnR5KClgIGJ1dCBpbnN0ZWFkIG9mICBcclxuICogY3JlYXRpbmcgYW4gZWxlbWVudCBpdCBqdXN0IHRha2VzIGFuIGBlbGVtZW50YCBhbmQgYXBwbGllcyAgXHJcbiAqIHRoZSBgcHJvcGVydGllc2AgYW5kIHRoZSBgY2hpbGRyZW5gIHRvIGl0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRWxlbWVudE5TKGVsZW1lbnQsIHByb3BlcnRpZXMgPSB7fSwgLi4uY2hpbGRyZW4pIHtcclxuICBjb25zdCB7aWQsIGNsYXNzOiBjbGFzc2VzLCBkYXRhc2V0LCBhdHRyaWJ1dGVzLCBzdHlsZX0gPSBwcm9wZXJ0aWVzXHJcblxyXG4gIGNvbnN0IHRwID0gd2luZG93LnRydXN0ZWRUeXBlcyA/IHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJycsIHtjcmVhdGVIVE1MOiBlID0+IGUsIGNyZWF0ZVNjcmlwdFVSTDogZSA9PiBlfSkgOiB7Y3JlYXRlSFRNTDogZSA9PiBlLCBjcmVhdGVTY3JpcHRVUkw6IGUgPT4gZSB9XHJcblxyXG4gIGlmIChpZCkge1xyXG4gICAgZWxlbWVudC5pZCA9IGlkXHJcbiAgfVxyXG5cclxuICBpZiAoY2xhc3Nlcykge1xyXG4gICAgc2V0Q2xhc3NlcyhlbGVtZW50LCBjbGFzc2VzKVxyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGFzZXQpIHtcclxuICAgIGZvciAoY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YXNldCA/PyB7fSkpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlXHJcblxyXG4gICAgICBlbGVtZW50LmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcyA/PyB7fSkpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxyXG5cclxuICAgIGlmIChbJ3NyYycsICdocmVmJ10uaW5jbHVkZXMocHJvcGVydHkpKSB7XHJcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB0cC5jcmVhdGVTY3JpcHRVUkwodmFsdWUpKVxyXG5cclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdmFsdWUpXHJcbiAgfVxyXG5cclxuICBpZiAoc3R5bGUpIHtcclxuICAgIHNldFN0eWxlUHJvcGVydGllcyhlbGVtZW50LnN0eWxlLCBzdHlsZSlcclxuICB9XHJcblxyXG4gIHNldENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcbiIsIlxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHBhcmFtIHtUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwID8gVCA6IHN0cmluZ30gdGFnTmFtZSBcclxuICogQHJldHVybnMge1QgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAgPyBIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF0gOiBIVE1MRWxlbWVudH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUpIHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7YW55fVxyXG4gICAqL1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXHJcblxyXG4gIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gVFxyXG4gKiBAdGVtcGxhdGUge3N0cmluZyB8ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyd9IFJcclxuICogQHBhcmFtIHtUIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXAgPyBUIDogc3RyaW5nfSB0YWdOYW1lIFxyXG4gKiBAcGFyYW0ge1J9IG5hbWVzcGFjZVxyXG4gKiBAcmV0dXJucyB7bmFtZXNwYWNlIGV4dGVuZHMgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyA/IFQgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcCA/IFNWR0VsZW1lbnRUYWdOYW1lTWFwW1RdIDogU1ZHRWxlbWVudCA6IEVsZW1lbnR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudE5TKHRhZ05hbWUsIG5hbWVzcGFjZSkge1xyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHthbnl9XHJcbiAgICovXHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhuYW1lc3BhY2UsIHRhZ05hbWUpXHJcblxyXG4gIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBcclxuICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXX0gY2xhc3NlcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDbGFzc2VzKGVsZW1lbnQsIGNsYXNzZXMpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc2VzKSkge1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oJyAnKVxyXG4gIH0gZWxzZSBpZiAodHlwZW9mIGNsYXNzZXMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzZXNcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBcclxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2NvcmUuanNcIikuQ2hpbGRyZW59IGNoaWxkcmVuIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENoaWxkcmVuKGVsZW1lbnQsIGNoaWxkcmVuKSB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGVsZW1lbnQuYXBwZW5kKC4uLmNoaWxkcmVuLmZsYXQoSW5maW5pdHkpKVxyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gKi9cclxuY29uc3QgbG93ZXJDYXNlVG9IeXBoZW4gPSBzdHJpbmcgPT4gc3RyaW5nLnNwbGl0KC8oPz1bQS1aXSkvKS5tYXAoc3RyID0+IHN0ci50b0xvd2VyQ2FzZSgpKS5qb2luKCctJylcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlXHJcbiAqIEBwYXJhbSB7e1trZXk6IHN0cmluZ106IHN0cmluZ319IHByb3BlcnRpZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZVByb3BlcnRpZXMoc3R5bGUsIHByb3BlcnRpZXMpIHtcclxuICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcclxuXHJcbiAgICBsZXQgcHJvcGVydHlOYW1lID0gcHJvcGVydHlcclxuXHJcbiAgICBjb25zdCBpc0N1c3RvbVByb3BlcnR5ID0gcHJvcGVydHlOYW1lLnN0YXJ0c1dpdGgoJy0tJylcclxuICAgIGNvbnN0IGhhc0h5cGhlbiA9IHByb3BlcnR5TmFtZS5pbmNsdWRlcygnLScpXHJcbiAgICBpZighaXNDdXN0b21Qcm9wZXJ0eSAmJiAhaGFzSHlwaGVuKSB7XHJcbiAgICAgIHByb3BlcnR5TmFtZSA9IGxvd2VyQ2FzZVRvSHlwaGVuKHByb3BlcnR5TmFtZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmVmaXhWZW5kb3JzID0gcHJvcGVydHlOYW1lLnNlYXJjaCgvXih3ZWJraXR8bW96fG1zfG8pLS8pICE9PSAtMVxyXG4gICAgaWYocHJlZml4VmVuZG9ycykge1xyXG4gICAgICBwcm9wZXJ0eU5hbWUgPSBgLSR7cHJvcGVydHlOYW1lfWBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmlvcml0eSA9IHByb3BlcnRpZXNbcHJvcGVydHldLm1hdGNoKC8hW2Etel0rJC9pZyk/LlswXS5zbGljZSgxKSA/PyAnJ1xyXG4gICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IHByaW9yaXR5ID8gcHJvcGVydGllc1twcm9wZXJ0eV0ucmVwbGFjZShuZXcgUmVnRXhwKGAhJHtwcmlvcml0eX0kYCwgJ2knKSwgJycpIDogcHJvcGVydGllc1twcm9wZXJ0eV1cclxuXHJcbiAgICBzdHlsZS5zZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHByb3BlcnR5VmFsdWUsIHByaW9yaXR5KVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uICRtYXAobGVuZ3RoLCBjYWxsYmFjaykge1xyXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBuZXcgQXJyYXkobGVuZ3RoKVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb2xsZWN0aW9uW2ldID0gY2FsbGJhY2soaSlcclxuICB9XHJcblxyXG4gIHJldHVybiBjb2xsZWN0aW9uXHJcbn1cclxuIiwiLy8gQHRzLW5vY2hlY2tcclxuXHJcbmNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xyXG4gIG11dGF0aW9ucy5mb3JFYWNoKG11dGF0aW9uID0+IHtcclxuICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0XHJcblxyXG4gICAgICBjb25zdCBuYW1lID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZVxyXG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlXHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShuYW1lKVxyXG5cclxuICAgICAgdGFyZ2V0Py5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKVxyXG4gICAgfVxyXG4gIH0pXHJcbn0pXHJcblxyXG4vKipcclxuICogQWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gZWxlbWVudHMgdGhyb3VnaCBhbnkgYEhUTUxFbGVtZW50YCBsaWtlIGEgYDxkaXY+YC4gIFxyXG4gKiBUaGUgY2xhc3MgcHJvdmlkZWQgaXMgaW52b2tlZCBpbiB0aGUgYGVsZW1lbnRgIGFuZCB0aGVuIGl0cyBgcHJvdG90eXBlYCBpcyBjaGFuZ2VkICBcclxuICogd2l0aCB0aGUgcHJvdG90eXBlIG9mIHRoZSBgY2xhc3NgLiAgXHJcbiAqIFxyXG4gKiBUbyBkZWNsYXJlIHRoZSBgY29uc3RydWN0b3JgIG9mIHRoZSBjbGFzcyBpdCBtdXN0IGJlIGRlY2xhcmVkIGFzIGBfY29uc3RydWN0b3JfYCAgXHJcbiAqIGluc3RlYWQgb2YgdGhlIG5vcm1hbCBjb25zdHJ1Y3RvciB0byBhbGxvdyB0aGUgZnVuY3Rpb24gdG8gaW52b2tlIGl0IGluIHRoZSBgZWxlbWVudGAuICBcclxuICogXHJcbiAqIFNpbmNlIHRoZSBgZWxlbWVudGAgaXMgbm90IGFuIGluc3RhbmNlIG9mIHRoZSBjb21wb25lbnQgaXMgbm90IHBvc2libGUgdG8gdXNlIGBwcml2YXRlIHByb3BlcnRpZXNgLiAgXHJcbiAqIEZvciB0aGF0IHJlYXNvbiwgaXMgcmVjb21tZW5kZWQgdG8gcmVwbGFjZSB0aGVtIHdpdGggcHJvcGVydGllcyB0aGF0IHN0YXJ0cyB3aXRoIGFuIHVuZGVyc2NvcmUuICBcclxuICogXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEBwYXJhbSB7VCBleHRlbmRzIHR5cGVvZiBIVE1MRWxlbWVudCA/IFQgOiBuZXZlcn0gY2xhc3NDb21wb25lbnQgXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtlbGVtZW50VG9BcHBseT1udWxsXVxyXG4gKiBAcmV0dXJucyB7SW5zdGFuY2VUeXBlPFQ+fVxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgY29tcG9uZW50ID0gY3JlYXRlV2ViQ29tcG9uZW50KGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gKiAgIF9jb25zdHJ1Y3Rvcl8oKSB7XHJcbiAqICAgICB0aGlzLnByb3BlcnR5ID0gJ3ZhbHVlJ1xyXG4gKlxyXG4gKiAgICAgY29uc29sZS5sb2codGhpcy5fcHJpdmF0ZVZhbHVlKVxyXG4gKiAgIH1cclxuICpcclxuICogICBnZXQgaW5uZXJIVE1MKCkge1xyXG4gKiAgICAgcmV0dXJuIHN1cGVyLmlubmVySFRNTFxyXG4gKiAgIH1cclxuICpcclxuICogICBzZXQgaW5uZXJIVE1MKHZhbHVlKSB7XHJcbiAqICAgICBzdXBlci5pbm5lckhUTUwgPSB2YWx1ZVxyXG4gKiAgIH1cclxuICpcclxuICogICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcclxuICogICAgIHJldHVybiBbJ215LWF0dHJpYnV0ZSddXHJcbiAqICAgfVxyXG4gKlxyXG4gKiAgIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcclxuICogICAgIGNvbnNvbGUubG9nKC4uLmFyZ3VtZW50cylcclxuICogICB9XHJcbiAqIH0pXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV2ViQ29tcG9uZW50KGNsYXNzQ29tcG9uZW50LCBlbGVtZW50VG9BcHBseSA9IG51bGwpIHtcclxuICBpZiAoIShjbGFzc0NvbXBvbmVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGNsYXNzIGNvbXBvbmVudCBtdXN0IGV4dGVuZHMgSFRNTEVsZW1lbnRgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tcG9uZW50ID0gZWxlbWVudFRvQXBwbHkgPz8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgaWYgKGNsYXNzQ29tcG9uZW50Lm9ic2VydmVkQXR0cmlidXRlcykge1xyXG4gICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGNvbXBvbmVudCwge1xyXG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxyXG4gICAgICBhdHRyaWJ1dGVGaWx0ZXI6IGNsYXNzQ29tcG9uZW50Lm9ic2VydmVkQXR0cmlidXRlcyxcclxuICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoY29tcG9uZW50LCBjbGFzc0NvbXBvbmVudC5wcm90b3R5cGUpXHJcbiAgY2xhc3NDb21wb25lbnQucHJvdG90eXBlLl9jb25zdHJ1Y3Rvcl8/LmNhbGwoY29tcG9uZW50KVxyXG5cclxuICByZXR1cm4gY29tcG9uZW50XHJcbn1cclxuIiwiaW1wb3J0IF8sIHsgYnVpbGRFbGVtZW50IGFzICR9IGZyb20gJy4uL2Z1bmN0aW9uYWwtZG9tL2luZGV4LmpzJ1xyXG5pbXBvcnQgc3R5bGVzaGVldCBmcm9tICcuL21haW4uY3NzJ1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0eXBlZGVmIENvb2xCb3JkZXJPcHRpb25zRGVmXHJcbiAqIEBwcm9wZXJ0eSB7VCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCA/IFQgOiBzdHJpbmd9IFt0YWdOYW1lPVwiZGl2XCJdXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0eXBlZGVmIHtDb29sQm9yZGVyT3B0aW9uc0RlZjxUPiAmIGltcG9ydCgnLi4vZnVuY3Rpb25hbC1kb20vbGlicy9jb3JlLmpzJykuRnVuY3Rpb25hbERPTVByb3BlcnRpZXN9IENvb2xCb3JkZXJPcHRpb25zXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEBwYXJhbSB7Q29vbEJvcmRlck9wdGlvbnM8VD59IG9wdGlvbnNcclxuICogQHBhcmFtICB7Li4uSFRNTEVsZW1lbnR9IGNoaWxkcmVuIFxyXG4gKiBAcmV0dXJucyB7VCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCA/IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtUXSA6IEhUTUxFbGVtZW50fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIENvb2xCb3JkZXIob3B0aW9ucywgLi4uY2hpbGRyZW4pIHtcclxuICBjb25zdCB7dGFnTmFtZSA9ICdkaXYnfSA9IG9wdGlvbnMgPz8ge31cclxuXHJcbiAgY29uc3Qgc2hhZG93Um9vdENvbnRlbnQgPSBfLmRpdih7Y2xhc3M6ICd3cmFwcGVyLWJvcmRlci1lZmZlY3QgX2dyaWQtb3ZlcmxheV8nfSwgXHJcbiAgICBfLmRpdih7Y2xhc3M6ICdteS1jb250ZW50J30sXHJcbiAgICAgIF8uc2xvdCgpLFxyXG4gICAgKSxcclxuICAgIF8uZGl2KHtjbGFzczogJ2JvcmRlci1lZmZlY3QnfSxcclxuICAgICAgXy5kaXYoe2NsYXNzOiAnYm9yZGVyJ30pLFxyXG4gICAgICBfLmRpdih7Y2xhc3M6ICdib3JkZXInfSksXHJcbiAgICAgIF8uZGl2KHtjbGFzczogJ2JvcmRlcid9KSxcclxuICAgICAgXy5kaXYoe2NsYXNzOiAnYm9yZGVyJ30pLFxyXG4gICAgKVxyXG4gIClcclxuXHJcbiAgY29uc3Qgd3JhcHBlciA9IF8uJFt0YWdOYW1lXShudWxsLCB7XHJcbiAgICBhZG9wdGVkU3R5bGVTaGVldHM6IFtzdHlsZXNoZWV0XSxcclxuICAgIGNoaWxkcmVuOiBbc2hhZG93Um9vdENvbnRlbnRdXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuICQod3JhcHBlciwgb3B0aW9ucywgLi4uY2hpbGRyZW4pXHJcbn1cclxuIiwiXG4gIGNvbnN0IGNzcyA9IFwiOmhvc3Qge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKjpub3QoOmhvc3QpLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubXktY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogVXRpbGl0eSBDbGFzc2VzIFN0YXJ0ICovXFxyXFxuXFxyXFxuLl9ncmlkLW92ZXJsYXlfIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ292ZXJsYXknO1xcclxcbn1cXHJcXG5cXHJcXG4uX2dyaWQtb3ZlcmxheV8gPiAqIHtcXHJcXG4gIGdyaWQtYXJlYTogb3ZlcmxheTtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFV0aWxpdHkgQ2xhc3NlcyBFbmQgKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiBCb3JkZXIgRWZmZWN0ICovXFxyXFxuXFxyXFxuOmhvc3Qge1xcclxcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gIC0taG9yaXpvbnRhbC1sZW5ndGg6IDEwMHB4O1xcclxcbiAgLS12ZXJ0aWNhbC1sZW5ndGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlci1ib3JkZXItZWZmZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlci1ib3JkZXItZWZmZWN0ID4gOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXdpZHRoOiB2YXIoLS1ib3JkZXItd2lkdGgpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYm9yZGVyLWVmZmVjdCB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIC0taG9yaXpvbnRhbC1hbmdsZTogOTBkZWc7XFxyXFxuICAtLWhvcml6b250YWwtcmV2ZXJzZWQtYW5nbGU6IDI3MGRlZztcXHJcXG5cXHJcXG4gIC0tdmVydGljYWwtYW5nbGU6IDE4MGRlZztcXHJcXG4gIC0tdmVydGljYWwtcmV2ZXJzZWQtYW5nbGU6IDBkZWc7XFxyXFxuICBcXHJcXG4gIC0tdmVydGljYWwtY2xpcC1wYXRoOiBwb2x5Z29uKFxcclxcbiAgICAwIDAsXFxyXFxuICAgIDEwMCUgMCxcXHJcXG4gICAgNTAlIGNhbGModmFyKC0tdmVydGljYWwtbGVuZ3RoKSAqIDIpXFxyXFxuICApO1xcclxcbiAgXFxyXFxuICAtLXZlcnRpY2FsLWNsaXAtcGF0aC1yZXZlcnNlZDogcG9seWdvbihcXHJcXG4gICAgNTAlIGNhbGMoMTAwJSAtIHZhcigtLXZlcnRpY2FsLWxlbmd0aCkgKiAyKSxcXHJcXG4gICAgMTAwJSAxMDAlLFxcclxcbiAgICAwJSAxMDAlXFxyXFxuICApO1xcclxcbiAgXFxyXFxuICAtLWhvcml6b250YWwtY2xpcC1wYXRoOiBwb2x5Z29uKFxcclxcbiAgICAwIDAsXFxyXFxuICAgIDAgMTAwJSxcXHJcXG4gICAgY2FsYyh2YXIoLS1ob3Jpem9udGFsLWxlbmd0aCkgKiAyKSA1MCVcXHJcXG4gICk7XFxyXFxuICBcXHJcXG4gIC0taG9yaXpvbnRhbC1jbGlwLXBhdGgtcmV2ZXJzZWQ6IHBvbHlnb24oXFxyXFxuICAgIGNhbGMoMTAwJSAtIHZhcigtLWhvcml6b250YWwtbGVuZ3RoKSAqIDIpIDUwJSxcXHJcXG4gICAgMTAwJSAwLFxcclxcbiAgICAxMDAlIDEwMCVcXHJcXG4gICk7XFxyXFxufVxcclxcblxcclxcbi5ib3JkZXItZWZmZWN0ID4gLmJvcmRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi8qIEhvcml6b250YWwgVG9wICovXFxyXFxuLmJvcmRlci1lZmZlY3QgPiAuYm9yZGVyOm50aC1jaGlsZCgxKSB7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWJvcmRlci13aWR0aCk7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHZhcigtLWhvcml6b250YWwtYW5nbGUpLFxcclxcbiAgICAjZmZmOSxcXHJcXG4gICAgdHJhbnNwYXJlbnQgdmFyKC0taG9yaXpvbnRhbC1sZW5ndGgpXFxyXFxuICApO1xcclxcblxcclxcbiAgY2xpcC1wYXRoOiB2YXIoLS1ob3Jpem9udGFsLWNsaXAtcGF0aCk7XFxyXFxufVxcclxcblxcclxcbi8qIFZlcnRpY2FsIExlZnQgKi9cXHJcXG4uYm9yZGVyLWVmZmVjdCA+IC5ib3JkZXI6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIHRvcDogdmFyKC0tYm9yZGVyLXdpZHRoKTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICB3aWR0aDogdmFyKC0tYm9yZGVyLXdpZHRoKTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tYm9yZGVyLXdpZHRoKSk7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHZhcigtLXZlcnRpY2FsLWFuZ2xlKSxcXHJcXG4gICAgI2ZmZjksXFxyXFxuICAgIHRyYW5zcGFyZW50IGNhbGModmFyKC0tdmVydGljYWwtbGVuZ3RoKSAtIDJweClcXHJcXG4gICk7XFxyXFxuXFxyXFxuICBjbGlwLXBhdGg6IHZhcigtLXZlcnRpY2FsLWNsaXAtcGF0aCk7XFxyXFxufVxcclxcblxcclxcbi8qIEhvcml6b250YWwgQm90dG9tICovXFxyXFxuLmJvcmRlci1lZmZlY3QgPiAuYm9yZGVyOm50aC1jaGlsZCgzKSB7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1ib3JkZXItd2lkdGgpO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB2YXIoLS1ob3Jpem9udGFsLXJldmVyc2VkLWFuZ2xlKSxcXHJcXG4gICAgI2ZmZjksXFxyXFxuICAgIHRyYW5zcGFyZW50IHZhcigtLWhvcml6b250YWwtbGVuZ3RoKVxcclxcbiAgKTtcXHJcXG5cXHJcXG4gIGNsaXAtcGF0aDogdmFyKC0taG9yaXpvbnRhbC1jbGlwLXBhdGgtcmV2ZXJzZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBWZXJ0aWNhbCBSaWdodCAqL1xcclxcbi5ib3JkZXItZWZmZWN0ID4gLmJvcmRlcjpudGgtY2hpbGQoNCkge1xcclxcbiAgYm90dG9tOiB2YXIoLS1ib3JkZXItd2lkdGgpO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICB3aWR0aDogdmFyKC0tYm9yZGVyLXdpZHRoKTtcXHJcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0tYm9yZGVyLXdpZHRoKSk7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHZhcigtLXZlcnRpY2FsLXJldmVyc2VkLWFuZ2xlKSxcXHJcXG4gICAgI2ZmZjksXFxyXFxuICAgIHRyYW5zcGFyZW50IGNhbGModmFyKC0tdmVydGljYWwtbGVuZ3RoKSAtIDJweClcXHJcXG4gICk7XFxyXFxuXFxyXFxuICBjbGlwLXBhdGg6IHZhcigtLXZlcnRpY2FsLWNsaXAtcGF0aC1yZXZlcnNlZCk7XFxyXFxufVxcclxcblwiXG5cbiAgY29uc3Qgc3R5bGVzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KClcbiAgc3R5bGVzaGVldC5yZXBsYWNlU3luYyhjc3MpXG5cbiAgZXhwb3J0IGRlZmF1bHQgc3R5bGVzaGVldFxuICAiLCJpbXBvcnQgXywgeyBidWlsZEVsZW1lbnQgYXMgJCwgYnVpbGRTaGFkb3dIb3N0RWxlbWVudCBhcyAkJCB9IGZyb20gJy4uL2Z1bmN0aW9uYWwtZG9tL2luZGV4LmpzJ1xyXG5pbXBvcnQgbWFpblN0eWxlU2hlZXQgZnJvbSAnLi9tYWluLmNzcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDdXN0b21CdXR0b24ob3B0aW9ucywgLi4uY2hpbGRyZW4pIHtcclxuICBjb25zdCBlZmZlY3QgPSBfLmRpdigpXHJcblxyXG4gIGNvbnN0IGhvc3QgPSBfWydjdXN0b20tYnV0dG9uJ10oKVxyXG4gIGhvc3Qucm9sZSA9ICdidXR0b24nXHJcblxyXG4gIGxldCBpc0VuZCA9IGZhbHNlXHJcblxyXG4gIGxldCBpc1ByZXNzZWQgPSBmYWxzZVxyXG5cclxuICAvLyBob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJjYW5jZWwnLCBldmVudCA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhldmVudClcclxuICAvLyAgIGlzRW5kID0gZmFsc2VcclxuICAvLyAgIGlzUHJlc3NlZCA9IHRydWVcclxuXHJcbiAgLy8gICBlZmZlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZ3JvdycpXHJcbiAgLy8gICBlZmZlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZ3Jvdy1yZXZlcnNlZCcpXHJcbiAgLy8gfSlcclxuXHJcbiAgaG9zdC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIGV2ZW50ID0+IHtcclxuICAgIGlmIChldmVudC5idXR0b24gIT09IDApIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaXNFbmQgPSBmYWxzZVxyXG4gICAgaXNQcmVzc2VkID0gdHJ1ZVxyXG5cclxuICAgIGVmZmVjdC5jbGFzc0xpc3QucmVtb3ZlKCdncm93JylcclxuICAgIGVmZmVjdC5jbGFzc0xpc3QucmVtb3ZlKCdncm93LXJldmVyc2VkJylcclxuXHJcbiAgICAvLyBUcmlnZ2VyIGxheW91dCB0byBjb21wdXRlIHN0eWxlc1xyXG4gICAgZWZmZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgZWZmZWN0LmNsYXNzTGlzdC5hZGQoJ2dyb3cnKVxyXG5cclxuICAgIGVmZmVjdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS15JywgYCR7ZXZlbnQub2Zmc2V0WX1weGApXHJcbiAgICBlZmZlY3Quc3R5bGUuc2V0UHJvcGVydHkoJy0teCcsIGAke2V2ZW50Lm9mZnNldFh9cHhgKVxyXG5cclxuICAgIGNvbnN0IG1heFNpemUgPSBNYXRoLm1heChob3N0Lm9mZnNldFdpZHRoLCBob3N0Lm9mZnNldEhlaWdodClcclxuXHJcbiAgICBlZmZlY3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tc2l6ZScsIGAke21heFNpemV9cHhgKVxyXG5cclxuICAgIGNvbnN0IHBvaW50ZXJVcExpc3RlbmVyID0gZXZlbnQgPT4ge1xyXG4gICAgICBpc1ByZXNzZWQgPSBmYWxzZVxyXG5cclxuICAgICAgaWYgKGlzRW5kKSB7XHJcbiAgICAgICAgZWZmZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3cnKVxyXG4gICAgICAgIGVmZmVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIGVmZmVjdC5jbGFzc0xpc3QuYWRkKCdncm93LXJldmVyc2VkJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlZmZlY3QuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGlzUHJlc3NlZCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBlZmZlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZ3JvdycpXHJcbiAgICAgICAgICBlZmZlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgIGVmZmVjdC5jbGFzc0xpc3QuYWRkKCdncm93LXJldmVyc2VkJylcclxuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQucG9pbnRlclR5cGUgPT09ICd0b3VjaCcpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgcG9pbnRlclVwTGlzdGVuZXIsIHtjYXB0dXJlOiB0cnVlLCBvbmNlOiB0cnVlfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBwb2ludGVyVXBMaXN0ZW5lciwge2NhcHR1cmU6IHRydWUsIG9uY2U6IHRydWV9KVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGVmZmVjdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBldmVudCA9PiB7XHJcbiAgICBpc0VuZCA9IHRydWVcclxuICB9KVxyXG5cclxuICByZXR1cm4gJCQoaG9zdCwgb3B0aW9ucyxcclxuICAgIHtcclxuICAgICAgYWRvcHRlZFN0eWxlU2hlZXRzOiBbbWFpblN0eWxlU2hlZXRdLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICBfLnNsb3QoKSxcclxuICAgICAgXy5kaXYoe2NsYXNzOiAnZWZmZWN0LXdyYXBwZXInfSxcclxuICAgICAgICAkKGVmZmVjdCwge2NsYXNzOiAncmlwcGxlLWVmZmVjdCcsIGF0dHJpYnV0ZXM6IHtwYXJ0OiAncmlwcGxlLWVmZmVjdCd9fSksXHJcbiAgICAgIClcclxuICAgIF1cclxuICAgIH0sXHJcbiAgICAuLi5jaGlsZHJlblxyXG4gIClcclxufVxyXG4iLCJcbiAgY29uc3QgY3NzID0gXCI6aG9zdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2ZjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuOmhvc3Qge1xcclxcbiAgLS1yaXBwbGUtY29sb3I6ICMwMDA3O1xcclxcbn1cXHJcXG5cXHJcXG4uZWZmZWN0LXdyYXBwZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaW5zZXQ6IDA7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuXFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5yaXBwbGUtZWZmZWN0IHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuXFxyXFxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxyXFxuICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcclxcblxcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiB2YXIoLS15KTtcXHJcXG4gIGxlZnQ6IHZhcigtLXgpO1xcclxcblxcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yaXBwbGUtY29sb3IpO1xcclxcblxcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5ncm93IHtcXHJcXG4gIGFuaW1hdGlvbjogZ3JvdyAwLjJzIGVhc2Utb3V0IGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3Jvdy1yZXZlcnNlZCB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS41KTtcXHJcXG5cXHJcXG4gIGFuaW1hdGlvbjogZ3JvdyAwLjJzIGVhc2Utb3V0IHJldmVyc2UgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZ3JvdyB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuNSk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXG5cbiAgY29uc3Qgc3R5bGVzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KClcbiAgc3R5bGVzaGVldC5yZXBsYWNlU3luYyhjc3MpXG5cbiAgZXhwb3J0IGRlZmF1bHQgc3R5bGVzaGVldFxuICAiLCJpbXBvcnQgXyBmcm9tIFwiLi4vLi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHsgc29ydFdpbGRDYXJkUm91dGVUb0VuZCB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgTmF2aWdhdGVSb3V0ZVxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcGF0aFxyXG4gKiBAcHJvcGVydHkgeygpID0+IGltcG9ydChcIi4uLy4uL2xpYnMvY29yZS5qc1wiKS5Db3JlTm9kZX0gY29tcG9uZW50XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4uLy4uL2xpYnMvY29yZS5qc1wiKS5GdW5jdGlvbmFsRE9NUHJvcGVydGllc30gb3B0aW9ucyBcclxuICogQHBhcmFtIHtOYXZpZ2F0ZVJvdXRlW119IG5hdmlnYXRlUm91dGVzIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERPTU5hdmlnYXRlKG9wdGlvbnMsIG5hdmlnYXRlUm91dGVzKSB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gX1snZG9tLW5hdmlnYXRlJ10ob3B0aW9ucylcclxuXHJcbiAgbmF2aWdhdGVSb3V0ZXMgPSBzb3J0V2lsZENhcmRSb3V0ZVRvRW5kKG5hdmlnYXRlUm91dGVzKSAgXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb21wb25lbnQsXHJcblxyXG4gICAgdXBkYXRlKHBhdGhuYW1lKSB7XHJcbiAgICAgIGxldCByZW5kZXJDb21wb25lbnQgPSBudWxsXHJcblxyXG4gICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIG5hdmlnYXRlUm91dGVzKSB7XHJcbiAgICAgICAgaWYgKHJvdXRlLnBhdGggPT09IHBhdGhuYW1lKSB7XHJcbiAgICAgICAgICByZW5kZXJDb21wb25lbnQgPSByb3V0ZS5jb21wb25lbnRcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocm91dGUucGF0aCA9PT0gJyonKSB7XHJcbiAgICAgICAgICByZW5kZXJDb21wb25lbnQgPSByb3V0ZS5jb21wb25lbnRcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb21wb25lbnQucmVwbGFjZUNoaWxkcmVuKClcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgcmVuZGVyQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY29tcG9uZW50LmFwcGVuZChyZW5kZXJDb21wb25lbnQoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGF0Y2hDdXN0b21OYXZpZ2F0ZSgpIHtcclxuICBjb25zdCBjdXN0b21OYXZpZ2F0ZSA9IG5ldyBDdXN0b21FdmVudCgnY3VzdG9tLW5hdmlnYXRlJywge2RldGFpbDogbnVsbH0pXHJcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoY3VzdG9tTmF2aWdhdGUpXHJcbn1cclxuXHJcbi8vIEZpcmUgYGN1c3RvbS1uYXZpZ2F0ZWAgZXZlbnQgb24gYGxvYWRgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnQgPT4ge1xyXG4gIGRpc3BhdGNoQ3VzdG9tTmF2aWdhdGUoKVxyXG59LCB7b25jZTogdHJ1ZX0pXHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZXZlbnQgPT4ge1xyXG4gIGRpc3BhdGNoQ3VzdG9tTmF2aWdhdGUoKVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSB7XHJcblxyXG4gIC8vIHNldFJvb3QodXJsKSB7XHJcbiAgLy8gICBjb25zdCBuZXdVUkwgPSBuZXcgVVJMKHVybClcclxuICAvLyAgIGNvbnN0IHJvb3QgPSBuZXdVUkwucGF0aG5hbWUuc3BsaXQoJy8nKS5zbGljZSgwLCAtMSkuam9pbignLycpXHJcblxyXG4gIC8vICAgcm9vdFBhdGggPSByb290XHJcbiAgLy8gfSxcclxuXHJcbiAgZ2V0IHN0YXRlKCkge1xyXG4gICAgcmV0dXJuIGhpc3Rvcnkuc3RhdGVcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFxyXG4gICAqIEBwYXJhbSB7SGlzdG9yeVsnc3RhdGUnXX0gW3N0YXRlPW51bGxdIFxyXG4gICAqL1xyXG4gIHJlcGxhY2UodXJsLCBzdGF0ZSA9IG51bGwpIHtcclxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCAnJywgdXJsKVxyXG4gICAgZGlzcGF0Y2hDdXN0b21OYXZpZ2F0ZSgpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBcclxuICAgKiBAcGFyYW0ge0hpc3RvcnlbJ3N0YXRlJ119IFtzdGF0ZT1udWxsXSBcclxuICAgKi9cclxuICBwdXNoKHVybCwgc3RhdGUgPSBudWxsKSB7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgJycsIHVybClcclxuICAgIGRpc3BhdGNoQ3VzdG9tTmF2aWdhdGUoKVxyXG4gIH0sXHJcblxyXG4gIGZvcndhcmQoKSB7XHJcbiAgICBoaXN0b3J5LmZvcndhcmQoKVxyXG4gIH0sXHJcblxyXG4gIGJhY2soKSB7XHJcbiAgICBoaXN0b3J5LmJhY2soKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7J2N1c3RvbS1uYXZpZ2F0ZSd9IGV2ZW50VHlwZSBcclxuICAgKiBAcGFyYW0geyhldmVudDogQ3VzdG9tRXZlbnQpID0+IHZvaWR9IGNhbGxiYWNrTGlzdGVuZXIgXHJcbiAgICovXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrTGlzdGVuZXIpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2tMaXN0ZW5lcilcclxuICB9XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2luZGV4LmpzXCIpLk5hdmlnYXRlUm91dGVbXX0gcm91dGVzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRXaWxkQ2FyZFJvdXRlVG9FbmQocm91dGVzKSB7XHJcbiAgY29uc3Qgc29ydGVkUm91dGVzID0gWy4uLnJvdXRlc10uc29ydCgoYSwgYikgPT4gYS5wYXRoID09PSAnKicgPyAxIDogYi5wYXRoID09PSAnKicgPyAtMSA6IDApXHJcbiAgcmV0dXJuIHNvcnRlZFJvdXRlc1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1haW5TdHlsZVNoZWV0IGZyb20gJy4vc3R5bGVzL21haW4uY3NzJ1xyXG5pbXBvcnQgXywge2J1aWxkRWxlbWVudCBhcyAkLCBidWlsZFNoYWRvd0hvc3RFbGVtZW50IGFzICQkfSBmcm9tICcuL2Z1bmN0aW9uYWwtZG9tL2luZGV4LmpzJ1xyXG5pbXBvcnQgeyBDb29sQm9yZGVyIH0gZnJvbSAnLi9Db29sQm9yZGVyL2luZGV4LmpzJ1xyXG5pbXBvcnQgeyBDdXN0b21CdXR0b24gfSBmcm9tICcuL0N1c3RvbUJ1dHRvbi9pbmRleC5qcydcclxuaW1wb3J0IERPTU5hdmlnYXRlLCB7IG5hdmlnYXRpb24gfSBmcm9tICcuL2Z1bmN0aW9uYWwtZG9tL2NvbXBvbmVudHMvZG9tLW5hdmlnYXRlL2luZGV4LmpzJ1xyXG5cclxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzID0gW21haW5TdHlsZVNoZWV0XVxyXG5cclxuY29uc3QgTmF2aWdhdGUgPSBET01OYXZpZ2F0ZSh7Y2xhc3M6ICduYXZpZ2F0ZS1jb21wb25lbnQnfSwgW1xyXG4gIHtcclxuICAgIHBhdGg6ICcqJyxcclxuICAgIGNvbXBvbmVudDogZnVuY3Rpb24gTm90Rm91bmQoKSB7XHJcbiAgICAgIHJldHVybiBfLmRpdih7fSwgJ05PVCBGT1VORCcpXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIFJvb3QoKSB7XHJcbiAgICAgIHJldHVybiBfLmRpdih7Y2xhc3M6ICdyb290J30sICdUaGUgcm9vdCBvZiB0aGluZ3MnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9zb25pYycsXHJcbiAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIFNvbmljKCkge1xyXG4gICAgICByZXR1cm4gX1snc29uaWMtcCddKHt9LFxyXG4gICAgICAgICdTb25pYycsXHJcbiAgICAgICAgXy5kaXYoe2NsYXNzOiAnc3RhdGUnfSwgYFN0YXRlIHZhbHVlIG9mIHRoaXMgcGF0aDogJHtKU09OLnN0cmluZ2lmeShuYXZpZ2F0aW9uLnN0YXRlKX1gKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2FteScsXHJcbiAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIEFteSgpIHtcclxuICAgICAgcmV0dXJuIF9bJ2FteS1wJ10oe30sICdBbXknKVxyXG4gICAgfVxyXG4gIH0sXHJcbl0pXHJcblxyXG5uYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2N1c3RvbS1uYXZpZ2F0ZScsIGV2ZW50ID0+IHtcclxuICBOYXZpZ2F0ZS51cGRhdGUobG9jYXRpb24ucGF0aG5hbWUpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIF8uZGl2KHtkYXRhc2V0OiB7aWQ6ICdhcHAnfX0sXHJcbiAgICBfLmRpdih7ZGF0YXNldDoge2lkOiAnYXBwLWNvbnRlbnQnfX0sXHJcbiAgICAgIEFzaWRlKCksXHJcbiAgICAgIE1haW4oKSxcclxuICAgIClcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFzaWRlKCkge1xyXG4gIHJldHVybiBfLmFzaWRlKHtjbGFzczogJ2FzaWRlLWNvbXBvbmVudCd9LFxyXG4gICAgXy4kbWFwKDYsIGluZGV4ID0+IF8uZGl2KHtjbGFzczogJ2l0ZW0nfSwgaW5kZXggKyAxKSlcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3Qgc29uaWNCdG4gPSBDdXN0b21CdXR0b24oKVxyXG4gIHNvbmljQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gbmF2aWdhdGlvbi5wdXNoKCcvc29uaWMnLCAnUHJpbmNlc3MgRWxpc2UnKSlcclxuXHJcbiAgY29uc3QgYW15QnRuID0gQ3VzdG9tQnV0dG9uKClcclxuICBhbXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBuYXZpZ2F0aW9uLnB1c2goJy9hbXknKSlcclxuXHJcbiAgY29uc3Qgcm9vdEJ0biA9IEN1c3RvbUJ1dHRvbigpXHJcbiAgcm9vdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IG5hdmlnYXRpb24ucHVzaCgnLycpKVxyXG5cclxuICBjb25zdCBub3RGb3VuZEJ0biA9IEN1c3RvbUJ1dHRvbigpXHJcbiAgbm90Rm91bmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBuYXZpZ2F0aW9uLnB1c2goJy9Abm90LWZvdW5kJykpXHJcblxyXG4gIHJldHVybiBfLm1haW4oe2NsYXNzOiAnbWFpbi1jb21wb25lbnQnfSxcclxuICAgIENvb2xCb3JkZXIoe3RhZ05hbWU6ICdoMScsIGNsYXNzOiAndGl0bGUtYm9yZGVyLXdyYXBwZXInfSxcclxuICAgICAgXy5kaXYoe2NsYXNzOiAndGl0bGUnfSwgJ1NvbWUgY29vbCB0aXRsZScpXHJcbiAgICApLFxyXG4gICAgQ2FyZHNDb250YWluZXIoKSxcclxuXHJcbiAgICBUeXBlU29uaWMoKSxcclxuXHJcbiAgICAkKHNvbmljQnRuLCB7Y2xhc3M6ICdidG4nLCBzdHlsZToge2JhY2tncm91bmRDb2xvcjogJyMwNGEnfX0sICdHbyB0byBTb25pYycpLFxyXG4gICAgJChhbXlCdG4sIHtjbGFzczogJ2J0bicsIHN0eWxlOiB7YmFja2dyb3VuZENvbG9yOiAnI2I0Yid9fSwgJ0dvIHRvIEFteScpLFxyXG4gICAgJChyb290QnRuLCB7Y2xhc3M6ICdidG4nLCBzdHlsZToge2JhY2tncm91bmRDb2xvcjogJyMwOTAnfX0sICdHbyB0byBSb290JyksXHJcbiAgICAkKG5vdEZvdW5kQnRuLCB7Y2xhc3M6ICdidG4nLCBzdHlsZToge2JhY2tncm91bmRDb2xvcjogJyMyMjInfX0sICdHbyB0byBhbnkgTm90IEZvdW5kJyksXHJcblxyXG4gICAgTmF2aWdhdGUuY29tcG9uZW50LFxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gVHlwZVNvbmljKCkge1xyXG4gIGNvbnN0IHR5cGVFZmZlY3QgPSBUeXBlRWZmZWN0KClcclxuXHJcbiAgY29uc3QgYnRuID0gQ3VzdG9tQnV0dG9uKClcclxuXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgdHlwZUVmZmVjdC5pbml0QW5pbWF0aW9uKCdTb25pYyBUaGUgSGVkZ2Vob2cnLCAxMDApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIF8oXHJcbiAgICAkKHR5cGVFZmZlY3QuY29tcG9uZW50LCB7Y2xhc3M6ICd0eXBlLWVmZmVjdC1jb21wb25lbnQnfSksXHJcbiAgICAkKGJ0bixcclxuICAgICAge2NsYXNzOiAnYnRuJywgc3R5bGU6IHthbGlnblNlbGY6ICdmbGV4LXN0YXJ0J319LFxyXG4gICAgICAnQ2xpY2sgTWUnXHJcbiAgICApLFxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZHNDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIF8uZGl2KHtjbGFzczogJ2NhcmRzLWNvbnRhaW5lcid9LFxyXG4gICAgXy4kbWFwKDMsICgpID0+IF8uZGl2KHtjbGFzczogJ2NhcmQnfSxcclxuICAgICAgICBfLmRpdih7Y2xhc3M6ICd0aXRsZSd9LCAnQ2FyZCBUaXRsZScpLFxyXG4gICAgICAgIF8uZGl2KHtjbGFzczogJ2NvbnRlbnQnfSwgJ015IHBlcmZlY3QgY29udGVudFxcbicucmVwZWF0KDQpKVxyXG4gICAgICApXHJcbiAgICApLFxyXG4gIClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFR5cGVFZmZlY3QoKSB7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJGb3JFbXB0eVN0cmluZyA9ICgpID0+IF8ucHJlKHt9LCAnICcpXHJcbiAgY29uc3QgY29tcG9uZW50ID0gX1sndHlwZS1lZmZlY3QnXSh7Y2xhc3M6ICd0eXBlLWVmZmVjdC1jb21wb25lbnQnLCBzdHlsZToge2xpbmVIZWlnaHQ6ICcxLjNlbSd9fSwgcGxhY2Vob2xkZXJGb3JFbXB0eVN0cmluZygpKVxyXG5cclxuICBsZXQgaVxyXG4gIGxldCB0aW1lb3V0QW5pbWF0aW9uXHJcblxyXG4gIGZ1bmN0aW9uIGFuaW0odGV4dCwgZGVsYXkpIHtcclxuICAgIGNvbXBvbmVudC5pbm5lclRleHQgPSB0ZXh0LnNsaWNlKDAsIGkpXHJcblxyXG4gICAgaWYgKCsraSA+IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRpbWVvdXRBbmltYXRpb24gPSBzZXRUaW1lb3V0KGFuaW0sIGRlbGF5LCAuLi5hcmd1bWVudHMpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29tcG9uZW50LFxyXG4gICAgaW5pdEFuaW1hdGlvbih0ZXh0ID0gJ05vIFRleHQgVG8gVHlwZScsIGRlbGF5ID0gMTAwKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0QW5pbWF0aW9uKVxyXG4gICAgICBpID0gMVxyXG5cclxuICAgICAgY29tcG9uZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICAgIGNvbXBvbmVudC5hcHBlbmQocGxhY2Vob2xkZXJGb3JFbXB0eVN0cmluZygpKVxyXG5cclxuICAgICAgc2V0VGltZW91dChhbmltLCBkZWxheSwgLi4uYXJndW1lbnRzKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVuZGVyID0gXyhcclxuICBBcHAoKSxcclxuKVxyXG5cclxuZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGRyZW4oKVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmQocmVuZGVyKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=