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

  const css = "@charset \"UTF-8\";\r\n\r\n[data-id=\"app-content\"] {\r\n  display: grid;\r\n  grid-template-columns: 300px 1fr;\r\n  grid-template-rows: 1fr;\r\n\r\n  padding: 0;\r\n\r\n  overflow: auto;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\r\n[data-id=\"app-content\"] {\r\n    grid-template-columns: 1fr\r\n}\r\n  }\r\n\r\nhtml {\r\n    --width: sonic-px;\r\n  }\r\n\r\nhtml {\r\n    --width: tails-px;\r\n  }\r\n\r\nhtml {\r\n    --width: knuckles-px;\r\n  }\r\n\r\nhtml {\r\n    --width: 1px;\r\n  }\r\n\r\nhtml {\r\n    --width: 2px;\r\n  }\r\n\r\nhtml {\r\n    --width: 3px;\r\n  }\r\n\r\n:is(html) {\r\n  background-color: #000;\r\n}\r\n\r\n:is(html) > body {\r\n    background-color: #000;\r\n  }\r\n\r\n@media (max-width: 700px) {\r\n\r\n:is(html) > body {\r\n      background-color: #111\r\n  }\r\n    }\r\n\r\n\r\n.aside-component {\r\n  grid-column: 1 / span 1;\r\n  grid-row: 1 / span 1;\r\n  background-color: #000;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 0.5rem;\r\n\r\n  padding: 1rem;\r\n\r\n  background-color: #142434;\r\n\r\n  overflow: auto;\r\n}\r\n\r\n\r\n@media (max-width: 600px) {\r\n\r\n\r\n.aside-component {\r\n    display: none\r\n}\r\n  }\r\n\r\n\r\n.aside-component > .item {\r\n    padding-inline: 0.6rem;\r\n    padding-block: 0.6rem;\r\n  \r\n    border: solid 2px #fff;\r\n    background-color: #06f;\r\n  }\r\n\r\n\r\n.aside-component > .item:last-child {\r\n      margin-top: auto;\r\n    }\r\n\r\n.main-component {\r\n  grid-column: 2 / span 1;\r\n  grid-row: 1 / span 1;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1rem;\r\n\r\n  padding: 1rem;\r\n\r\n  overflow: auto;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n\r\n.main-component {\r\n    grid-column: 1 / span 1\r\n}\r\n  }\r\n\r\n.main-component > .title-border-wrapper {\r\n    align-self: center;\r\n\r\n    padding-bottom: 1rem;\r\n  }\r\n\r\n.title-border-wrapper {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  --vertical-length: 3rem;\r\n}\r\n\r\n.title-border-wrapper > .title {\r\n    padding-block: 1rem;\r\n    padding-inline: 0.5rem;\r\n  \r\n    text-align: center;\r\n  }\r\n\r\n.cards-container {\r\n  align-self: center;\r\n\r\n  width: 100%;\r\n  max-width: 700px;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  column-gap: 1rem;\r\n}\r\n\r\n.cards-container > .card {\r\n    max-width: 190px;\r\n\r\n    flex-shrink: 1;\r\n  }\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 0.5rem;\r\n\r\n  padding-block: 0.5rem;\r\n  padding-inline: 1rem;\r\n\r\n  border-radius: 0.6rem;\r\n  background-color: #06f;\r\n}\r\n\r\n.card > .title {\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n  }\r\n\r\n.btn {\r\n  background-color: #06f;\r\n  padding: 1rem;\r\n  border-radius: 0.3em;\r\n}\r\n\r\n\r\n.navigate-component {\r\n  height: 180px;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n  padding: 1rem;\r\n  border: solid 2px #fff;\r\n\r\n  overflow: auto;\r\n}\r\n"

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
 * @typedef {boolean | number | bigint | string | null | undefined} Primitive
 */

/**
 * @typedef FunctionalDOMProperties
 * @property {string} [id]
 * @property {string | string[]} [class]
 * @property {{[key: string]: Primitive}} [dataset]
 * @property {{[key: string]: Primitive}} [attributes]
 * @property {{[key: string]: Primitive}} [style]
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

      // @ts-ignore
      element.dataset[property] = value
    }
  }

  for (const [property, value] of Object.entries(attributes ?? {})) {
    if (value === undefined) continue

    if (['src', 'href'].includes(property)) {
      element.setAttribute(property, tp.createScriptURL(value))

      continue
    }

    // @ts-ignore
    element.setAttribute(property, value)
  }
  
  if (style) {
    // @ts-ignore
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
    // @ts-ignore
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setClasses)(element, classes)
  }
  
  if (dataset) {
    for (const [property, value] of Object.entries(dataset ?? {})) {
      if (value === undefined) continue
      
      // @ts-ignore
      element.dataset[property] = value
    }
  }
  
  for (const [property, value] of Object.entries(attributes ?? {})) {
    if (value === undefined) continue
    
    if (['src', 'href'].includes(property)) {
      element.setAttribute(property, tp.createScriptURL(value))
      
      continue
    }
    
    // @ts-ignore
    element.setAttribute(property, value)
  }
  
  if (style) {
    // @ts-ignore
    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.setStyleProperties)(element.style, style)
  }
  
  // @ts-ignore
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
 * @typedef DOMNavigateObject
 * @property {HTMLElement} component
 * @property {(pathname: string) => void} update
 */

/**
 * 
 * @param {NavigateRoute[]} navigateRoutes 
 * @returns {DOMNavigateObject}
 */
function DOMNavigate(navigateRoutes) {
  const component = _index_js__WEBPACK_IMPORTED_MODULE_0__["default"]["dom-navigate"]()

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



/**
 * @typedef {{
 *  'custom-navigate': CustomNavigateDetail,
 *  'custom-hash-change': CustomHashChangeDetail
 * }} NavigateEventsMap
 */

/**
 * @typedef {keyof NavigateEventsMap} NavigateEvents
 */

/**
 * @typedef CustomNavigateDetail
 * @property {string} path This is the same as using `window.location.path`
 */

/**
 * @typedef CustomHashChangeDetail
 * @property {string} hash This is the same as using `window.location.hash`
 */

/**
 * @template {NavigateEvents} T
 * @typedef {(event: CustomEvent<NavigateEventsMap[T]>) => void} CallbackListener
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
      const style = {width: '100%', height: '100%', backgroundColor: '#900', display: 'grid', placeItems: 'center'}
      return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({style}, 'NOT FOUND')
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
    component: CardsContainer,
  },
]

const Navigate = (0,_functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(routes)

_functional_dom_components_dom_navigate_index_js__WEBPACK_IMPORTED_MODULE_4__.navigation.addEventListener('custom-navigate', event => {
  Navigate.update(event.detail.path)
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

    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(Navigate.component, {class: 'navigate-component'}),

    TypeSonic(),

    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(sonicBtn, {class: 'btn', style: {backgroundColor: '#04a'}}, 'Go to Sonic'),
    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(amyBtn, {class: 'btn', style: {backgroundColor: '#b4b'}}, 'Go to Amy'),
    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(rootBtn, {class: 'btn', style: {backgroundColor: '#090'}}, 'Go to Root'),
    (0,_functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__.buildElement)(notFoundBtn, {class: 'btn', style: {backgroundColor: '#222'}}, 'Go to any Not Found'),
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
  const placeholderForEmptyString = () => _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].pre({attributes: {'aria-hidden': true}}, ' ')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLHdCQUF3QiwrQkFBK0I7QUFDNUQsSUFBSSxzRUFBQztBQUNMLE9BQU8sc0JBQXNCLHlCQUF5QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9FQUFLLEVBQUUseUJBQXlCO0FBQ3pDLElBQUkscUVBQU0sVUFBVSxvRUFBSyxFQUFFLGNBQWM7QUFDekMsUUFBUSxvRUFBSyxFQUFFLGVBQWU7QUFDOUIsUUFBUSxvRUFBSyxFQUFFLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxvRUFBSyxFQUFFLGFBQWEscUJBQXFCO0FBQ25GLG9CQUFvQiwrRUFBZ0IsRUFBRSx3Q0FBd0MscUJBQXFCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvRUFBQztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2Z1bmN0aW9uYWwtZG9tL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25hbC1kb20vbGlicy9jb3JlLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25hbC1kb20vbGlicy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25hbC1kb20vbGlicy9jcmVhdGUtd2ViLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL0Nvb2xCb3JkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9Db29sQm9yZGVyL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvQ3VzdG9tQnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvQ3VzdG9tQnV0dG9uL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25hbC1kb20vY29tcG9uZW50cy9kb20tbmF2aWdhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbmFsLWRvbS9jb21wb25lbnRzL2RvbS1uYXZpZ2F0ZS91dGlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgY29uc3QgY3NzID0gXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcclxcblxcclxcbltkYXRhLWlkPVxcXCJhcHAtY29udGVudFxcXCJdIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcblxcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG5cXHJcXG5bZGF0YS1pZD1cXFwiYXBwLWNvbnRlbnRcXFwiXSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyXFxyXFxufVxcclxcbiAgfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICAtLXdpZHRoOiBzb25pYy1weDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgLS13aWR0aDogdGFpbHMtcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIC0td2lkdGg6IGtudWNrbGVzLXB4O1xcclxcbiAgfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICAtLXdpZHRoOiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIC0td2lkdGg6IDJweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgLS13aWR0aDogM3B4O1xcclxcbiAgfVxcclxcblxcclxcbjppcyhodG1sKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoaHRtbCkgPiBib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG5cXHJcXG46aXMoaHRtbCkgPiBib2R5IHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExXFxyXFxuICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4uYXNpZGUtY29tcG9uZW50IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICByb3ctZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MjQzNDtcXHJcXG5cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG5cXHJcXG5cXHJcXG4uYXNpZGUtY29tcG9uZW50IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZVxcclxcbn1cXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4uYXNpZGUtY29tcG9uZW50ID4gLml0ZW0ge1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMC42cmVtO1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAwLjZyZW07XFxyXFxuICBcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA2ZjtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4uYXNpZGUtY29tcG9uZW50ID4gLml0ZW06bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbi5tYWluLWNvbXBvbmVudCB7XFxyXFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcXHJcXG4gIGdyaWQtcm93OiAxIC8gc3BhbiAxO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICByb3ctZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG5cXHJcXG4ubWFpbi1jb21wb25lbnQge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMVxcclxcbn1cXHJcXG4gIH1cXHJcXG5cXHJcXG4ubWFpbi1jb21wb25lbnQgPiAudGl0bGUtYm9yZGVyLXdyYXBwZXIge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcblxcclxcbi50aXRsZS1ib3JkZXItd3JhcHBlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAtLXZlcnRpY2FsLWxlbmd0aDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLWJvcmRlci13cmFwcGVyID4gLnRpdGxlIHtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXHJcXG4gICAgcGFkZGluZy1pbmxpbmU6IDAuNXJlbTtcXHJcXG4gIFxcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sdW1uLWdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzLWNvbnRhaW5lciA+IC5jYXJkIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxOTBweDtcXHJcXG5cXHJcXG4gICAgZmxleC1zaHJpbms6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICByb3ctZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICBwYWRkaW5nLWJsb2NrOiAwLjVyZW07XFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmY7XFxyXFxufVxcclxcblxcclxcbi5jYXJkID4gLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2ZjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm5hdmlnYXRlLWNvbXBvbmVudCB7XFxyXFxuICBoZWlnaHQ6IDE4MHB4O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAycHggI2ZmZjtcXHJcXG5cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cIlxuXG4gIGNvbnN0IHN0eWxlc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpXG4gIHN0eWxlc2hlZXQucmVwbGFjZVN5bmMoY3NzKVxuXG4gIGV4cG9ydCBkZWZhdWx0IHN0eWxlc2hlZXRcbiAgIiwiaW1wb3J0IERPTU1ha2VyLCB7IGJ1aWxkRWxlbWVudCwgYnVpbGRFbGVtZW50TlMsIGJ1aWxkU2hhZG93SG9zdEVsZW1lbnQsIE5TTWFrZXIgfSBmcm9tICcuL2xpYnMvY29yZS5qcydcclxuaW1wb3J0IHsgY3JlYXRlV2ViQ29tcG9uZW50IH0gZnJvbSAnLi9saWJzL2NyZWF0ZS13ZWItY29tcG9uZW50LmpzJ1xyXG5cclxuY29uc3QgXyA9IERPTU1ha2VyXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfXHJcblxyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4vbGlicy9jb3JlLmpzJykuTlNNYWtlclByb3h5UHJvcGVydGllczxTVkdFbGVtZW50LCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPn0gU1ZHTWFrZXJcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGUge1NWR01ha2VyfVxyXG4gKi9cclxuY29uc3QgX3N2ZyA9IE5TTWFrZXIoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJylcclxuXHJcbmV4cG9ydCB7XHJcbiAgYnVpbGRFbGVtZW50LFxyXG4gIGJ1aWxkU2hhZG93SG9zdEVsZW1lbnQsXHJcbiAgY3JlYXRlV2ViQ29tcG9uZW50LFxyXG5cclxuICBfc3ZnLFxyXG5cclxuICBOU01ha2VyLFxyXG4gIGJ1aWxkRWxlbWVudE5TXHJcbn1cclxuIiwiaW1wb3J0IHsgJG1hcCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlRWxlbWVudE5TLCBzZXRDaGlsZHJlbiwgc2V0Q2xhc3Nlcywgc2V0U3R5bGVQcm9wZXJ0aWVzIH0gZnJvbSAnLi9oZWxwZXJzLmpzJ1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtzdHJpbmcgfCBudW1iZXIgfCBIVE1MRWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnR9IENvcmVOb2RlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtDb3JlTm9kZVtdIHwgQ29yZU5vZGVbXVtdfSBDaGlsZHJlblxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7KC4uLmNoaWxkcmVuOiBDb3JlTm9kZVtdKSA9PiBEb2N1bWVudEZyYWdtZW50fSBET01NYWtlclByb3h5RnVuY1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiAgW2tleSBpbiBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBdOiAocHJvcGVydGllcz86IEZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbjogQ2hpbGRyZW4pID0+IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtrZXldXHJcbiAqIH19IERPTU1ha2VySFRNTFByb3h5UHJvcGVydGllc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiBTaGFkb3dET01PcHRpb25zXHJcbiAqIEBwcm9wZXJ0eSB7U2hhZG93Um9vdEluaXR9IFtpbml0XVxyXG4gKiBAcHJvcGVydHkge1NoYWRvd1Jvb3RNb2RlfSBbbW9kZT1vcGVuXVxyXG4gKiBAcHJvcGVydHkge0NTU1N0eWxlU2hlZXRbXX0gW2Fkb3B0ZWRTdHlsZVNoZWV0cz1bXV1cclxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudFtdfSBbY2hpbGRyZW5dXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHt7XHJcbiAqICAkOiB7W2tleSBpbiBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXBdOiAocHJvcGVydGllczogRnVuY3Rpb25hbERPTVByb3BlcnRpZXMsIHNoYWRvd0RPTU9wdGlvbnM6IFNoYWRvd0RPTU9wdGlvbnMsIC4uLmNoaWxkcmVuOiBDaGlsZHJlbikgPT4gSFRNTEVsZW1lbnRUYWdOYW1lTWFwW2tleV19XHJcbiAqIH19IERPTU1ha2VyU2hhZG93RE9NSFRNTFByb3h5UHJvcGVydGllc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiAgJDoge1trZXk6IHN0cmluZ106IChwcm9wZXJ0aWVzOiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgc2hhZG93RE9NT3B0aW9uczogU2hhZG93RE9NT3B0aW9ucywgLi4uY2hpbGRyZW46IENoaWxkcmVuKSA9PiBIVE1MRWxlbWVudH1cclxuICogfX0gRE9NTWFrZXJTaGFkb3dET01Qcm94eVByb3BlcnRpZXNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge3tcclxuICogICRtYXA6IChsZW5ndGg6IG51bWJlciwgY2FsbGJhY2s6IChpbmRleDogbnVtYmVyKSA9PiBDb3JlTm9kZSkgPT4gQ29yZU5vZGVbXVxyXG4gKiB9fSBET01NYWtlck1hcEZ1bmNcclxuICovXHJcblxyXG4vKipcclxuKiBAdHlwZWRlZiB7e1xyXG4qICBba2V5OiBzdHJpbmddOiAocHJvcGVydGllcz86IEZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbjogQ2hpbGRyZW4pID0+IEhUTUxFbGVtZW50XHJcbiogfX0gRE9NTWFrZXJQcm94eVByb3BlcnRpZXNcclxuKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7RE9NTWFrZXJQcm94eUZ1bmMgJiBET01NYWtlckhUTUxQcm94eVByb3BlcnRpZXMgJiBET01NYWtlclNoYWRvd0RPTUhUTUxQcm94eVByb3BlcnRpZXMgJiBET01NYWtlclNoYWRvd0RPTVByb3h5UHJvcGVydGllcyAmIERPTU1ha2VyTWFwRnVuYyAmIERPTU1ha2VyUHJveHlQcm9wZXJ0aWVzfSBET01NYWtlclByb3h5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtib29sZWFuIHwgbnVtYmVyIHwgYmlnaW50IHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZH0gUHJpbWl0aXZlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIEZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbaWRdXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgc3RyaW5nW119IFtjbGFzc11cclxuICogQHByb3BlcnR5IHt7W2tleTogc3RyaW5nXTogUHJpbWl0aXZlfX0gW2RhdGFzZXRdXHJcbiAqIEBwcm9wZXJ0eSB7e1trZXk6IHN0cmluZ106IFByaW1pdGl2ZX19IFthdHRyaWJ1dGVzXVxyXG4gKiBAcHJvcGVydHkge3tba2V5OiBzdHJpbmddOiBQcmltaXRpdmV9fSBbc3R5bGVdXHJcbiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7RE9NTWFrZXJQcm94eX1cclxuICogXHJcbiAqIFByb3h5IG9iamVjdCB0aGF0IGlzIHRoZSBjb3JlIG9mIHRoaXMgbGlicmFyeS4gIFxyXG4gKiBCeSBpbnZva2luZyBpdCBhcyBhIGBmdW5jdGlvbmAgeW91IGNhbiB3cmFwIG11bHRpcGxlIGBET00gZWxlbWVudHNgIGluIGEgYERvY3VtZW50RnJhbWdlbnRgLlxyXG4gKiBcclxuICogSWYgaW5zdGVhZCB3ZSBhY2Nlc3MgYSBgcHJvcGVydHlgIG9mIGl0ICBcclxuICogd2Ugd2lsbCBnZXQgYSBgZnVuY3Rpb25gIHRoYXQgY3JlYXRlcyBhIGBET00gZWxlbWVudGAgIFxyXG4gKiB3aGljaCBgdGFnTmFtZWAgbWF0Y2ggdGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uLlxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAqICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gKiBcclxuICogIC8vIERvY3VtZW50RnJhZ21lbnQ8SFRNTERpdkVsZW1lbnQsIEhUTUxCdXR0b25FbGVtZW50PlxyXG4gKiAgY29uc3QgZG9jdW1lbnRGcmFnbWVudCA9IERPTU1ha2VyKGRpdiwgYnV0dG9uKVxyXG4gKiBcclxuICogQGV4YW1wbGVcclxuICogY29uc3QgZGl2ICAgID0gRE9NTWFrZXIuZGl2KClcclxuICogY29uc3QgYnV0dG9uID0gRE9NTWFrZXIuYnV0dG9uKClcclxuICogXHJcbiAqIGNvbnN0IGN1c3RvbUVsZW1lbnQgPSBET01NYWtlclsnY3VzdG9tLWVsZW1lbnQnXSgpXHJcbiAqICBcclxuICovXHJcbmNvbnN0IERPTU1ha2VyID0gbmV3IFByb3h5KGZ1bmN0aW9uKCkge30sIHtcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHsqfSB0YXJnZXQgXHJcbiAgICogQHBhcmFtIHsqfSB0aGlzQXJnIFxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnRbXX0gYXJnQXJyYXkgXHJcbiAgICogQHJldHVybnMge0RvY3VtZW50RnJhZ21lbnR9XHJcbiAgICovXHJcbiAgYXBwbHk6ICh0YXJnZXQsIHRoaXNBcmcsIGFyZ0FycmF5KSA9PiB7XHJcbiAgICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKVxyXG5cclxuICAgIGRvY3VtZW50RnJhZ21lbnQuYXBwZW5kKC4uLmFyZ0FycmF5LmZpbHRlcihub2RlID0+IG5vZGUgIT0gbnVsbCkpXHJcblxyXG4gICAgcmV0dXJuIGRvY3VtZW50RnJhZ21lbnRcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0geyp9IHRhcmdldCBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgXHJcbiAgICogQHBhcmFtIHsqfSByZWNlaXZlciBcclxuICAgKiBAcmV0dXJucyB7Kn1cclxuICAgKi9cclxuICBnZXQ6ICh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikgPT4ge1xyXG4gICAgc3dpdGNoIChwcm9wZXJ0eSkge1xyXG4gICAgICBjYXNlICckJzpcclxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KGZ1bmN0aW9uKCkge30sIHtcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQHBhcmFtIHsqfSB0YXJnZXQgXHJcbiAgICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5uZXJQcm9wZXJ0eSBcclxuICAgICAgICAgICAqIEBwYXJhbSB7Kn0gcmVjZWl2ZXIgXHJcbiAgICAgICAgICAgKiBAcmV0dXJucyB7Kn1cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgZ2V0OiAodGFyZ2V0LCBpbm5lclByb3BlcnR5LCByZWNlaXZlcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydGllcywgc2hhZG93RE9NT3B0aW9ucywgLi4uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChpbm5lclByb3BlcnR5KVxyXG5cclxuICAgICAgICAgICAgICBidWlsZFNoYWRvd0hvc3RFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIHNoYWRvd0RPTU9wdGlvbnMsIC4uLmNoaWxkcmVuKVxyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgIGNhc2UgJyRtYXAnOlxyXG4gICAgICAgIHJldHVybiAkbWFwXHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xyXG4gICAgICBjb25zdCBlbGVtZW50ID0gY3JlYXRlRWxlbWVudChwcm9wZXJ0eSlcclxuXHJcbiAgICAgIGJ1aWxkRWxlbWVudChlbGVtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbilcclxuXHJcbiAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERPTU1ha2VyXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHBhcmFtIHtUIGV4dGVuZHMgSFRNTEVsZW1lbnQgPyBUIDogbmV2ZXJ9IGVsZW1lbnQgXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb25hbERPTVByb3BlcnRpZXN9IFtwcm9wZXJ0aWVzXSBcclxuICogQHBhcmFtICB7Li4uQ29yZU5vZGV9IGNoaWxkcmVuIFxyXG4gKiBAcmV0dXJucyB7VH1cclxuICogXHJcbiAqIEl0J3Mgc2ltaWxhciB0byBgRE9NTWFrZXIucHJvcGVydHkoKWAgYnV0IGluc3RlYWQgb2YgIFxyXG4gKiBjcmVhdGluZyBhbiBlbGVtZW50IGl0IGp1c3QgdGFrZXMgYW4gYGVsZW1lbnRgIGFuZCBhcHBsaWVzICBcclxuICogdGhlIGBwcm9wZXJ0aWVzYCBhbmQgdGhlIGBjaGlsZHJlbmAgdG8gaXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMgPSB7fSwgLi4uY2hpbGRyZW4pIHtcclxuICBjb25zdCB7aWQsIGNsYXNzOiBjbGFzc2VzLCBkYXRhc2V0LCBhdHRyaWJ1dGVzLCBzdHlsZX0gPSBwcm9wZXJ0aWVzID8/IHt9XHJcblxyXG4gIGNvbnN0IHRwID0gd2luZG93LnRydXN0ZWRUeXBlcyA/IHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJycsIHtjcmVhdGVIVE1MOiBlID0+IGUsIGNyZWF0ZVNjcmlwdFVSTDogZSA9PiBlIH0pIDoge2NyZWF0ZUhUTUw6IGUgPT4gZSwgY3JlYXRlU2NyaXB0VVJMOiBlID0+IGUgfVxyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIGVsZW1lbnQuaWQgPSBpZFxyXG4gIH1cclxuXHJcbiAgaWYgKGNsYXNzZXMpIHtcclxuICAgIHNldENsYXNzZXMoZWxlbWVudCwgY2xhc3NlcylcclxuICB9XHJcblxyXG4gIGlmIChkYXRhc2V0KSB7XHJcbiAgICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGFzZXQgPz8ge30pKSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxyXG5cclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBlbGVtZW50LmRhdGFzZXRbcHJvcGVydHldID0gdmFsdWVcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcyA/PyB7fSkpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxyXG5cclxuICAgIGlmIChbJ3NyYycsICdocmVmJ10uaW5jbHVkZXMocHJvcGVydHkpKSB7XHJcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB0cC5jcmVhdGVTY3JpcHRVUkwodmFsdWUpKVxyXG5cclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdmFsdWUpXHJcbiAgfVxyXG4gIFxyXG4gIGlmIChzdHlsZSkge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgc2V0U3R5bGVQcm9wZXJ0aWVzKGVsZW1lbnQuc3R5bGUsIHN0eWxlKVxyXG4gIH1cclxuXHJcbiAgc2V0Q2hpbGRyZW4oZWxlbWVudCwgY2hpbGRyZW4pXHJcblxyXG4gIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0ge1QgZXh0ZW5kcyBIVE1MRWxlbWVudCA/IFQgOiBuZXZlcn0gZWxlbWVudCBcclxuICogQHBhcmFtIHtGdW5jdGlvbmFsRE9NUHJvcGVydGllcz19IHByb3BlcnRpZXMgXHJcbiAqIEBwYXJhbSB7U2hhZG93RE9NT3B0aW9ucz19IHNoYWRvd0RPTU9wdGlvbnNcclxuICogQHBhcmFtICB7Li4uSFRNTEVsZW1lbnR9IGNoaWxkcmVuIFxyXG4gKiBAcmV0dXJucyB7VH1cclxuICogXHJcbiAqIEl0J3Mgc2ltaWxhciB0byBgYnVpbGRFbGVtZW50YCBidXQgaXQgYWxzbyBhY2NlcHRzXHJcbiAqIGFuIGV4dHJhIHBhcmFtZXRlciB0byBjb25maWd1cmUgdGhlIGBTaGFkb3cgRE9NYFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2hhZG93SG9zdEVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcyA9IHt9LCBzaGFkb3dET01PcHRpb25zID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgYnVpbGRFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkcmVuKVxyXG5cclxuICBjb25zdCBzaGFkb3dSb290SW5pdCA9IHttb2RlOiAnb3BlbicsIC4uLnNoYWRvd0RPTU9wdGlvbnMuaW5pdH1cclxuXHJcbiAgaWYgKHNoYWRvd0RPTU9wdGlvbnMubW9kZSkge1xyXG4gICAgc2hhZG93Um9vdEluaXQubW9kZSA9IHNoYWRvd0RPTU9wdGlvbnMubW9kZVxyXG4gIH1cclxuICBcclxuICBjb25zdCBzaGFkb3dSb290ID0gZWxlbWVudC5hdHRhY2hTaGFkb3coc2hhZG93Um9vdEluaXQpXHJcbiAgXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoc2hhZG93RE9NT3B0aW9ucy5hZG9wdGVkU3R5bGVTaGVldHMpKSB7XHJcbiAgICBzaGFkb3dSb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IHNoYWRvd0RPTU9wdGlvbnMuYWRvcHRlZFN0eWxlU2hlZXRzXHJcbiAgfVxyXG4gIFxyXG4gIHNoYWRvd1Jvb3QuYXBwZW5kKC4uLnNoYWRvd0RPTU9wdGlvbnMuY2hpbGRyZW4gPz8gW10pXHJcbiAgXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gVE8gRE9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdGVtcGxhdGUgUlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiAgW2tleSBpbiBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcF06IChwcm9wZXJ0aWVzPzogRnVuY3Rpb25hbERPTVByb3BlcnRpZXMsIC4uLmNoaWxkcmVuOiBUW10pID0+IFIgZXh0ZW5kcyAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnID8gU1ZHRWxlbWVudFRhZ05hbWVNYXBba2V5XSA6IEVsZW1lbnRcclxuICogfX0gTlNNYWtlclByb3h5U1ZHUHJvcGVydGllc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdGVtcGxhdGUgUlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiAgW2tleTogc3RyaW5nXTogKHByb3BlcnRpZXM/OiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgLi4uY2hpbGRyZW46IFRbXSkgPT4gUiBleHRlbmRzICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgPyBTVkdFbGVtZW50IDogVFxyXG4gKiB9fSBOU01ha2VyUHJveHlTdHJpbmdQcm9wZXJ0aWVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0ZW1wbGF0ZSBSXHJcbiAqIEB0eXBlZGVmIHtOU01ha2VyUHJveHlTVkdQcm9wZXJ0aWVzPFQsIFI+ICYgTlNNYWtlclByb3h5U3RyaW5nUHJvcGVydGllczxULCBSPn0gTlNNYWtlclByb3h5UHJvcGVydGllc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7PFQgZXh0ZW5kcyAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHwgc3RyaW5nPihuYW1lc3BhY2U6IFQpID0+IFQgZXh0ZW5kcyAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnID8gTlNNYWtlclByb3h5UHJvcGVydGllczxTVkdFbGVtZW50LCBUPiA6IE5TTWFrZXJQcm94eVByb3BlcnRpZXM8RWxlbWVudCwgVD59IE5TTWFrZXJcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGUge05TTWFrZXJ9XHJcbiAqIFxyXG4gKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm94eSBvYmplY3QgdG8gY3JlYXRlIGVsZW1lbnRzIG9mIGEgc3BlY2lmaWMgbmFtZXNwYWNlLiAgXHJcbiAqIEl0IGlzIHNpbWlsYXIgdG8gYERPTU1ha2VyYCBpbiBiZWhhdmlvciBidXQganVzdCBsaW1pdGVkIHRvIG90aGVyIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBIVE1MLiAgXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBTVkdNYWtlciA9IE5TTWFrZXIoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJylcclxuICogXHJcbiAqIGNvbnN0IHN2ZyA9IFNWR01ha2VyLnN2ZygpXHJcbiAqIGNvbnN0IHJlY3QgPSBTVkdNYWtlci5yZWN0KClcclxuICogXHJcbiAqIGNvbnN0IEN1c3RvbU1ha2VyID0gTlNNYWtlcignbXktbmFtZXNwYWNlJylcclxuICogXHJcbiAqIGNvbnN0IGN1c3RvbUVsZW1lbnQgPSBOU01ha2VyLmN1c3RvbWVsZW1lbnQoKVxyXG4gKiBcclxuICovXHJcbmV4cG9ydCBjb25zdCBOU01ha2VyID0gbmFtZXNwYWNlID0+IHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgcmV0dXJuIG5ldyBQcm94eShmdW5jdGlvbigpIHt9LCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAdGVtcGxhdGUgVFxyXG4gICAgICogQHBhcmFtIHsqfSB0YXJnZXQgXHJcbiAgICAgKiBAcGFyYW0ge1QgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAgPyBUIDogSFRNTEVsZW1lbnR9IHByb3BlcnR5IFxyXG4gICAgICogQHBhcmFtIHsqfSByZWNlaXZlciBcclxuICAgICAqIEByZXR1cm5zIHsocHJvcGVydGllczogRnVuY3Rpb25hbERPTVByb3BlcnRpZXMsIC4uLmNoaWxkcmVuOiBIVE1MRWxlbWVudFtdKSA9PiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF19XHJcbiAgICAgKi9cclxuICAgIGdldDogKHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSA9PiB7XHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnRpZXMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50TlMocHJvcGVydHksIG5hbWVzcGFjZSlcclxuICBcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgYnVpbGRFbGVtZW50TlMoZWxlbWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pXHJcbiAgXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0ge1QgZXh0ZW5kcyBFbGVtZW50ID8gVCA6IG5ldmVyfSBlbGVtZW50IFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uYWxET01Qcm9wZXJ0aWVzPX0gcHJvcGVydGllcyBcclxuICogQHBhcmFtICB7Li4uRWxlbWVudH0gY2hpbGRyZW4gXHJcbiAqIEByZXR1cm5zIHtUfVxyXG4gKiBcclxuICogSXQncyBzaW1pbGFyIHRvIGBET01NYWtlci5wcm9wZXJ0eSgpYCBidXQgaW5zdGVhZCBvZiAgXHJcbiAqIGNyZWF0aW5nIGFuIGVsZW1lbnQgaXQganVzdCB0YWtlcyBhbiBgZWxlbWVudGAgYW5kIGFwcGxpZXMgIFxyXG4gKiB0aGUgYHByb3BlcnRpZXNgIGFuZCB0aGUgYGNoaWxkcmVuYCB0byBpdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVsZW1lbnROUyhlbGVtZW50LCBwcm9wZXJ0aWVzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgY29uc3Qge2lkLCBjbGFzczogY2xhc3NlcywgZGF0YXNldCwgYXR0cmlidXRlcywgc3R5bGV9ID0gcHJvcGVydGllc1xyXG5cclxuICBjb25zdCB0cCA9IHdpbmRvdy50cnVzdGVkVHlwZXMgPyB0cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCcnLCB7Y3JlYXRlSFRNTDogZSA9PiBlLCBjcmVhdGVTY3JpcHRVUkw6IGUgPT4gZX0pIDoge2NyZWF0ZUhUTUw6IGUgPT4gZSwgY3JlYXRlU2NyaXB0VVJMOiBlID0+IGUgfVxyXG5cclxuICBpZiAoaWQpIHtcclxuICAgIGVsZW1lbnQuaWQgPSBpZFxyXG4gIH1cclxuXHJcbiAgaWYgKGNsYXNzZXMpIHtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIHNldENsYXNzZXMoZWxlbWVudCwgY2xhc3NlcylcclxuICB9XHJcbiAgXHJcbiAgaWYgKGRhdGFzZXQpIHtcclxuICAgIGZvciAoY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YXNldCA/PyB7fSkpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlXHJcbiAgICAgIFxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGVsZW1lbnQuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmb3IgKGNvbnN0IFtwcm9wZXJ0eSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMgPz8ge30pKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgY29udGludWVcclxuICAgIFxyXG4gICAgaWYgKFsnc3JjJywgJ2hyZWYnXS5pbmNsdWRlcyhwcm9wZXJ0eSkpIHtcclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHRwLmNyZWF0ZVNjcmlwdFVSTCh2YWx1ZSkpXHJcbiAgICAgIFxyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdmFsdWUpXHJcbiAgfVxyXG4gIFxyXG4gIGlmIChzdHlsZSkge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgc2V0U3R5bGVQcm9wZXJ0aWVzKGVsZW1lbnQuc3R5bGUsIHN0eWxlKVxyXG4gIH1cclxuICBcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgc2V0Q2hpbGRyZW4oZWxlbWVudCwgY2hpbGRyZW4pXHJcblxyXG4gIHJldHVybiBlbGVtZW50XHJcbn1cclxuIiwiXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0ge1QgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAgPyBUIDogc3RyaW5nfSB0YWdOYW1lIFxyXG4gKiBAcmV0dXJucyB7VCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCA/IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtUXSA6IEhUTUxFbGVtZW50fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSkge1xyXG4gIC8qKlxyXG4gICAqIEB0eXBlIHthbnl9XHJcbiAgICovXHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSlcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nfSBUXHJcbiAqIEB0ZW1wbGF0ZSB7c3RyaW5nIHwgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ30gUlxyXG4gKiBAcGFyYW0ge1QgZXh0ZW5kcyBrZXlvZiBTVkdFbGVtZW50VGFnTmFtZU1hcCA/IFQgOiBzdHJpbmd9IHRhZ05hbWUgXHJcbiAqIEBwYXJhbSB7Un0gbmFtZXNwYWNlXHJcbiAqIEByZXR1cm5zIHtuYW1lc3BhY2UgZXh0ZW5kcyAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnID8gVCBleHRlbmRzIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwID8gU1ZHRWxlbWVudFRhZ05hbWVNYXBbVF0gOiBTVkdFbGVtZW50IDogRWxlbWVudH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50TlModGFnTmFtZSwgbmFtZXNwYWNlKSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge2FueX1cclxuICAgKi9cclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgdGFnTmFtZSlcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxyXG4gKiBAcGFyYW0ge3N0cmluZyB8IHN0cmluZ1tdfSBjbGFzc2VzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENsYXNzZXMoZWxlbWVudCwgY2xhc3Nlcykge1xyXG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzZXMpKSB7XHJcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpXHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgY2xhc3NlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3Nlc1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxyXG4gKiBAcGFyYW0ge2ltcG9ydChcIi4vY29yZS5qc1wiKS5DaGlsZHJlbn0gY2hpbGRyZW4gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2hpbGRyZW4oZWxlbWVudCwgY2hpbGRyZW4pIHtcclxuICAvLyBAdHMtaWdub3JlXHJcbiAgZWxlbWVudC5hcHBlbmQoLi4uY2hpbGRyZW4uZmxhdChJbmZpbml0eSkpXHJcbn1cclxuXHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAqL1xyXG5jb25zdCBsb3dlckNhc2VUb0h5cGhlbiA9IHN0cmluZyA9PiBzdHJpbmcuc3BsaXQoLyg/PVtBLVpdKS8pLm1hcChzdHIgPT4gc3RyLnRvTG93ZXJDYXNlKCkpLmpvaW4oJy0nKVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7Q1NTU3R5bGVEZWNsYXJhdGlvbn0gc3R5bGVcclxuICogQHBhcmFtIHt7W2tleTogc3RyaW5nXTogc3RyaW5nfX0gcHJvcGVydGllc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlUHJvcGVydGllcyhzdHlsZSwgcHJvcGVydGllcykge1xyXG4gIGZvciAoY29uc3QgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xyXG5cclxuICAgIGxldCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eVxyXG5cclxuICAgIGNvbnN0IGlzQ3VzdG9tUHJvcGVydHkgPSBwcm9wZXJ0eU5hbWUuc3RhcnRzV2l0aCgnLS0nKVxyXG4gICAgY29uc3QgaGFzSHlwaGVuID0gcHJvcGVydHlOYW1lLmluY2x1ZGVzKCctJylcclxuICAgIGlmKCFpc0N1c3RvbVByb3BlcnR5ICYmICFoYXNIeXBoZW4pIHtcclxuICAgICAgcHJvcGVydHlOYW1lID0gbG93ZXJDYXNlVG9IeXBoZW4ocHJvcGVydHlOYW1lKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByZWZpeFZlbmRvcnMgPSBwcm9wZXJ0eU5hbWUuc2VhcmNoKC9eKHdlYmtpdHxtb3p8bXN8byktLykgIT09IC0xXHJcbiAgICBpZihwcmVmaXhWZW5kb3JzKSB7XHJcbiAgICAgIHByb3BlcnR5TmFtZSA9IGAtJHtwcm9wZXJ0eU5hbWV9YFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByaW9yaXR5ID0gcHJvcGVydGllc1twcm9wZXJ0eV0ubWF0Y2goLyFbYS16XSskL2lnKT8uWzBdLnNsaWNlKDEpID8/ICcnXHJcbiAgICBjb25zdCBwcm9wZXJ0eVZhbHVlID0gcHJpb3JpdHkgPyBwcm9wZXJ0aWVzW3Byb3BlcnR5XS5yZXBsYWNlKG5ldyBSZWdFeHAoYCEke3ByaW9yaXR5fSRgLCAnaScpLCAnJykgOiBwcm9wZXJ0aWVzW3Byb3BlcnR5XVxyXG5cclxuICAgIHN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgcHJvcGVydHlWYWx1ZSwgcHJpb3JpdHkpXHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gJG1hcChsZW5ndGgsIGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgY29sbGVjdGlvbiA9IG5ldyBBcnJheShsZW5ndGgpXHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbGxlY3Rpb25baV0gPSBjYWxsYmFjayhpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbGxlY3Rpb25cclxufVxyXG4iLCIvLyBAdHMtbm9jaGVja1xyXG5cclxuY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9ucyA9PiB7XHJcbiAgbXV0YXRpb25zLmZvckVhY2gobXV0YXRpb24gPT4ge1xyXG4gICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xyXG4gICAgICBjb25zdCB0YXJnZXQgPSBtdXRhdGlvbi50YXJnZXRcclxuXHJcbiAgICAgIGNvbnN0IG5hbWUgPSBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lXHJcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gbXV0YXRpb24ub2xkVmFsdWVcclxuICAgICAgY29uc3QgbmV3VmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKG5hbWUpXHJcblxyXG4gICAgICB0YXJnZXQ/LmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpXHJcbiAgICB9XHJcbiAgfSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSBlbGVtZW50cyB0aHJvdWdoIGFueSBgSFRNTEVsZW1lbnRgIGxpa2UgYSBgPGRpdj5gLiAgXHJcbiAqIFRoZSBjbGFzcyBwcm92aWRlZCBpcyBpbnZva2VkIGluIHRoZSBgZWxlbWVudGAgYW5kIHRoZW4gaXRzIGBwcm90b3R5cGVgIGlzIGNoYW5nZWQgIFxyXG4gKiB3aXRoIHRoZSBwcm90b3R5cGUgb2YgdGhlIGBjbGFzc2AuICBcclxuICogXHJcbiAqIFRvIGRlY2xhcmUgdGhlIGBjb25zdHJ1Y3RvcmAgb2YgdGhlIGNsYXNzIGl0IG11c3QgYmUgZGVjbGFyZWQgYXMgYF9jb25zdHJ1Y3Rvcl9gICBcclxuICogaW5zdGVhZCBvZiB0aGUgbm9ybWFsIGNvbnN0cnVjdG9yIHRvIGFsbG93IHRoZSBmdW5jdGlvbiB0byBpbnZva2UgaXQgaW4gdGhlIGBlbGVtZW50YC4gIFxyXG4gKiBcclxuICogU2luY2UgdGhlIGBlbGVtZW50YCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBpcyBub3QgcG9zaWJsZSB0byB1c2UgYHByaXZhdGUgcHJvcGVydGllc2AuICBcclxuICogRm9yIHRoYXQgcmVhc29uLCBpcyByZWNvbW1lbmRlZCB0byByZXBsYWNlIHRoZW0gd2l0aCBwcm9wZXJ0aWVzIHRoYXQgc3RhcnRzIHdpdGggYW4gdW5kZXJzY29yZS4gIFxyXG4gKiBcclxuICogQHRlbXBsYXRlIFRcclxuICogQHBhcmFtIHtUIGV4dGVuZHMgdHlwZW9mIEhUTUxFbGVtZW50ID8gVCA6IG5ldmVyfSBjbGFzc0NvbXBvbmVudCBcclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2VsZW1lbnRUb0FwcGx5PW51bGxdXHJcbiAqIEByZXR1cm5zIHtJbnN0YW5jZVR5cGU8VD59XHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBjb21wb25lbnQgPSBjcmVhdGVXZWJDb21wb25lbnQoY2xhc3MgTXlDb21wb25lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAqICAgX2NvbnN0cnVjdG9yXygpIHtcclxuICogICAgIHRoaXMucHJvcGVydHkgPSAndmFsdWUnXHJcbiAqXHJcbiAqICAgICBjb25zb2xlLmxvZyh0aGlzLl9wcml2YXRlVmFsdWUpXHJcbiAqICAgfVxyXG4gKlxyXG4gKiAgIGdldCBpbm5lckhUTUwoKSB7XHJcbiAqICAgICByZXR1cm4gc3VwZXIuaW5uZXJIVE1MXHJcbiAqICAgfVxyXG4gKlxyXG4gKiAgIHNldCBpbm5lckhUTUwodmFsdWUpIHtcclxuICogICAgIHN1cGVyLmlubmVySFRNTCA9IHZhbHVlXHJcbiAqICAgfVxyXG4gKlxyXG4gKiAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xyXG4gKiAgICAgcmV0dXJuIFsnbXktYXR0cmlidXRlJ11cclxuICogICB9XHJcbiAqXHJcbiAqICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xyXG4gKiAgICAgY29uc29sZS5sb2coLi4uYXJndW1lbnRzKVxyXG4gKiAgIH1cclxuICogfSlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXZWJDb21wb25lbnQoY2xhc3NDb21wb25lbnQsIGVsZW1lbnRUb0FwcGx5ID0gbnVsbCkge1xyXG4gIGlmICghKGNsYXNzQ29tcG9uZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgY2xhc3MgY29tcG9uZW50IG11c3QgZXh0ZW5kcyBIVE1MRWxlbWVudGApXHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21wb25lbnQgPSBlbGVtZW50VG9BcHBseSA/PyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICBpZiAoY2xhc3NDb21wb25lbnQub2JzZXJ2ZWRBdHRyaWJ1dGVzKSB7XHJcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoY29tcG9uZW50LCB7XHJcbiAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgIGF0dHJpYnV0ZUZpbHRlcjogY2xhc3NDb21wb25lbnQub2JzZXJ2ZWRBdHRyaWJ1dGVzLFxyXG4gICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihjb21wb25lbnQsIGNsYXNzQ29tcG9uZW50LnByb3RvdHlwZSlcclxuICBjbGFzc0NvbXBvbmVudC5wcm90b3R5cGUuX2NvbnN0cnVjdG9yXz8uY2FsbChjb21wb25lbnQpXHJcblxyXG4gIHJldHVybiBjb21wb25lbnRcclxufVxyXG4iLCJpbXBvcnQgXywgeyBidWlsZEVsZW1lbnQgYXMgJH0gZnJvbSAnLi4vZnVuY3Rpb25hbC1kb20vaW5kZXguanMnXHJcbmltcG9ydCBzdHlsZXNoZWV0IGZyb20gJy4vbWFpbi5jc3MnXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHR5cGVkZWYgQ29vbEJvcmRlck9wdGlvbnNEZWZcclxuICogQHByb3BlcnR5IHtUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwID8gVCA6IHN0cmluZ30gW3RhZ05hbWU9XCJkaXZcIl1cclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHR5cGVkZWYge0Nvb2xCb3JkZXJPcHRpb25zRGVmPFQ+ICYgaW1wb3J0KCcuLi9mdW5jdGlvbmFsLWRvbS9saWJzL2NvcmUuanMnKS5GdW5jdGlvbmFsRE9NUHJvcGVydGllc30gQ29vbEJvcmRlck9wdGlvbnNcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHBhcmFtIHtDb29sQm9yZGVyT3B0aW9uczxUPn0gb3B0aW9uc1xyXG4gKiBAcGFyYW0gIHsuLi5IVE1MRWxlbWVudH0gY2hpbGRyZW4gXHJcbiAqIEByZXR1cm5zIHtUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwID8gSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdIDogSFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gQ29vbEJvcmRlcihvcHRpb25zLCAuLi5jaGlsZHJlbikge1xyXG4gIGNvbnN0IHt0YWdOYW1lID0gJ2Rpdid9ID0gb3B0aW9ucyA/PyB7fVxyXG5cclxuICBjb25zdCBzaGFkb3dSb290Q29udGVudCA9IF8uZGl2KHtjbGFzczogJ3dyYXBwZXItYm9yZGVyLWVmZmVjdCBfZ3JpZC1vdmVybGF5Xyd9LCBcclxuICAgIF8uZGl2KHtjbGFzczogJ215LWNvbnRlbnQnfSxcclxuICAgICAgXy5zbG90KCksXHJcbiAgICApLFxyXG4gICAgXy5kaXYoe2NsYXNzOiAnYm9yZGVyLWVmZmVjdCd9LFxyXG4gICAgICBfLmRpdih7Y2xhc3M6ICdib3JkZXInfSksXHJcbiAgICAgIF8uZGl2KHtjbGFzczogJ2JvcmRlcid9KSxcclxuICAgICAgXy5kaXYoe2NsYXNzOiAnYm9yZGVyJ30pLFxyXG4gICAgICBfLmRpdih7Y2xhc3M6ICdib3JkZXInfSksXHJcbiAgICApXHJcbiAgKVxyXG5cclxuICBjb25zdCB3cmFwcGVyID0gXy4kW3RhZ05hbWVdKG51bGwsIHtcclxuICAgIGFkb3B0ZWRTdHlsZVNoZWV0czogW3N0eWxlc2hlZXRdLFxyXG4gICAgY2hpbGRyZW46IFtzaGFkb3dSb290Q29udGVudF1cclxuICB9KVxyXG5cclxuICByZXR1cm4gJCh3cmFwcGVyLCBvcHRpb25zLCAuLi5jaGlsZHJlbilcclxufVxyXG4iLCJcbiAgY29uc3QgY3NzID0gXCI6aG9zdCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qOm5vdCg6aG9zdCksXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5teS1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVdGlsaXR5IENsYXNzZXMgU3RhcnQgKi9cXHJcXG5cXHJcXG4uX2dyaWQtb3ZlcmxheV8ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnb3ZlcmxheSc7XFxyXFxufVxcclxcblxcclxcbi5fZ3JpZC1vdmVybGF5XyA+ICoge1xcclxcbiAgZ3JpZC1hcmVhOiBvdmVybGF5O1xcclxcbiAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVXRpbGl0eSBDbGFzc2VzIEVuZCAqL1xcclxcblxcclxcblxcclxcbi8qIEJvcmRlciBFZmZlY3QgKi9cXHJcXG5cXHJcXG46aG9zdCB7XFxyXFxuICAtLWJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgLS1ob3Jpem9udGFsLWxlbmd0aDogMTAwcHg7XFxyXFxuICAtLXZlcnRpY2FsLWxlbmd0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyLWJvcmRlci1lZmZlY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyLWJvcmRlci1lZmZlY3QgPiA6Zmlyc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItd2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5ib3JkZXItZWZmZWN0IHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgLS1ob3Jpem9udGFsLWFuZ2xlOiA5MGRlZztcXHJcXG4gIC0taG9yaXpvbnRhbC1yZXZlcnNlZC1hbmdsZTogMjcwZGVnO1xcclxcblxcclxcbiAgLS12ZXJ0aWNhbC1hbmdsZTogMTgwZGVnO1xcclxcbiAgLS12ZXJ0aWNhbC1yZXZlcnNlZC1hbmdsZTogMGRlZztcXHJcXG4gIFxcclxcbiAgLS12ZXJ0aWNhbC1jbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgMTAwJSAwLFxcclxcbiAgICA1MCUgY2FsYyh2YXIoLS12ZXJ0aWNhbC1sZW5ndGgpICogMilcXHJcXG4gICk7XFxyXFxuICBcXHJcXG4gIC0tdmVydGljYWwtY2xpcC1wYXRoLXJldmVyc2VkOiBwb2x5Z29uKFxcclxcbiAgICA1MCUgY2FsYygxMDAlIC0gdmFyKC0tdmVydGljYWwtbGVuZ3RoKSAqIDIpLFxcclxcbiAgICAxMDAlIDEwMCUsXFxyXFxuICAgIDAlIDEwMCVcXHJcXG4gICk7XFxyXFxuICBcXHJcXG4gIC0taG9yaXpvbnRhbC1jbGlwLXBhdGg6IHBvbHlnb24oXFxyXFxuICAgIDAgMCxcXHJcXG4gICAgMCAxMDAlLFxcclxcbiAgICBjYWxjKHZhcigtLWhvcml6b250YWwtbGVuZ3RoKSAqIDIpIDUwJVxcclxcbiAgKTtcXHJcXG4gIFxcclxcbiAgLS1ob3Jpem9udGFsLWNsaXAtcGF0aC1yZXZlcnNlZDogcG9seWdvbihcXHJcXG4gICAgY2FsYygxMDAlIC0gdmFyKC0taG9yaXpvbnRhbC1sZW5ndGgpICogMikgNTAlLFxcclxcbiAgICAxMDAlIDAsXFxyXFxuICAgIDEwMCUgMTAwJVxcclxcbiAgKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvcmRlci1lZmZlY3QgPiAuYm9yZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9yaXpvbnRhbCBUb3AgKi9cXHJcXG4uYm9yZGVyLWVmZmVjdCA+IC5ib3JkZXI6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogdmFyKC0tYm9yZGVyLXdpZHRoKTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdmFyKC0taG9yaXpvbnRhbC1hbmdsZSksXFxyXFxuICAgICNmZmY5LFxcclxcbiAgICB0cmFuc3BhcmVudCB2YXIoLS1ob3Jpem9udGFsLWxlbmd0aClcXHJcXG4gICk7XFxyXFxuXFxyXFxuICBjbGlwLXBhdGg6IHZhcigtLWhvcml6b250YWwtY2xpcC1wYXRoKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVmVydGljYWwgTGVmdCAqL1xcclxcbi5ib3JkZXItZWZmZWN0ID4gLmJvcmRlcjpudGgtY2hpbGQoMikge1xcclxcbiAgdG9wOiB2YXIoLS1ib3JkZXItd2lkdGgpO1xcclxcbiAgbGVmdDogMDtcXHJcXG5cXHJcXG4gIHdpZHRoOiB2YXIoLS1ib3JkZXItd2lkdGgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1ib3JkZXItd2lkdGgpKTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdmFyKC0tdmVydGljYWwtYW5nbGUpLFxcclxcbiAgICAjZmZmOSxcXHJcXG4gICAgdHJhbnNwYXJlbnQgY2FsYyh2YXIoLS12ZXJ0aWNhbC1sZW5ndGgpIC0gMnB4KVxcclxcbiAgKTtcXHJcXG5cXHJcXG4gIGNsaXAtcGF0aDogdmFyKC0tdmVydGljYWwtY2xpcC1wYXRoKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9yaXpvbnRhbCBCb3R0b20gKi9cXHJcXG4uYm9yZGVyLWVmZmVjdCA+IC5ib3JkZXI6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcblxcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IHZhcigtLWJvcmRlci13aWR0aCk7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgIHZhcigtLWhvcml6b250YWwtcmV2ZXJzZWQtYW5nbGUpLFxcclxcbiAgICAjZmZmOSxcXHJcXG4gICAgdHJhbnNwYXJlbnQgdmFyKC0taG9yaXpvbnRhbC1sZW5ndGgpXFxyXFxuICApO1xcclxcblxcclxcbiAgY2xpcC1wYXRoOiB2YXIoLS1ob3Jpem9udGFsLWNsaXAtcGF0aC1yZXZlcnNlZCk7XFxyXFxufVxcclxcblxcclxcbi8qIFZlcnRpY2FsIFJpZ2h0ICovXFxyXFxuLmJvcmRlci1lZmZlY3QgPiAuYm9yZGVyOm50aC1jaGlsZCg0KSB7XFxyXFxuICBib3R0b206IHZhcigtLWJvcmRlci13aWR0aCk7XFxyXFxuICByaWdodDogMDtcXHJcXG5cXHJcXG4gIHdpZHRoOiB2YXIoLS1ib3JkZXItd2lkdGgpO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSB2YXIoLS1ib3JkZXItd2lkdGgpKTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdmFyKC0tdmVydGljYWwtcmV2ZXJzZWQtYW5nbGUpLFxcclxcbiAgICAjZmZmOSxcXHJcXG4gICAgdHJhbnNwYXJlbnQgY2FsYyh2YXIoLS12ZXJ0aWNhbC1sZW5ndGgpIC0gMnB4KVxcclxcbiAgKTtcXHJcXG5cXHJcXG4gIGNsaXAtcGF0aDogdmFyKC0tdmVydGljYWwtY2xpcC1wYXRoLXJldmVyc2VkKTtcXHJcXG59XFxyXFxuXCJcblxuICBjb25zdCBzdHlsZXNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKVxuICBzdHlsZXNoZWV0LnJlcGxhY2VTeW5jKGNzcylcblxuICBleHBvcnQgZGVmYXVsdCBzdHlsZXNoZWV0XG4gICIsImltcG9ydCBfLCB7IGJ1aWxkRWxlbWVudCBhcyAkLCBidWlsZFNoYWRvd0hvc3RFbGVtZW50IGFzICQkIH0gZnJvbSAnLi4vZnVuY3Rpb25hbC1kb20vaW5kZXguanMnXHJcbmltcG9ydCBtYWluU3R5bGVTaGVldCBmcm9tICcuL21haW4uY3NzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEN1c3RvbUJ1dHRvbihvcHRpb25zLCAuLi5jaGlsZHJlbikge1xyXG4gIGNvbnN0IGVmZmVjdCA9IF8uZGl2KClcclxuXHJcbiAgY29uc3QgaG9zdCA9IF9bJ2N1c3RvbS1idXR0b24nXSgpXHJcbiAgaG9zdC5yb2xlID0gJ2J1dHRvbidcclxuXHJcbiAgbGV0IGlzRW5kID0gZmFsc2VcclxuXHJcbiAgbGV0IGlzUHJlc3NlZCA9IGZhbHNlXHJcblxyXG4gIC8vIGhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIGV2ZW50ID0+IHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGV2ZW50KVxyXG4gIC8vICAgaXNFbmQgPSBmYWxzZVxyXG4gIC8vICAgaXNQcmVzc2VkID0gdHJ1ZVxyXG5cclxuICAvLyAgIGVmZmVjdC5jbGFzc0xpc3QucmVtb3ZlKCdncm93JylcclxuICAvLyAgIGVmZmVjdC5jbGFzc0xpc3QucmVtb3ZlKCdncm93LXJldmVyc2VkJylcclxuICAvLyB9KVxyXG5cclxuICBob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgZXZlbnQgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmJ1dHRvbiAhPT0gMCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpc0VuZCA9IGZhbHNlXHJcbiAgICBpc1ByZXNzZWQgPSB0cnVlXHJcblxyXG4gICAgZWZmZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3cnKVxyXG4gICAgZWZmZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3ctcmV2ZXJzZWQnKVxyXG5cclxuICAgIC8vIFRyaWdnZXIgbGF5b3V0IHRvIGNvbXB1dGUgc3R5bGVzXHJcbiAgICBlZmZlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICBlZmZlY3QuY2xhc3NMaXN0LmFkZCgnZ3JvdycpXHJcblxyXG4gICAgZWZmZWN0LnN0eWxlLnNldFByb3BlcnR5KCctLXknLCBgJHtldmVudC5vZmZzZXRZfXB4YClcclxuICAgIGVmZmVjdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS14JywgYCR7ZXZlbnQub2Zmc2V0WH1weGApXHJcblxyXG4gICAgY29uc3QgbWF4U2l6ZSA9IE1hdGgubWF4KGhvc3Qub2Zmc2V0V2lkdGgsIGhvc3Qub2Zmc2V0SGVpZ2h0KVxyXG5cclxuICAgIGVmZmVjdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1zaXplJywgYCR7bWF4U2l6ZX1weGApXHJcblxyXG4gICAgY29uc3QgcG9pbnRlclVwTGlzdGVuZXIgPSBldmVudCA9PiB7XHJcbiAgICAgIGlzUHJlc3NlZCA9IGZhbHNlXHJcblxyXG4gICAgICBpZiAoaXNFbmQpIHtcclxuICAgICAgICBlZmZlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZ3JvdycpXHJcbiAgICAgICAgZWZmZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgZWZmZWN0LmNsYXNzTGlzdC5hZGQoJ2dyb3ctcmV2ZXJzZWQnKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVmZmVjdC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICBpZiAoaXNQcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGVmZmVjdC5jbGFzc0xpc3QucmVtb3ZlKCdncm93JylcclxuICAgICAgICAgIGVmZmVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgZWZmZWN0LmNsYXNzTGlzdC5hZGQoJ2dyb3ctcmV2ZXJzZWQnKVxyXG4gICAgICAgIH0sIHtvbmNlOiB0cnVlfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5wb2ludGVyVHlwZSA9PT0gJ3RvdWNoJykge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBwb2ludGVyVXBMaXN0ZW5lciwge2NhcHR1cmU6IHRydWUsIG9uY2U6IHRydWV9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHBvaW50ZXJVcExpc3RlbmVyLCB7Y2FwdHVyZTogdHJ1ZSwgb25jZTogdHJ1ZX0pXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgZWZmZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGV2ZW50ID0+IHtcclxuICAgIGlzRW5kID0gdHJ1ZVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAkJChob3N0LCBvcHRpb25zLFxyXG4gICAge1xyXG4gICAgICBhZG9wdGVkU3R5bGVTaGVldHM6IFttYWluU3R5bGVTaGVldF0sXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIF8uc2xvdCgpLFxyXG4gICAgICBfLmRpdih7Y2xhc3M6ICdlZmZlY3Qtd3JhcHBlcid9LFxyXG4gICAgICAgICQoZWZmZWN0LCB7Y2xhc3M6ICdyaXBwbGUtZWZmZWN0JywgYXR0cmlidXRlczoge3BhcnQ6ICdyaXBwbGUtZWZmZWN0J319KSxcclxuICAgICAgKVxyXG4gICAgXVxyXG4gICAgfSxcclxuICAgIC4uLmNoaWxkcmVuXHJcbiAgKVxyXG59XHJcbiIsIlxuICBjb25zdCBjc3MgPSBcIjpob3N0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZmO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG46aG9zdCB7XFxyXFxuICAtLXJpcHBsZS1jb2xvcjogIzAwMDc7XFxyXFxufVxcclxcblxcclxcbi5lZmZlY3Qtd3JhcHBlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpbnNldDogMDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG5cXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnJpcHBsZS1lZmZlY3Qge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG5cXHJcXG4gIHdpZHRoOiB2YXIoLS1zaXplKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IHZhcigtLXkpO1xcclxcbiAgbGVmdDogdmFyKC0teCk7XFxyXFxuXFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG5cXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJpcHBsZS1jb2xvcik7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmdyb3cge1xcclxcbiAgYW5pbWF0aW9uOiBncm93IDAuMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi5ncm93LXJldmVyc2VkIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjUpO1xcclxcblxcclxcbiAgYW5pbWF0aW9uOiBncm93IDAuMnMgZWFzZS1vdXQgcmV2ZXJzZSBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBncm93IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS41KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJcblxuICBjb25zdCBzdHlsZXNoZWV0ID0gbmV3IENTU1N0eWxlU2hlZXQoKVxuICBzdHlsZXNoZWV0LnJlcGxhY2VTeW5jKGNzcylcblxuICBleHBvcnQgZGVmYXVsdCBzdHlsZXNoZWV0XG4gICIsImltcG9ydCBfIGZyb20gXCIuLi8uLi9pbmRleC5qc1wiO1xyXG5pbXBvcnQgeyBzb3J0V2lsZENhcmRSb3V0ZVRvRW5kIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiBOYXZpZ2F0ZVJvdXRlXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBwYXRoXHJcbiAqIEBwcm9wZXJ0eSB7KCkgPT4gaW1wb3J0KFwiLi4vLi4vbGlicy9jb3JlLmpzXCIpLkNvcmVOb2RlfSBjb21wb25lbnRcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgRE9NTmF2aWdhdGVPYmplY3RcclxuICogQHByb3BlcnR5IHtIVE1MRWxlbWVudH0gY29tcG9uZW50XHJcbiAqIEBwcm9wZXJ0eSB7KHBhdGhuYW1lOiBzdHJpbmcpID0+IHZvaWR9IHVwZGF0ZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtOYXZpZ2F0ZVJvdXRlW119IG5hdmlnYXRlUm91dGVzIFxyXG4gKiBAcmV0dXJucyB7RE9NTmF2aWdhdGVPYmplY3R9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBET01OYXZpZ2F0ZShuYXZpZ2F0ZVJvdXRlcykge1xyXG4gIGNvbnN0IGNvbXBvbmVudCA9IF9bJ2RvbS1uYXZpZ2F0ZSddKClcclxuXHJcbiAgbmF2aWdhdGVSb3V0ZXMgPSBzb3J0V2lsZENhcmRSb3V0ZVRvRW5kKG5hdmlnYXRlUm91dGVzKSAgXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBjb21wb25lbnQsXHJcblxyXG4gICAgdXBkYXRlKHBhdGhuYW1lKSB7XHJcbiAgICAgIGxldCByZW5kZXJDb21wb25lbnQgPSBudWxsXHJcblxyXG4gICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIG5hdmlnYXRlUm91dGVzKSB7XHJcbiAgICAgICAgaWYgKHJvdXRlLnBhdGggPT09IHBhdGhuYW1lKSB7XHJcbiAgICAgICAgICByZW5kZXJDb21wb25lbnQgPSByb3V0ZS5jb21wb25lbnRcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocm91dGUucGF0aCA9PT0gJyonKSB7XHJcbiAgICAgICAgICByZW5kZXJDb21wb25lbnQgPSByb3V0ZS5jb21wb25lbnRcclxuICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb21wb25lbnQucmVwbGFjZUNoaWxkcmVuKClcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgcmVuZGVyQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgY29tcG9uZW50LmFwcGVuZChyZW5kZXJDb21wb25lbnQoKSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwYXRjaEN1c3RvbU5hdmlnYXRlKCkge1xyXG4gIGNvbnN0IGluaXQgPSB7ZGV0YWlsOiB7cGF0aDogbG9jYXRpb24ucGF0aG5hbWV9fVxyXG5cclxuICBjb25zdCBjdXN0b21OYXZpZ2F0ZSA9IG5ldyBDdXN0b21FdmVudCgnY3VzdG9tLW5hdmlnYXRlJywgaW5pdClcclxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjdXN0b21OYXZpZ2F0ZSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGF0Y2hDdXN0b21IYXNoQ2hhbmdlKCkge1xyXG4gIGNvbnN0IGluaXQgPSB7ZGV0YWlsOiB7aGFzaDogbG9jYXRpb24uaGFzaH19XHJcblxyXG4gIGNvbnN0IGN1c3RvbUhhc2hDaGFuZ2UgPSBuZXcgQ3VzdG9tRXZlbnQoJ2N1c3RvbS1oYXNoLWNoYW5nZScsIGluaXQpXHJcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQoY3VzdG9tSGFzaENoYW5nZSlcclxufVxyXG5cclxuXHJcbi8vIEZpcmUgYGN1c3RvbS1uYXZpZ2F0ZWAgZXZlbnQgb24gYERPTUNvbnRlbnRMb2FkZWRgXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZXZlbnQgPT4ge1xyXG4gIGRpc3BhdGNoQ3VzdG9tTmF2aWdhdGUoKVxyXG4gIGRpc3BhdGNoQ3VzdG9tSGFzaENoYW5nZSgpXHJcbn0sIHtvbmNlOiB0cnVlfSlcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBldmVudCA9PiB7XHJcbiAgZGlzcGF0Y2hDdXN0b21OYXZpZ2F0ZSgpXHJcbn0pXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGV2ZW50ID0+IHtcclxuICBkaXNwYXRjaEN1c3RvbUhhc2hDaGFuZ2UoKVxyXG59KVxyXG5cclxuXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge3tcclxuICogICdjdXN0b20tbmF2aWdhdGUnOiBDdXN0b21OYXZpZ2F0ZURldGFpbCxcclxuICogICdjdXN0b20taGFzaC1jaGFuZ2UnOiBDdXN0b21IYXNoQ2hhbmdlRGV0YWlsXHJcbiAqIH19IE5hdmlnYXRlRXZlbnRzTWFwXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtrZXlvZiBOYXZpZ2F0ZUV2ZW50c01hcH0gTmF2aWdhdGVFdmVudHNcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgQ3VzdG9tTmF2aWdhdGVEZXRhaWxcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHBhdGggVGhpcyBpcyB0aGUgc2FtZSBhcyB1c2luZyBgd2luZG93LmxvY2F0aW9uLnBhdGhgXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIEN1c3RvbUhhc2hDaGFuZ2VEZXRhaWxcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGhhc2ggVGhpcyBpcyB0aGUgc2FtZSBhcyB1c2luZyBgd2luZG93LmxvY2F0aW9uLmhhc2hgXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSB7TmF2aWdhdGVFdmVudHN9IFRcclxuICogQHR5cGVkZWYgeyhldmVudDogQ3VzdG9tRXZlbnQ8TmF2aWdhdGVFdmVudHNNYXBbVF0+KSA9PiB2b2lkfSBDYWxsYmFja0xpc3RlbmVyXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSB7XHJcblxyXG4gIGdldCBzdGF0ZSgpIHtcclxuICAgIHJldHVybiBoaXN0b3J5LnN0YXRlXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBcclxuICAgKiBAcGFyYW0ge0hpc3RvcnlbJ3N0YXRlJ119IFtzdGF0ZT1udWxsXSBcclxuICAgKi9cclxuICByZXBsYWNlKHVybCwgc3RhdGUgPSBudWxsKSB7XHJcbiAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZSwgJycsIHVybClcclxuXHJcbiAgICBkaXNwYXRjaEN1c3RvbU5hdmlnYXRlKClcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFxyXG4gICAqIEBwYXJhbSB7SGlzdG9yeVsnc3RhdGUnXX0gW3N0YXRlPW51bGxdIFxyXG4gICAqL1xyXG4gIHB1c2godXJsLCBzdGF0ZSA9IG51bGwpIHtcclxuICAgIGhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCAnJywgdXJsKVxyXG5cclxuICAgIGRpc3BhdGNoQ3VzdG9tTmF2aWdhdGUoKVxyXG4gIH0sXHJcblxyXG4gIGZvcndhcmQoKSB7XHJcbiAgICBoaXN0b3J5LmZvcndhcmQoKVxyXG4gIH0sXHJcblxyXG4gIGJhY2soKSB7XHJcbiAgICBoaXN0b3J5LmJhY2soKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBcclxuICAgKi9cclxuICBoYXNoKHZhbHVlKSB7XHJcbiAgICBsb2NhdGlvbi5oYXNoID0gdmFsdWVcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBAdGVtcGxhdGUge05hdmlnYXRlRXZlbnRzfSBUXHJcbiAgICogQHBhcmFtIHtUfSBldmVudFR5cGUgXHJcbiAgICogQHBhcmFtIHtDYWxsYmFja0xpc3RlbmVyPFQ+fSBjYWxsYmFja0xpc3RlbmVyIFxyXG4gICAqL1xyXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBjYWxsYmFja0xpc3RlbmVyKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrTGlzdGVuZXIpXHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKipcclxuICogXHJcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9pbmRleC5qc1wiKS5OYXZpZ2F0ZVJvdXRlW119IHJvdXRlcyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzb3J0V2lsZENhcmRSb3V0ZVRvRW5kKHJvdXRlcykge1xyXG4gIGNvbnN0IHNvcnRlZFJvdXRlcyA9IFsuLi5yb3V0ZXNdLnNvcnQoKGEsIGIpID0+IGEucGF0aCA9PT0gJyonID8gMSA6IGIucGF0aCA9PT0gJyonID8gLTEgOiAwKVxyXG4gIHJldHVybiBzb3J0ZWRSb3V0ZXNcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBtYWluU3R5bGVTaGVldCBmcm9tICcuL3N0eWxlcy9tYWluLmNzcydcclxuaW1wb3J0IF8sIHtidWlsZEVsZW1lbnQgYXMgJCwgYnVpbGRTaGFkb3dIb3N0RWxlbWVudCBhcyAkJH0gZnJvbSAnLi9mdW5jdGlvbmFsLWRvbS9pbmRleC5qcydcclxuaW1wb3J0IHsgQ29vbEJvcmRlciB9IGZyb20gJy4vQ29vbEJvcmRlci9pbmRleC5qcydcclxuaW1wb3J0IHsgQ3VzdG9tQnV0dG9uIH0gZnJvbSAnLi9DdXN0b21CdXR0b24vaW5kZXguanMnXHJcbmltcG9ydCBET01OYXZpZ2F0ZSwgeyBuYXZpZ2F0aW9uIH0gZnJvbSAnLi9mdW5jdGlvbmFsLWRvbS9jb21wb25lbnRzL2RvbS1uYXZpZ2F0ZS9pbmRleC5qcydcclxuXHJcbmRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyA9IFttYWluU3R5bGVTaGVldF1cclxuXHJcbmNvbnN0IHJvdXRlcyA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnKicsXHJcbiAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIE5vdEZvdW5kKCkge1xyXG4gICAgICBjb25zdCBzdHlsZSA9IHt3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnIzkwMCcsIGRpc3BsYXk6ICdncmlkJywgcGxhY2VJdGVtczogJ2NlbnRlcid9XHJcbiAgICAgIHJldHVybiBfLmRpdih7c3R5bGV9LCAnTk9UIEZPVU5EJylcclxuICAgIH1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGNvbXBvbmVudDogZnVuY3Rpb24gUm9vdCgpIHtcclxuICAgICAgcmV0dXJuIF8uZGl2KHtjbGFzczogJ3Jvb3QnfSwgJ1RoZSByb290IG9mIHRoaW5ncycpXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL3NvbmljJyxcclxuICAgIGNvbXBvbmVudDogZnVuY3Rpb24gU29uaWMoKSB7XHJcbiAgICAgIHJldHVybiBfWydzb25pYy1wJ10oe30sXHJcbiAgICAgICAgJ1NvbmljJyxcclxuICAgICAgICBfLmRpdih7Y2xhc3M6ICdzdGF0ZSd9LCBgU3RhdGUgdmFsdWUgb2YgdGhpcyBwYXRoOiAke0pTT04uc3RyaW5naWZ5KG5hdmlnYXRpb24uc3RhdGUpfWApXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvYW15JyxcclxuICAgIGNvbXBvbmVudDogQ2FyZHNDb250YWluZXIsXHJcbiAgfSxcclxuXVxyXG5cclxuY29uc3QgTmF2aWdhdGUgPSBET01OYXZpZ2F0ZShyb3V0ZXMpXHJcblxyXG5uYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2N1c3RvbS1uYXZpZ2F0ZScsIGV2ZW50ID0+IHtcclxuICBOYXZpZ2F0ZS51cGRhdGUoZXZlbnQuZGV0YWlsLnBhdGgpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgcmV0dXJuIF8uZGl2KHtkYXRhc2V0OiB7aWQ6ICdhcHAnfX0sXHJcbiAgICBfLmRpdih7ZGF0YXNldDoge2lkOiAnYXBwLWNvbnRlbnQnfX0sXHJcbiAgICAgIEFzaWRlKCksXHJcbiAgICAgIE1haW4oKSxcclxuICAgIClcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFzaWRlKCkge1xyXG4gIHJldHVybiBfLmFzaWRlKHtjbGFzczogJ2FzaWRlLWNvbXBvbmVudCd9LFxyXG4gICAgXy4kbWFwKDYsIGluZGV4ID0+IF8uZGl2KHtjbGFzczogJ2l0ZW0nfSwgaW5kZXggKyAxKSlcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3Qgc29uaWNCdG4gPSBDdXN0b21CdXR0b24oKVxyXG4gIHNvbmljQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gbmF2aWdhdGlvbi5wdXNoKCcvc29uaWMnLCAnUHJpbmNlc3MgRWxpc2UnKSlcclxuXHJcbiAgY29uc3QgYW15QnRuID0gQ3VzdG9tQnV0dG9uKClcclxuICBhbXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBuYXZpZ2F0aW9uLnB1c2goJy9hbXknKSlcclxuXHJcbiAgY29uc3Qgcm9vdEJ0biA9IEN1c3RvbUJ1dHRvbigpXHJcbiAgcm9vdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IG5hdmlnYXRpb24ucHVzaCgnLycpKVxyXG5cclxuICBjb25zdCBub3RGb3VuZEJ0biA9IEN1c3RvbUJ1dHRvbigpXHJcbiAgbm90Rm91bmRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBuYXZpZ2F0aW9uLnB1c2goJy9Abm90LWZvdW5kJykpXHJcblxyXG4gIHJldHVybiBfLm1haW4oe2NsYXNzOiAnbWFpbi1jb21wb25lbnQnfSxcclxuICAgIENvb2xCb3JkZXIoe3RhZ05hbWU6ICdoMScsIGNsYXNzOiAndGl0bGUtYm9yZGVyLXdyYXBwZXInfSxcclxuICAgICAgXy5kaXYoe2NsYXNzOiAndGl0bGUnfSwgJ1NvbWUgY29vbCB0aXRsZScpXHJcbiAgICApLFxyXG5cclxuICAgICQoTmF2aWdhdGUuY29tcG9uZW50LCB7Y2xhc3M6ICduYXZpZ2F0ZS1jb21wb25lbnQnfSksXHJcblxyXG4gICAgVHlwZVNvbmljKCksXHJcblxyXG4gICAgJChzb25pY0J0biwge2NsYXNzOiAnYnRuJywgc3R5bGU6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMDRhJ319LCAnR28gdG8gU29uaWMnKSxcclxuICAgICQoYW15QnRuLCB7Y2xhc3M6ICdidG4nLCBzdHlsZToge2JhY2tncm91bmRDb2xvcjogJyNiNGInfX0sICdHbyB0byBBbXknKSxcclxuICAgICQocm9vdEJ0biwge2NsYXNzOiAnYnRuJywgc3R5bGU6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMDkwJ319LCAnR28gdG8gUm9vdCcpLFxyXG4gICAgJChub3RGb3VuZEJ0biwge2NsYXNzOiAnYnRuJywgc3R5bGU6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMjIyJ319LCAnR28gdG8gYW55IE5vdCBGb3VuZCcpLFxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gVHlwZVNvbmljKCkge1xyXG4gIGNvbnN0IHR5cGVFZmZlY3QgPSBUeXBlRWZmZWN0KClcclxuXHJcbiAgY29uc3QgYnRuID0gQ3VzdG9tQnV0dG9uKClcclxuXHJcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgdHlwZUVmZmVjdC5pbml0QW5pbWF0aW9uKCdTb25pYyBUaGUgSGVkZ2Vob2cnLCAxMDApXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIF8oXHJcbiAgICAkKHR5cGVFZmZlY3QuY29tcG9uZW50LCB7Y2xhc3M6ICd0eXBlLWVmZmVjdC1jb21wb25lbnQnfSksXHJcbiAgICAkKGJ0bixcclxuICAgICAge2NsYXNzOiAnYnRuJywgc3R5bGU6IHthbGlnblNlbGY6ICdmbGV4LXN0YXJ0J319LFxyXG4gICAgICAnQ2xpY2sgTWUnXHJcbiAgICApLFxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQ2FyZHNDb250YWluZXIoKSB7XHJcbiAgcmV0dXJuIF8uZGl2KHtjbGFzczogJ2NhcmRzLWNvbnRhaW5lcid9LFxyXG4gICAgXy4kbWFwKDMsICgpID0+IF8uZGl2KHtjbGFzczogJ2NhcmQnfSxcclxuICAgICAgICBfLmRpdih7Y2xhc3M6ICd0aXRsZSd9LCAnQ2FyZCBUaXRsZScpLFxyXG4gICAgICAgIF8uZGl2KHtjbGFzczogJ2NvbnRlbnQnfSwgJ015IHBlcmZlY3QgY29udGVudFxcbicucmVwZWF0KDQpKVxyXG4gICAgICApXHJcbiAgICApLFxyXG4gIClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFR5cGVFZmZlY3QoKSB7XHJcbiAgY29uc3QgcGxhY2Vob2xkZXJGb3JFbXB0eVN0cmluZyA9ICgpID0+IF8ucHJlKHthdHRyaWJ1dGVzOiB7J2FyaWEtaGlkZGVuJzogdHJ1ZX19LCAnICcpXHJcbiAgY29uc3QgY29tcG9uZW50ID0gX1sndHlwZS1lZmZlY3QnXSh7Y2xhc3M6ICd0eXBlLWVmZmVjdC1jb21wb25lbnQnLCBzdHlsZToge2xpbmVIZWlnaHQ6ICcxLjNlbSd9fSwgcGxhY2Vob2xkZXJGb3JFbXB0eVN0cmluZygpKVxyXG5cclxuICBsZXQgaVxyXG4gIGxldCB0aW1lb3V0QW5pbWF0aW9uXHJcblxyXG4gIGZ1bmN0aW9uIGFuaW0odGV4dCwgZGVsYXkpIHtcclxuICAgIGNvbXBvbmVudC5pbm5lclRleHQgPSB0ZXh0LnNsaWNlKDAsIGkpXHJcblxyXG4gICAgaWYgKCsraSA+IHRleHQubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRpbWVvdXRBbmltYXRpb24gPSBzZXRUaW1lb3V0KGFuaW0sIGRlbGF5LCAuLi5hcmd1bWVudHMpXHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY29tcG9uZW50LFxyXG4gICAgaW5pdEFuaW1hdGlvbih0ZXh0ID0gJ05vIFRleHQgVG8gVHlwZScsIGRlbGF5ID0gMTAwKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0QW5pbWF0aW9uKVxyXG4gICAgICBpID0gMVxyXG5cclxuICAgICAgY29tcG9uZW50LmlubmVySFRNTCA9ICcnXHJcbiAgICAgIGNvbXBvbmVudC5hcHBlbmQocGxhY2Vob2xkZXJGb3JFbXB0eVN0cmluZygpKVxyXG5cclxuICAgICAgc2V0VGltZW91dChhbmltLCBkZWxheSwgLi4uYXJndW1lbnRzKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVuZGVyID0gXyhcclxuICBBcHAoKSxcclxuKVxyXG5cclxuZG9jdW1lbnQuYm9keS5yZXBsYWNlQ2hpbGRyZW4oKVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmQocmVuZGVyKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=