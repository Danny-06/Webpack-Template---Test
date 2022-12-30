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
  const customNavigate = new CustomEvent('custom-navigate', {detail: null})
  window.dispatchEvent(customNavigate)
}

// Fire `custom-navigate` event on `load`
window.addEventListener('DOMContentLoaded', event => {
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
      return _functional_dom_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].div({style: {width: '100%', height: '100%', backgroundColor: '#900', display: 'grid', placeItems: 'center'}}, 'NOT FOUND')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9FQUFDO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZnVuY3Rpb25hbC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbmFsLWRvbS9saWJzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbmFsLWRvbS9saWJzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbmFsLWRvbS9saWJzL2NyZWF0ZS13ZWItY29tcG9uZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvQ29vbEJvcmRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL0Nvb2xCb3JkZXIvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9DdXN0b21CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9DdXN0b21CdXR0b24vbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9mdW5jdGlvbmFsLWRvbS9jb21wb25lbnRzL2RvbS1uYXZpZ2F0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2Z1bmN0aW9uYWwtZG9tL2NvbXBvbmVudHMvZG9tLW5hdmlnYXRlL3V0aWxzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICBjb25zdCBjc3MgPSBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxyXFxuXFxyXFxuW2RhdGEtaWQ9XFxcImFwcC1jb250ZW50XFxcIl0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcblxcclxcbltkYXRhLWlkPVxcXCJhcHAtY29udGVudFxcXCJdIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnJcXHJcXG59XFxyXFxuICB9XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIC0td2lkdGg6IHNvbmljLXB4O1xcclxcbiAgfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICAtLXdpZHRoOiB0YWlscy1weDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgLS13aWR0aDoga251Y2tsZXMtcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIC0td2lkdGg6IDFweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgLS13aWR0aDogMnB4O1xcclxcbiAgfVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICAtLXdpZHRoOiAzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuOmlzKGh0bWwpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbjppcyhodG1sKSA+IGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgfVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcblxcclxcbjppcyhodG1sKSA+IGJvZHkge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTFcXHJcXG4gIH1cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbi5hc2lkZS1jb21wb25lbnQge1xcclxcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDE7XFxyXFxuICBncmlkLXJvdzogMSAvIHNwYW4gMTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDAuNXJlbTtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQyNDM0O1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcblxcclxcblxcclxcbi5hc2lkZS1jb21wb25lbnQge1xcclxcbiAgICBkaXNwbGF5OiBub25lXFxyXFxufVxcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5hc2lkZS1jb21wb25lbnQgPiAuaXRlbSB7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAwLjZyZW07XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDAuNnJlbTtcXHJcXG4gIFxcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZmO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5hc2lkZS1jb21wb25lbnQgPiAuaXRlbTpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuLm1haW4tY29tcG9uZW50IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyBzcGFuIDE7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDFyZW07XFxyXFxuXFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcblxcclxcbi5tYWluLWNvbXBvbmVudCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAxXFxyXFxufVxcclxcbiAgfVxcclxcblxcclxcbi5tYWluLWNvbXBvbmVudCA+IC50aXRsZS1ib3JkZXItd3JhcHBlciB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuLnRpdGxlLWJvcmRlci13cmFwcGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIC0tdmVydGljYWwtbGVuZ3RoOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtYm9yZGVyLXdyYXBwZXIgPiAudGl0bGUge1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMC41cmVtO1xcclxcbiAgXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMtY29udGFpbmVyID4gLmNhcmQge1xcclxcbiAgICBtYXgtd2lkdGg6IDE5MHB4O1xcclxcblxcclxcbiAgICBmbGV4LXNocmluazogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDAuNXJlbTtcXHJcXG5cXHJcXG4gIHBhZGRpbmctYmxvY2s6IDAuNXJlbTtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2ZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgPiAudGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZmO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubmF2aWdhdGUtY29tcG9uZW50IHtcXHJcXG4gIGhlaWdodDogMTgwcHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBib3JkZXI6IHNvbGlkIDJweCAjZmZmO1xcclxcblxcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblwiXG5cbiAgY29uc3Qgc3R5bGVzaGVldCA9IG5ldyBDU1NTdHlsZVNoZWV0KClcbiAgc3R5bGVzaGVldC5yZXBsYWNlU3luYyhjc3MpXG5cbiAgZXhwb3J0IGRlZmF1bHQgc3R5bGVzaGVldFxuICAiLCJpbXBvcnQgRE9NTWFrZXIsIHsgYnVpbGRFbGVtZW50LCBidWlsZEVsZW1lbnROUywgYnVpbGRTaGFkb3dIb3N0RWxlbWVudCwgTlNNYWtlciB9IGZyb20gJy4vbGlicy9jb3JlLmpzJ1xyXG5pbXBvcnQgeyBjcmVhdGVXZWJDb21wb25lbnQgfSBmcm9tICcuL2xpYnMvY3JlYXRlLXdlYi1jb21wb25lbnQuanMnXHJcblxyXG5jb25zdCBfID0gRE9NTWFrZXJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9cclxuXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge2ltcG9ydCgnLi9saWJzL2NvcmUuanMnKS5OU01ha2VyUHJveHlQcm9wZXJ0aWVzPFNWR0VsZW1lbnQsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+fSBTVkdNYWtlclxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7U1ZHTWFrZXJ9XHJcbiAqL1xyXG5jb25zdCBfc3ZnID0gTlNNYWtlcignaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKVxyXG5cclxuZXhwb3J0IHtcclxuICBidWlsZEVsZW1lbnQsXHJcbiAgYnVpbGRTaGFkb3dIb3N0RWxlbWVudCxcclxuICBjcmVhdGVXZWJDb21wb25lbnQsXHJcblxyXG4gIF9zdmcsXHJcblxyXG4gIE5TTWFrZXIsXHJcbiAgYnVpbGRFbGVtZW50TlNcclxufVxyXG4iLCJpbXBvcnQgeyAkbWFwLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVFbGVtZW50TlMsIHNldENoaWxkcmVuLCBzZXRDbGFzc2VzLCBzZXRTdHlsZVByb3BlcnRpZXMgfSBmcm9tICcuL2hlbHBlcnMuanMnXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge3N0cmluZyB8IG51bWJlciB8IEhUTUxFbGVtZW50IHwgRG9jdW1lbnRGcmFnbWVudH0gQ29yZU5vZGVcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge0NvcmVOb2RlW10gfCBDb3JlTm9kZVtdW119IENoaWxkcmVuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHsoLi4uY2hpbGRyZW46IENvcmVOb2RlW10pID0+IERvY3VtZW50RnJhZ21lbnR9IERPTU1ha2VyUHJveHlGdW5jXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHt7XHJcbiAqICBba2V5IGluIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcF06IChwcm9wZXJ0aWVzPzogRnVuY3Rpb25hbERPTVByb3BlcnRpZXMsIC4uLmNoaWxkcmVuOiBDaGlsZHJlbikgPT4gSFRNTEVsZW1lbnRUYWdOYW1lTWFwW2tleV1cclxuICogfX0gRE9NTWFrZXJIVE1MUHJveHlQcm9wZXJ0aWVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIFNoYWRvd0RPTU9wdGlvbnNcclxuICogQHByb3BlcnR5IHtTaGFkb3dSb290SW5pdH0gW2luaXRdXHJcbiAqIEBwcm9wZXJ0eSB7U2hhZG93Um9vdE1vZGV9IFttb2RlPW9wZW5dXHJcbiAqIEBwcm9wZXJ0eSB7Q1NTU3R5bGVTaGVldFtdfSBbYWRvcHRlZFN0eWxlU2hlZXRzPVtdXVxyXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50W119IFtjaGlsZHJlbl1cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge3tcclxuICogICQ6IHtba2V5IGluIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcF06IChwcm9wZXJ0aWVzOiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgc2hhZG93RE9NT3B0aW9uczogU2hhZG93RE9NT3B0aW9ucywgLi4uY2hpbGRyZW46IENoaWxkcmVuKSA9PiBIVE1MRWxlbWVudFRhZ05hbWVNYXBba2V5XX1cclxuICogfX0gRE9NTWFrZXJTaGFkb3dET01IVE1MUHJveHlQcm9wZXJ0aWVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHt7XHJcbiAqICAkOiB7W2tleTogc3RyaW5nXTogKHByb3BlcnRpZXM6IEZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzLCBzaGFkb3dET01PcHRpb25zOiBTaGFkb3dET01PcHRpb25zLCAuLi5jaGlsZHJlbjogQ2hpbGRyZW4pID0+IEhUTUxFbGVtZW50fVxyXG4gKiB9fSBET01NYWtlclNoYWRvd0RPTVByb3h5UHJvcGVydGllc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7e1xyXG4gKiAgJG1hcDogKGxlbmd0aDogbnVtYmVyLCBjYWxsYmFjazogKGluZGV4OiBudW1iZXIpID0+IENvcmVOb2RlKSA9PiBDb3JlTm9kZVtdXHJcbiAqIH19IERPTU1ha2VyTWFwRnVuY1xyXG4gKi9cclxuXHJcbi8qKlxyXG4qIEB0eXBlZGVmIHt7XHJcbiogIFtrZXk6IHN0cmluZ106IChwcm9wZXJ0aWVzPzogRnVuY3Rpb25hbERPTVByb3BlcnRpZXMsIC4uLmNoaWxkcmVuOiBDaGlsZHJlbikgPT4gSFRNTEVsZW1lbnRcclxuKiB9fSBET01NYWtlclByb3h5UHJvcGVydGllc1xyXG4qL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHtET01NYWtlclByb3h5RnVuYyAmIERPTU1ha2VySFRNTFByb3h5UHJvcGVydGllcyAmIERPTU1ha2VyU2hhZG93RE9NSFRNTFByb3h5UHJvcGVydGllcyAmIERPTU1ha2VyU2hhZG93RE9NUHJveHlQcm9wZXJ0aWVzICYgRE9NTWFrZXJNYXBGdW5jICYgRE9NTWFrZXJQcm94eVByb3BlcnRpZXN9IERPTU1ha2VyUHJveHlcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge2Jvb2xlYW4gfCBudW1iZXIgfCBiaWdpbnQgfCBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSBQcmltaXRpdmVcclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgRnVuY3Rpb25hbERPTVByb3BlcnRpZXNcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtpZF1cclxuICogQHByb3BlcnR5IHtzdHJpbmcgfCBzdHJpbmdbXX0gW2NsYXNzXVxyXG4gKiBAcHJvcGVydHkge3tba2V5OiBzdHJpbmddOiBQcmltaXRpdmV9fSBbZGF0YXNldF1cclxuICogQHByb3BlcnR5IHt7W2tleTogc3RyaW5nXTogUHJpbWl0aXZlfX0gW2F0dHJpYnV0ZXNdXHJcbiAqIEBwcm9wZXJ0eSB7e1trZXk6IHN0cmluZ106IFByaW1pdGl2ZX19IFtzdHlsZV1cclxuICovXHJcblxyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtET01NYWtlclByb3h5fVxyXG4gKiBcclxuICogUHJveHkgb2JqZWN0IHRoYXQgaXMgdGhlIGNvcmUgb2YgdGhpcyBsaWJyYXJ5LiAgXHJcbiAqIEJ5IGludm9raW5nIGl0IGFzIGEgYGZ1bmN0aW9uYCB5b3UgY2FuIHdyYXAgbXVsdGlwbGUgYERPTSBlbGVtZW50c2AgaW4gYSBgRG9jdW1lbnRGcmFtZ2VudGAuXHJcbiAqIFxyXG4gKiBJZiBpbnN0ZWFkIHdlIGFjY2VzcyBhIGBwcm9wZXJ0eWAgb2YgaXQgIFxyXG4gKiB3ZSB3aWxsIGdldCBhIGBmdW5jdGlvbmAgdGhhdCBjcmVhdGVzIGEgYERPTSBlbGVtZW50YCAgXHJcbiAqIHdoaWNoIGB0YWdOYW1lYCBtYXRjaCB0aGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24uXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICogIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAqIFxyXG4gKiAgLy8gRG9jdW1lbnRGcmFnbWVudDxIVE1MRGl2RWxlbWVudCwgSFRNTEJ1dHRvbkVsZW1lbnQ+XHJcbiAqICBjb25zdCBkb2N1bWVudEZyYWdtZW50ID0gRE9NTWFrZXIoZGl2LCBidXR0b24pXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiBjb25zdCBkaXYgICAgPSBET01NYWtlci5kaXYoKVxyXG4gKiBjb25zdCBidXR0b24gPSBET01NYWtlci5idXR0b24oKVxyXG4gKiBcclxuICogY29uc3QgY3VzdG9tRWxlbWVudCA9IERPTU1ha2VyWydjdXN0b20tZWxlbWVudCddKClcclxuICogIFxyXG4gKi9cclxuY29uc3QgRE9NTWFrZXIgPSBuZXcgUHJveHkoZnVuY3Rpb24oKSB7fSwge1xyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcGFyYW0geyp9IHRhcmdldCBcclxuICAgKiBAcGFyYW0geyp9IHRoaXNBcmcgXHJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBhcmdBcnJheSBcclxuICAgKiBAcmV0dXJucyB7RG9jdW1lbnRGcmFnbWVudH1cclxuICAgKi9cclxuICBhcHBseTogKHRhcmdldCwgdGhpc0FyZywgYXJnQXJyYXkpID0+IHtcclxuICAgIGNvbnN0IGRvY3VtZW50RnJhZ21lbnQgPSBuZXcgRG9jdW1lbnRGcmFnbWVudCgpXHJcblxyXG4gICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmQoLi4uYXJnQXJyYXkuZmlsdGVyKG5vZGUgPT4gbm9kZSAhPSBudWxsKSlcclxuXHJcbiAgICByZXR1cm4gZG9jdW1lbnRGcmFnbWVudFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBcclxuICAgKiBAcGFyYW0geyp9IHJlY2VpdmVyIFxyXG4gICAqIEByZXR1cm5zIHsqfVxyXG4gICAqL1xyXG4gIGdldDogKHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XHJcbiAgICAgIGNhc2UgJyQnOlxyXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoZnVuY3Rpb24oKSB7fSwge1xyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBAcGFyYW0geyp9IHRhcmdldCBcclxuICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbm5lclByb3BlcnR5IFxyXG4gICAgICAgICAgICogQHBhcmFtIHsqfSByZWNlaXZlciBcclxuICAgICAgICAgICAqIEByZXR1cm5zIHsqfVxyXG4gICAgICAgICAgICovXHJcbiAgICAgICAgICBnZXQ6ICh0YXJnZXQsIGlubmVyUHJvcGVydHksIHJlY2VpdmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0aWVzLCBzaGFkb3dET01PcHRpb25zLCAuLi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KGlubmVyUHJvcGVydHkpXHJcblxyXG4gICAgICAgICAgICAgIGJ1aWxkU2hhZG93SG9zdEVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcywgc2hhZG93RE9NT3B0aW9ucywgLi4uY2hpbGRyZW4pXHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgY2FzZSAnJG1hcCc6XHJcbiAgICAgICAgcmV0dXJuICRtYXBcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnRpZXMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KHByb3BlcnR5KVxyXG5cclxuICAgICAgYnVpbGRFbGVtZW50KGVsZW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkcmVuKVxyXG5cclxuICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRE9NTWFrZXJcclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0ge1QgZXh0ZW5kcyBIVE1MRWxlbWVudCA/IFQgOiBuZXZlcn0gZWxlbWVudCBcclxuICogQHBhcmFtIHtGdW5jdGlvbmFsRE9NUHJvcGVydGllc30gW3Byb3BlcnRpZXNdIFxyXG4gKiBAcGFyYW0gIHsuLi5Db3JlTm9kZX0gY2hpbGRyZW4gXHJcbiAqIEByZXR1cm5zIHtUfVxyXG4gKiBcclxuICogSXQncyBzaW1pbGFyIHRvIGBET01NYWtlci5wcm9wZXJ0eSgpYCBidXQgaW5zdGVhZCBvZiAgXHJcbiAqIGNyZWF0aW5nIGFuIGVsZW1lbnQgaXQganVzdCB0YWtlcyBhbiBgZWxlbWVudGAgYW5kIGFwcGxpZXMgIFxyXG4gKiB0aGUgYHByb3BlcnRpZXNgIGFuZCB0aGUgYGNoaWxkcmVuYCB0byBpdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcyA9IHt9LCAuLi5jaGlsZHJlbikge1xyXG4gIGNvbnN0IHtpZCwgY2xhc3M6IGNsYXNzZXMsIGRhdGFzZXQsIGF0dHJpYnV0ZXMsIHN0eWxlfSA9IHByb3BlcnRpZXMgPz8ge31cclxuXHJcbiAgY29uc3QgdHAgPSB3aW5kb3cudHJ1c3RlZFR5cGVzID8gdHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnJywge2NyZWF0ZUhUTUw6IGUgPT4gZSwgY3JlYXRlU2NyaXB0VVJMOiBlID0+IGUgfSkgOiB7Y3JlYXRlSFRNTDogZSA9PiBlLCBjcmVhdGVTY3JpcHRVUkw6IGUgPT4gZSB9XHJcblxyXG4gIGlmIChpZCkge1xyXG4gICAgZWxlbWVudC5pZCA9IGlkXHJcbiAgfVxyXG5cclxuICBpZiAoY2xhc3Nlcykge1xyXG4gICAgc2V0Q2xhc3NlcyhlbGVtZW50LCBjbGFzc2VzKVxyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGFzZXQpIHtcclxuICAgIGZvciAoY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YXNldCA/PyB7fSkpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlXHJcblxyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIGVsZW1lbnQuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBbcHJvcGVydHksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzID8/IHt9KSkge1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlXHJcblxyXG4gICAgaWYgKFsnc3JjJywgJ2hyZWYnXS5pbmNsdWRlcyhwcm9wZXJ0eSkpIHtcclxuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHRwLmNyZWF0ZVNjcmlwdFVSTCh2YWx1ZSkpXHJcblxyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSlcclxuICB9XHJcbiAgXHJcbiAgaWYgKHN0eWxlKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBzZXRTdHlsZVByb3BlcnRpZXMoZWxlbWVudC5zdHlsZSwgc3R5bGUpXHJcbiAgfVxyXG5cclxuICBzZXRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbilcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEBwYXJhbSB7VCBleHRlbmRzIEhUTUxFbGVtZW50ID8gVCA6IG5ldmVyfSBlbGVtZW50IFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9uYWxET01Qcm9wZXJ0aWVzPX0gcHJvcGVydGllcyBcclxuICogQHBhcmFtIHtTaGFkb3dET01PcHRpb25zPX0gc2hhZG93RE9NT3B0aW9uc1xyXG4gKiBAcGFyYW0gIHsuLi5IVE1MRWxlbWVudH0gY2hpbGRyZW4gXHJcbiAqIEByZXR1cm5zIHtUfVxyXG4gKiBcclxuICogSXQncyBzaW1pbGFyIHRvIGBidWlsZEVsZW1lbnRgIGJ1dCBpdCBhbHNvIGFjY2VwdHNcclxuICogYW4gZXh0cmEgcGFyYW1ldGVyIHRvIGNvbmZpZ3VyZSB0aGUgYFNoYWRvdyBET01gXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRTaGFkb3dIb3N0RWxlbWVudChlbGVtZW50LCBwcm9wZXJ0aWVzID0ge30sIHNoYWRvd0RPTU9wdGlvbnMgPSB7fSwgLi4uY2hpbGRyZW4pIHtcclxuICBidWlsZEVsZW1lbnQoZWxlbWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pXHJcblxyXG4gIGNvbnN0IHNoYWRvd1Jvb3RJbml0ID0ge21vZGU6ICdvcGVuJywgLi4uc2hhZG93RE9NT3B0aW9ucy5pbml0fVxyXG5cclxuICBpZiAoc2hhZG93RE9NT3B0aW9ucy5tb2RlKSB7XHJcbiAgICBzaGFkb3dSb290SW5pdC5tb2RlID0gc2hhZG93RE9NT3B0aW9ucy5tb2RlXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHNoYWRvd1Jvb3QgPSBlbGVtZW50LmF0dGFjaFNoYWRvdyhzaGFkb3dSb290SW5pdClcclxuICBcclxuICBpZiAoQXJyYXkuaXNBcnJheShzaGFkb3dET01PcHRpb25zLmFkb3B0ZWRTdHlsZVNoZWV0cykpIHtcclxuICAgIHNoYWRvd1Jvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gc2hhZG93RE9NT3B0aW9ucy5hZG9wdGVkU3R5bGVTaGVldHNcclxuICB9XHJcbiAgXHJcbiAgc2hhZG93Um9vdC5hcHBlbmQoLi4uc2hhZG93RE9NT3B0aW9ucy5jaGlsZHJlbiA/PyBbXSlcclxuICBcclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBUTyBET1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0ZW1wbGF0ZSBSXHJcbiAqIEB0eXBlZGVmIHt7XHJcbiAqICBba2V5IGluIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwXTogKHByb3BlcnRpZXM/OiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgLi4uY2hpbGRyZW46IFRbXSkgPT4gUiBleHRlbmRzICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgPyBTVkdFbGVtZW50VGFnTmFtZU1hcFtrZXldIDogRWxlbWVudFxyXG4gKiB9fSBOU01ha2VyUHJveHlTVkdQcm9wZXJ0aWVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEB0ZW1wbGF0ZSBSXHJcbiAqIEB0eXBlZGVmIHt7XHJcbiAqICBba2V5OiBzdHJpbmddOiAocHJvcGVydGllcz86IEZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbjogVFtdKSA9PiBSIGV4dGVuZHMgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyA/IFNWR0VsZW1lbnQgOiBUXHJcbiAqIH19IE5TTWFrZXJQcm94eVN0cmluZ1Byb3BlcnRpZXNcclxuICovXHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIFRcclxuICogQHRlbXBsYXRlIFJcclxuICogQHR5cGVkZWYge05TTWFrZXJQcm94eVNWR1Byb3BlcnRpZXM8VCwgUj4gJiBOU01ha2VyUHJveHlTdHJpbmdQcm9wZXJ0aWVzPFQsIFI+fSBOU01ha2VyUHJveHlQcm9wZXJ0aWVzXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIHs8VCBleHRlbmRzICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgfCBzdHJpbmc+KG5hbWVzcGFjZTogVCkgPT4gVCBleHRlbmRzICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgPyBOU01ha2VyUHJveHlQcm9wZXJ0aWVzPFNWR0VsZW1lbnQsIFQ+IDogTlNNYWtlclByb3h5UHJvcGVydGllczxFbGVtZW50LCBUPn0gTlNNYWtlclxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7TlNNYWtlcn1cclxuICogXHJcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb3h5IG9iamVjdCB0byBjcmVhdGUgZWxlbWVudHMgb2YgYSBzcGVjaWZpYyBuYW1lc3BhY2UuICBcclxuICogSXQgaXMgc2ltaWxhciB0byBgRE9NTWFrZXJgIGluIGJlaGF2aW9yIGJ1dCBqdXN0IGxpbWl0ZWQgdG8gb3RoZXIgZWxlbWVudHMgdGhhdCBhcmUgbm90IEhUTUwuICBcclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IFNWR01ha2VyID0gTlNNYWtlcignaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKVxyXG4gKiBcclxuICogY29uc3Qgc3ZnID0gU1ZHTWFrZXIuc3ZnKClcclxuICogY29uc3QgcmVjdCA9IFNWR01ha2VyLnJlY3QoKVxyXG4gKiBcclxuICogY29uc3QgQ3VzdG9tTWFrZXIgPSBOU01ha2VyKCdteS1uYW1lc3BhY2UnKVxyXG4gKiBcclxuICogY29uc3QgY3VzdG9tRWxlbWVudCA9IE5TTWFrZXIuY3VzdG9tZWxlbWVudCgpXHJcbiAqIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE5TTWFrZXIgPSBuYW1lc3BhY2UgPT4ge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICByZXR1cm4gbmV3IFByb3h5KGZ1bmN0aW9uKCkge30sIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEB0ZW1wbGF0ZSBUXHJcbiAgICAgKiBAcGFyYW0geyp9IHRhcmdldCBcclxuICAgICAqIEBwYXJhbSB7VCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCA/IFQgOiBIVE1MRWxlbWVudH0gcHJvcGVydHkgXHJcbiAgICAgKiBAcGFyYW0geyp9IHJlY2VpdmVyIFxyXG4gICAgICogQHJldHVybnMgeyhwcm9wZXJ0aWVzOiBGdW5jdGlvbmFsRE9NUHJvcGVydGllcywgLi4uY2hpbGRyZW46IEhUTUxFbGVtZW50W10pID0+IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtUXX1cclxuICAgICAqL1xyXG4gICAgZ2V0OiAodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpID0+IHtcclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydGllcywgLi4uY2hpbGRyZW4pIHtcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnROUyhwcm9wZXJ0eSwgbmFtZXNwYWNlKVxyXG4gIFxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBidWlsZEVsZW1lbnROUyhlbGVtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbilcclxuICBcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEBwYXJhbSB7VCBleHRlbmRzIEVsZW1lbnQgPyBUIDogbmV2ZXJ9IGVsZW1lbnQgXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb25hbERPTVByb3BlcnRpZXM9fSBwcm9wZXJ0aWVzIFxyXG4gKiBAcGFyYW0gIHsuLi5FbGVtZW50fSBjaGlsZHJlbiBcclxuICogQHJldHVybnMge1R9XHJcbiAqIFxyXG4gKiBJdCdzIHNpbWlsYXIgdG8gYERPTU1ha2VyLnByb3BlcnR5KClgIGJ1dCBpbnN0ZWFkIG9mICBcclxuICogY3JlYXRpbmcgYW4gZWxlbWVudCBpdCBqdXN0IHRha2VzIGFuIGBlbGVtZW50YCBhbmQgYXBwbGllcyAgXHJcbiAqIHRoZSBgcHJvcGVydGllc2AgYW5kIHRoZSBgY2hpbGRyZW5gIHRvIGl0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRWxlbWVudE5TKGVsZW1lbnQsIHByb3BlcnRpZXMgPSB7fSwgLi4uY2hpbGRyZW4pIHtcclxuICBjb25zdCB7aWQsIGNsYXNzOiBjbGFzc2VzLCBkYXRhc2V0LCBhdHRyaWJ1dGVzLCBzdHlsZX0gPSBwcm9wZXJ0aWVzXHJcblxyXG4gIGNvbnN0IHRwID0gd2luZG93LnRydXN0ZWRUeXBlcyA/IHRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJycsIHtjcmVhdGVIVE1MOiBlID0+IGUsIGNyZWF0ZVNjcmlwdFVSTDogZSA9PiBlfSkgOiB7Y3JlYXRlSFRNTDogZSA9PiBlLCBjcmVhdGVTY3JpcHRVUkw6IGUgPT4gZSB9XHJcblxyXG4gIGlmIChpZCkge1xyXG4gICAgZWxlbWVudC5pZCA9IGlkXHJcbiAgfVxyXG5cclxuICBpZiAoY2xhc3Nlcykge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgc2V0Q2xhc3NlcyhlbGVtZW50LCBjbGFzc2VzKVxyXG4gIH1cclxuICBcclxuICBpZiAoZGF0YXNldCkge1xyXG4gICAgZm9yIChjb25zdCBbcHJvcGVydHksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhkYXRhc2V0ID8/IHt9KSkge1xyXG4gICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgY29udGludWVcclxuICAgICAgXHJcbiAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgZWxlbWVudC5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZvciAoY29uc3QgW3Byb3BlcnR5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcyA/PyB7fSkpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZVxyXG4gICAgXHJcbiAgICBpZiAoWydzcmMnLCAnaHJlZiddLmluY2x1ZGVzKHByb3BlcnR5KSkge1xyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdHAuY3JlYXRlU2NyaXB0VVJMKHZhbHVlKSlcclxuICAgICAgXHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB2YWx1ZSlcclxuICB9XHJcbiAgXHJcbiAgaWYgKHN0eWxlKSB7XHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBzZXRTdHlsZVByb3BlcnRpZXMoZWxlbWVudC5zdHlsZSwgc3R5bGUpXHJcbiAgfVxyXG4gIFxyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBzZXRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbilcclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG4iLCJcclxuLyoqXHJcbiAqIEB0ZW1wbGF0ZSBUXHJcbiAqIEBwYXJhbSB7VCBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcCA/IFQgOiBzdHJpbmd9IHRhZ05hbWUgXHJcbiAqIEByZXR1cm5zIHtUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwID8gSFRNTEVsZW1lbnRUYWdOYW1lTWFwW1RdIDogSFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWdOYW1lKSB7XHJcbiAgLyoqXHJcbiAgICogQHR5cGUge2FueX1cclxuICAgKi9cclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG4vKipcclxuICogQHRlbXBsYXRlIHtzdHJpbmd9IFRcclxuICogQHRlbXBsYXRlIHtzdHJpbmcgfCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnfSBSXHJcbiAqIEBwYXJhbSB7VCBleHRlbmRzIGtleW9mIFNWR0VsZW1lbnRUYWdOYW1lTWFwID8gVCA6IHN0cmluZ30gdGFnTmFtZSBcclxuICogQHBhcmFtIHtSfSBuYW1lc3BhY2VcclxuICogQHJldHVybnMge25hbWVzcGFjZSBleHRlbmRzICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgPyBUIGV4dGVuZHMga2V5b2YgU1ZHRWxlbWVudFRhZ05hbWVNYXAgPyBTVkdFbGVtZW50VGFnTmFtZU1hcFtUXSA6IFNWR0VsZW1lbnQgOiBFbGVtZW50fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnROUyh0YWdOYW1lLCBuYW1lc3BhY2UpIHtcclxuICAvKipcclxuICAgKiBAdHlwZSB7YW55fVxyXG4gICAqL1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobmFtZXNwYWNlLCB0YWdOYW1lKVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgXHJcbiAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW119IGNsYXNzZXMgXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2xhc3NlcyhlbGVtZW50LCBjbGFzc2VzKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJylcclxuICB9IGVsc2UgaWYgKHR5cGVvZiBjbGFzc2VzID09PSAnc3RyaW5nJykge1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc2VzXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgXHJcbiAqIEBwYXJhbSB7aW1wb3J0KFwiLi9jb3JlLmpzXCIpLkNoaWxkcmVufSBjaGlsZHJlbiBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaGlsZHJlbihlbGVtZW50LCBjaGlsZHJlbikge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBlbGVtZW50LmFwcGVuZCguLi5jaGlsZHJlbi5mbGF0KEluZmluaXR5KSlcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBcclxuICogQHJldHVybnMge3N0cmluZ31cclxuICovXHJcbmNvbnN0IGxvd2VyQ2FzZVRvSHlwaGVuID0gc3RyaW5nID0+IHN0cmluZy5zcGxpdCgvKD89W0EtWl0pLykubWFwKHN0ciA9PiBzdHIudG9Mb3dlckNhc2UoKSkuam9pbignLScpXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZVxyXG4gKiBAcGFyYW0ge3tba2V5OiBzdHJpbmddOiBzdHJpbmd9fSBwcm9wZXJ0aWVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3R5bGVQcm9wZXJ0aWVzKHN0eWxlLCBwcm9wZXJ0aWVzKSB7XHJcbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XHJcblxyXG4gICAgbGV0IHByb3BlcnR5TmFtZSA9IHByb3BlcnR5XHJcblxyXG4gICAgY29uc3QgaXNDdXN0b21Qcm9wZXJ0eSA9IHByb3BlcnR5TmFtZS5zdGFydHNXaXRoKCctLScpXHJcbiAgICBjb25zdCBoYXNIeXBoZW4gPSBwcm9wZXJ0eU5hbWUuaW5jbHVkZXMoJy0nKVxyXG4gICAgaWYoIWlzQ3VzdG9tUHJvcGVydHkgJiYgIWhhc0h5cGhlbikge1xyXG4gICAgICBwcm9wZXJ0eU5hbWUgPSBsb3dlckNhc2VUb0h5cGhlbihwcm9wZXJ0eU5hbWUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJlZml4VmVuZG9ycyA9IHByb3BlcnR5TmFtZS5zZWFyY2goL14od2Via2l0fG1venxtc3xvKS0vKSAhPT0gLTFcclxuICAgIGlmKHByZWZpeFZlbmRvcnMpIHtcclxuICAgICAgcHJvcGVydHlOYW1lID0gYC0ke3Byb3BlcnR5TmFtZX1gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHkgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5XS5tYXRjaCgvIVthLXpdKyQvaWcpPy5bMF0uc2xpY2UoMSkgPz8gJydcclxuICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSBwcmlvcml0eSA/IHByb3BlcnRpZXNbcHJvcGVydHldLnJlcGxhY2UobmV3IFJlZ0V4cChgISR7cHJpb3JpdHl9JGAsICdpJyksICcnKSA6IHByb3BlcnRpZXNbcHJvcGVydHldXHJcblxyXG4gICAgc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlLCBwcmlvcml0eSlcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAkbWFwKGxlbmd0aCwgY2FsbGJhY2spIHtcclxuICBjb25zdCBjb2xsZWN0aW9uID0gbmV3IEFycmF5KGxlbmd0aClcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgY29sbGVjdGlvbltpXSA9IGNhbGxiYWNrKGkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29sbGVjdGlvblxyXG59XHJcbiIsIi8vIEB0cy1ub2NoZWNrXHJcblxyXG5jb25zdCBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIobXV0YXRpb25zID0+IHtcclxuICBtdXRhdGlvbnMuZm9yRWFjaChtdXRhdGlvbiA9PiB7XHJcbiAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IG11dGF0aW9uLnRhcmdldFxyXG5cclxuICAgICAgY29uc3QgbmFtZSA9IG11dGF0aW9uLmF0dHJpYnV0ZU5hbWVcclxuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBtdXRhdGlvbi5vbGRWYWx1ZVxyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUobmFtZSlcclxuXHJcbiAgICAgIHRhcmdldD8uYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSlcclxuICAgIH1cclxuICB9KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIGVsZW1lbnRzIHRocm91Z2ggYW55IGBIVE1MRWxlbWVudGAgbGlrZSBhIGA8ZGl2PmAuICBcclxuICogVGhlIGNsYXNzIHByb3ZpZGVkIGlzIGludm9rZWQgaW4gdGhlIGBlbGVtZW50YCBhbmQgdGhlbiBpdHMgYHByb3RvdHlwZWAgaXMgY2hhbmdlZCAgXHJcbiAqIHdpdGggdGhlIHByb3RvdHlwZSBvZiB0aGUgYGNsYXNzYC4gIFxyXG4gKiBcclxuICogVG8gZGVjbGFyZSB0aGUgYGNvbnN0cnVjdG9yYCBvZiB0aGUgY2xhc3MgaXQgbXVzdCBiZSBkZWNsYXJlZCBhcyBgX2NvbnN0cnVjdG9yX2AgIFxyXG4gKiBpbnN0ZWFkIG9mIHRoZSBub3JtYWwgY29uc3RydWN0b3IgdG8gYWxsb3cgdGhlIGZ1bmN0aW9uIHRvIGludm9rZSBpdCBpbiB0aGUgYGVsZW1lbnRgLiAgXHJcbiAqIFxyXG4gKiBTaW5jZSB0aGUgYGVsZW1lbnRgIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgY29tcG9uZW50IGlzIG5vdCBwb3NpYmxlIHRvIHVzZSBgcHJpdmF0ZSBwcm9wZXJ0aWVzYC4gIFxyXG4gKiBGb3IgdGhhdCByZWFzb24sIGlzIHJlY29tbWVuZGVkIHRvIHJlcGxhY2UgdGhlbSB3aXRoIHByb3BlcnRpZXMgdGhhdCBzdGFydHMgd2l0aCBhbiB1bmRlcnNjb3JlLiAgXHJcbiAqIFxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0ge1QgZXh0ZW5kcyB0eXBlb2YgSFRNTEVsZW1lbnQgPyBUIDogbmV2ZXJ9IGNsYXNzQ29tcG9uZW50IFxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbZWxlbWVudFRvQXBwbHk9bnVsbF1cclxuICogQHJldHVybnMge0luc3RhbmNlVHlwZTxUPn1cclxuICogXHJcbiAqIEBleGFtcGxlXHJcbiAqIGNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZVdlYkNvbXBvbmVudChjbGFzcyBNeUNvbXBvbmVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICogICBfY29uc3RydWN0b3JfKCkge1xyXG4gKiAgICAgdGhpcy5wcm9wZXJ0eSA9ICd2YWx1ZSdcclxuICpcclxuICogICAgIGNvbnNvbGUubG9nKHRoaXMuX3ByaXZhdGVWYWx1ZSlcclxuICogICB9XHJcbiAqXHJcbiAqICAgZ2V0IGlubmVySFRNTCgpIHtcclxuICogICAgIHJldHVybiBzdXBlci5pbm5lckhUTUxcclxuICogICB9XHJcbiAqXHJcbiAqICAgc2V0IGlubmVySFRNTCh2YWx1ZSkge1xyXG4gKiAgICAgc3VwZXIuaW5uZXJIVE1MID0gdmFsdWVcclxuICogICB9XHJcbiAqXHJcbiAqICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XHJcbiAqICAgICByZXR1cm4gWydteS1hdHRyaWJ1dGUnXVxyXG4gKiAgIH1cclxuICpcclxuICogICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XHJcbiAqICAgICBjb25zb2xlLmxvZyguLi5hcmd1bWVudHMpXHJcbiAqICAgfVxyXG4gKiB9KVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlYkNvbXBvbmVudChjbGFzc0NvbXBvbmVudCwgZWxlbWVudFRvQXBwbHkgPSBudWxsKSB7XHJcbiAgaWYgKCEoY2xhc3NDb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBjbGFzcyBjb21wb25lbnQgbXVzdCBleHRlbmRzIEhUTUxFbGVtZW50YClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudCA9IGVsZW1lbnRUb0FwcGx5ID8/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gIGlmIChjbGFzc0NvbXBvbmVudC5vYnNlcnZlZEF0dHJpYnV0ZXMpIHtcclxuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShjb21wb25lbnQsIHtcclxuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcclxuICAgICAgYXR0cmlidXRlRmlsdGVyOiBjbGFzc0NvbXBvbmVudC5vYnNlcnZlZEF0dHJpYnV0ZXMsXHJcbiAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGNvbXBvbmVudCwgY2xhc3NDb21wb25lbnQucHJvdG90eXBlKVxyXG4gIGNsYXNzQ29tcG9uZW50LnByb3RvdHlwZS5fY29uc3RydWN0b3JfPy5jYWxsKGNvbXBvbmVudClcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudFxyXG59XHJcbiIsImltcG9ydCBfLCB7IGJ1aWxkRWxlbWVudCBhcyAkfSBmcm9tICcuLi9mdW5jdGlvbmFsLWRvbS9pbmRleC5qcydcclxuaW1wb3J0IHN0eWxlc2hlZXQgZnJvbSAnLi9tYWluLmNzcydcclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdHlwZWRlZiBDb29sQm9yZGVyT3B0aW9uc0RlZlxyXG4gKiBAcHJvcGVydHkge1QgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAgPyBUIDogc3RyaW5nfSBbdGFnTmFtZT1cImRpdlwiXVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAdHlwZWRlZiB7Q29vbEJvcmRlck9wdGlvbnNEZWY8VD4gJiBpbXBvcnQoJy4uL2Z1bmN0aW9uYWwtZG9tL2xpYnMvY29yZS5qcycpLkZ1bmN0aW9uYWxET01Qcm9wZXJ0aWVzfSBDb29sQm9yZGVyT3B0aW9uc1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdGVtcGxhdGUgVFxyXG4gKiBAcGFyYW0ge0Nvb2xCb3JkZXJPcHRpb25zPFQ+fSBvcHRpb25zXHJcbiAqIEBwYXJhbSAgey4uLkhUTUxFbGVtZW50fSBjaGlsZHJlbiBcclxuICogQHJldHVybnMge1QgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXAgPyBIVE1MRWxlbWVudFRhZ05hbWVNYXBbVF0gOiBIVE1MRWxlbWVudH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBDb29sQm9yZGVyKG9wdGlvbnMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgY29uc3Qge3RhZ05hbWUgPSAnZGl2J30gPSBvcHRpb25zID8/IHt9XHJcblxyXG4gIGNvbnN0IHNoYWRvd1Jvb3RDb250ZW50ID0gXy5kaXYoe2NsYXNzOiAnd3JhcHBlci1ib3JkZXItZWZmZWN0IF9ncmlkLW92ZXJsYXlfJ30sIFxyXG4gICAgXy5kaXYoe2NsYXNzOiAnbXktY29udGVudCd9LFxyXG4gICAgICBfLnNsb3QoKSxcclxuICAgICksXHJcbiAgICBfLmRpdih7Y2xhc3M6ICdib3JkZXItZWZmZWN0J30sXHJcbiAgICAgIF8uZGl2KHtjbGFzczogJ2JvcmRlcid9KSxcclxuICAgICAgXy5kaXYoe2NsYXNzOiAnYm9yZGVyJ30pLFxyXG4gICAgICBfLmRpdih7Y2xhc3M6ICdib3JkZXInfSksXHJcbiAgICAgIF8uZGl2KHtjbGFzczogJ2JvcmRlcid9KSxcclxuICAgIClcclxuICApXHJcblxyXG4gIGNvbnN0IHdyYXBwZXIgPSBfLiRbdGFnTmFtZV0obnVsbCwge1xyXG4gICAgYWRvcHRlZFN0eWxlU2hlZXRzOiBbc3R5bGVzaGVldF0sXHJcbiAgICBjaGlsZHJlbjogW3NoYWRvd1Jvb3RDb250ZW50XVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAkKHdyYXBwZXIsIG9wdGlvbnMsIC4uLmNoaWxkcmVuKVxyXG59XHJcbiIsIlxuICBjb25zdCBjc3MgPSBcIjpob3N0IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbio6bm90KDpob3N0KSxcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm15LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIFV0aWxpdHkgQ2xhc3NlcyBTdGFydCAqL1xcclxcblxcclxcbi5fZ3JpZC1vdmVybGF5XyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdvdmVybGF5JztcXHJcXG59XFxyXFxuXFxyXFxuLl9ncmlkLW92ZXJsYXlfID4gKiB7XFxyXFxuICBncmlkLWFyZWE6IG92ZXJsYXk7XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVdGlsaXR5IENsYXNzZXMgRW5kICovXFxyXFxuXFxyXFxuXFxyXFxuLyogQm9yZGVyIEVmZmVjdCAqL1xcclxcblxcclxcbjpob3N0IHtcXHJcXG4gIC0tYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAtLWhvcml6b250YWwtbGVuZ3RoOiAxMDBweDtcXHJcXG4gIC0tdmVydGljYWwtbGVuZ3RoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItYm9yZGVyLWVmZmVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXItYm9yZGVyLWVmZmVjdCA+IDpmaXJzdC1jaGlsZCB7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci13aWR0aDogdmFyKC0tYm9yZGVyLXdpZHRoKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJvcmRlci1lZmZlY3Qge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAtLWhvcml6b250YWwtYW5nbGU6IDkwZGVnO1xcclxcbiAgLS1ob3Jpem9udGFsLXJldmVyc2VkLWFuZ2xlOiAyNzBkZWc7XFxyXFxuXFxyXFxuICAtLXZlcnRpY2FsLWFuZ2xlOiAxODBkZWc7XFxyXFxuICAtLXZlcnRpY2FsLXJldmVyc2VkLWFuZ2xlOiAwZGVnO1xcclxcbiAgXFxyXFxuICAtLXZlcnRpY2FsLWNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMCAwLFxcclxcbiAgICAxMDAlIDAsXFxyXFxuICAgIDUwJSBjYWxjKHZhcigtLXZlcnRpY2FsLWxlbmd0aCkgKiAyKVxcclxcbiAgKTtcXHJcXG4gIFxcclxcbiAgLS12ZXJ0aWNhbC1jbGlwLXBhdGgtcmV2ZXJzZWQ6IHBvbHlnb24oXFxyXFxuICAgIDUwJSBjYWxjKDEwMCUgLSB2YXIoLS12ZXJ0aWNhbC1sZW5ndGgpICogMiksXFxyXFxuICAgIDEwMCUgMTAwJSxcXHJcXG4gICAgMCUgMTAwJVxcclxcbiAgKTtcXHJcXG4gIFxcclxcbiAgLS1ob3Jpem9udGFsLWNsaXAtcGF0aDogcG9seWdvbihcXHJcXG4gICAgMCAwLFxcclxcbiAgICAwIDEwMCUsXFxyXFxuICAgIGNhbGModmFyKC0taG9yaXpvbnRhbC1sZW5ndGgpICogMikgNTAlXFxyXFxuICApO1xcclxcbiAgXFxyXFxuICAtLWhvcml6b250YWwtY2xpcC1wYXRoLXJldmVyc2VkOiBwb2x5Z29uKFxcclxcbiAgICBjYWxjKDEwMCUgLSB2YXIoLS1ob3Jpem9udGFsLWxlbmd0aCkgKiAyKSA1MCUsXFxyXFxuICAgIDEwMCUgMCxcXHJcXG4gICAgMTAwJSAxMDAlXFxyXFxuICApO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9yZGVyLWVmZmVjdCA+IC5ib3JkZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb3Jpem9udGFsIFRvcCAqL1xcclxcbi5ib3JkZXItZWZmZWN0ID4gLmJvcmRlcjpudGgtY2hpbGQoMSkge1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG5cXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1ib3JkZXItd2lkdGgpO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB2YXIoLS1ob3Jpem9udGFsLWFuZ2xlKSxcXHJcXG4gICAgI2ZmZjksXFxyXFxuICAgIHRyYW5zcGFyZW50IHZhcigtLWhvcml6b250YWwtbGVuZ3RoKVxcclxcbiAgKTtcXHJcXG5cXHJcXG4gIGNsaXAtcGF0aDogdmFyKC0taG9yaXpvbnRhbC1jbGlwLXBhdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBWZXJ0aWNhbCBMZWZ0ICovXFxyXFxuLmJvcmRlci1lZmZlY3QgPiAuYm9yZGVyOm50aC1jaGlsZCgyKSB7XFxyXFxuICB0b3A6IHZhcigtLWJvcmRlci13aWR0aCk7XFxyXFxuICBsZWZ0OiAwO1xcclxcblxcclxcbiAgd2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLWJvcmRlci13aWR0aCkpO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB2YXIoLS12ZXJ0aWNhbC1hbmdsZSksXFxyXFxuICAgICNmZmY5LFxcclxcbiAgICB0cmFuc3BhcmVudCBjYWxjKHZhcigtLXZlcnRpY2FsLWxlbmd0aCkgLSAycHgpXFxyXFxuICApO1xcclxcblxcclxcbiAgY2xpcC1wYXRoOiB2YXIoLS12ZXJ0aWNhbC1jbGlwLXBhdGgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb3Jpem9udGFsIEJvdHRvbSAqL1xcclxcbi5ib3JkZXItZWZmZWN0ID4gLmJvcmRlcjpudGgtY2hpbGQoMykge1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogdmFyKC0tYm9yZGVyLXdpZHRoKTtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdmFyKC0taG9yaXpvbnRhbC1yZXZlcnNlZC1hbmdsZSksXFxyXFxuICAgICNmZmY5LFxcclxcbiAgICB0cmFuc3BhcmVudCB2YXIoLS1ob3Jpem9udGFsLWxlbmd0aClcXHJcXG4gICk7XFxyXFxuXFxyXFxuICBjbGlwLXBhdGg6IHZhcigtLWhvcml6b250YWwtY2xpcC1wYXRoLXJldmVyc2VkKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogVmVydGljYWwgUmlnaHQgKi9cXHJcXG4uYm9yZGVyLWVmZmVjdCA+IC5ib3JkZXI6bnRoLWNoaWxkKDQpIHtcXHJcXG4gIGJvdHRvbTogdmFyKC0tYm9yZGVyLXdpZHRoKTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcblxcclxcbiAgd2lkdGg6IHZhcigtLWJvcmRlci13aWR0aCk7XFxyXFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIHZhcigtLWJvcmRlci13aWR0aCkpO1xcclxcblxcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICB2YXIoLS12ZXJ0aWNhbC1yZXZlcnNlZC1hbmdsZSksXFxyXFxuICAgICNmZmY5LFxcclxcbiAgICB0cmFuc3BhcmVudCBjYWxjKHZhcigtLXZlcnRpY2FsLWxlbmd0aCkgLSAycHgpXFxyXFxuICApO1xcclxcblxcclxcbiAgY2xpcC1wYXRoOiB2YXIoLS12ZXJ0aWNhbC1jbGlwLXBhdGgtcmV2ZXJzZWQpO1xcclxcbn1cXHJcXG5cIlxuXG4gIGNvbnN0IHN0eWxlc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpXG4gIHN0eWxlc2hlZXQucmVwbGFjZVN5bmMoY3NzKVxuXG4gIGV4cG9ydCBkZWZhdWx0IHN0eWxlc2hlZXRcbiAgIiwiaW1wb3J0IF8sIHsgYnVpbGRFbGVtZW50IGFzICQsIGJ1aWxkU2hhZG93SG9zdEVsZW1lbnQgYXMgJCQgfSBmcm9tICcuLi9mdW5jdGlvbmFsLWRvbS9pbmRleC5qcydcclxuaW1wb3J0IG1haW5TdHlsZVNoZWV0IGZyb20gJy4vbWFpbi5jc3MnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tQnV0dG9uKG9wdGlvbnMsIC4uLmNoaWxkcmVuKSB7XHJcbiAgY29uc3QgZWZmZWN0ID0gXy5kaXYoKVxyXG5cclxuICBjb25zdCBob3N0ID0gX1snY3VzdG9tLWJ1dHRvbiddKClcclxuICBob3N0LnJvbGUgPSAnYnV0dG9uJ1xyXG5cclxuICBsZXQgaXNFbmQgPSBmYWxzZVxyXG5cclxuICBsZXQgaXNQcmVzc2VkID0gZmFsc2VcclxuXHJcbiAgLy8gaG9zdC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgZXZlbnQgPT4ge1xyXG4gIC8vICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgLy8gICBpc0VuZCA9IGZhbHNlXHJcbiAgLy8gICBpc1ByZXNzZWQgPSB0cnVlXHJcblxyXG4gIC8vICAgZWZmZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3cnKVxyXG4gIC8vICAgZWZmZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3ctcmV2ZXJzZWQnKVxyXG4gIC8vIH0pXHJcblxyXG4gIGhvc3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBldmVudCA9PiB7XHJcbiAgICBpZiAoZXZlbnQuYnV0dG9uICE9PSAwKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlzRW5kID0gZmFsc2VcclxuICAgIGlzUHJlc3NlZCA9IHRydWVcclxuXHJcbiAgICBlZmZlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZ3JvdycpXHJcbiAgICBlZmZlY3QuY2xhc3NMaXN0LnJlbW92ZSgnZ3Jvdy1yZXZlcnNlZCcpXHJcblxyXG4gICAgLy8gVHJpZ2dlciBsYXlvdXQgdG8gY29tcHV0ZSBzdHlsZXNcclxuICAgIGVmZmVjdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgIGVmZmVjdC5jbGFzc0xpc3QuYWRkKCdncm93JylcclxuXHJcbiAgICBlZmZlY3Quc3R5bGUuc2V0UHJvcGVydHkoJy0teScsIGAke2V2ZW50Lm9mZnNldFl9cHhgKVxyXG4gICAgZWZmZWN0LnN0eWxlLnNldFByb3BlcnR5KCctLXgnLCBgJHtldmVudC5vZmZzZXRYfXB4YClcclxuXHJcbiAgICBjb25zdCBtYXhTaXplID0gTWF0aC5tYXgoaG9zdC5vZmZzZXRXaWR0aCwgaG9zdC5vZmZzZXRIZWlnaHQpXHJcblxyXG4gICAgZWZmZWN0LnN0eWxlLnNldFByb3BlcnR5KCctLXNpemUnLCBgJHttYXhTaXplfXB4YClcclxuXHJcbiAgICBjb25zdCBwb2ludGVyVXBMaXN0ZW5lciA9IGV2ZW50ID0+IHtcclxuICAgICAgaXNQcmVzc2VkID0gZmFsc2VcclxuXHJcbiAgICAgIGlmIChpc0VuZCkge1xyXG4gICAgICAgIGVmZmVjdC5jbGFzc0xpc3QucmVtb3ZlKCdncm93JylcclxuICAgICAgICBlZmZlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICBlZmZlY3QuY2xhc3NMaXN0LmFkZCgnZ3Jvdy1yZXZlcnNlZCcpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWZmZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGV2ZW50ID0+IHtcclxuICAgICAgICAgIGlmIChpc1ByZXNzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgZWZmZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2dyb3cnKVxyXG4gICAgICAgICAgZWZmZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICBlZmZlY3QuY2xhc3NMaXN0LmFkZCgnZ3Jvdy1yZXZlcnNlZCcpXHJcbiAgICAgICAgfSwge29uY2U6IHRydWV9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnBvaW50ZXJUeXBlID09PSAndG91Y2gnKSB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHBvaW50ZXJVcExpc3RlbmVyLCB7Y2FwdHVyZTogdHJ1ZSwgb25jZTogdHJ1ZX0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgcG9pbnRlclVwTGlzdGVuZXIsIHtjYXB0dXJlOiB0cnVlLCBvbmNlOiB0cnVlfSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICBlZmZlY3QuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZXZlbnQgPT4ge1xyXG4gICAgaXNFbmQgPSB0cnVlXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuICQkKGhvc3QsIG9wdGlvbnMsXHJcbiAgICB7XHJcbiAgICAgIGFkb3B0ZWRTdHlsZVNoZWV0czogW21haW5TdHlsZVNoZWV0XSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgXy5zbG90KCksXHJcbiAgICAgIF8uZGl2KHtjbGFzczogJ2VmZmVjdC13cmFwcGVyJ30sXHJcbiAgICAgICAgJChlZmZlY3QsIHtjbGFzczogJ3JpcHBsZS1lZmZlY3QnLCBhdHRyaWJ1dGVzOiB7cGFydDogJ3JpcHBsZS1lZmZlY3QnfX0pLFxyXG4gICAgICApXHJcbiAgICBdXHJcbiAgICB9LFxyXG4gICAgLi4uY2hpbGRyZW5cclxuICApXHJcbn1cclxuIiwiXG4gIGNvbnN0IGNzcyA9IFwiOmhvc3Qge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNmY7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxyXFxufVxcclxcblxcclxcbjpob3N0IHtcXHJcXG4gIC0tcmlwcGxlLWNvbG9yOiAjMDAwNztcXHJcXG59XFxyXFxuXFxyXFxuLmVmZmVjdC13cmFwcGVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGluc2V0OiAwO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcblxcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuXFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlwcGxlLWVmZmVjdCB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcblxcclxcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogdmFyKC0teSk7XFxyXFxuICBsZWZ0OiB2YXIoLS14KTtcXHJcXG5cXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmlwcGxlLWNvbG9yKTtcXHJcXG5cXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JvdyB7XFxyXFxuICBhbmltYXRpb246IGdyb3cgMC4ycyBlYXNlLW91dCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLmdyb3ctcmV2ZXJzZWQge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuNSk7XFxyXFxuXFxyXFxuICBhbmltYXRpb246IGdyb3cgMC4ycyBlYXNlLW91dCByZXZlcnNlIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGdyb3cge1xcclxcbiAgMCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIlxuXG4gIGNvbnN0IHN0eWxlc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpXG4gIHN0eWxlc2hlZXQucmVwbGFjZVN5bmMoY3NzKVxuXG4gIGV4cG9ydCBkZWZhdWx0IHN0eWxlc2hlZXRcbiAgIiwiaW1wb3J0IF8gZnJvbSBcIi4uLy4uL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IHNvcnRXaWxkQ2FyZFJvdXRlVG9FbmQgfSBmcm9tIFwiLi91dGlscy5qc1wiO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlZGVmIE5hdmlnYXRlUm91dGVcclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHBhdGhcclxuICogQHByb3BlcnR5IHsoKSA9PiBpbXBvcnQoXCIuLi8uLi9saWJzL2NvcmUuanNcIikuQ29yZU5vZGV9IGNvbXBvbmVudFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiBET01OYXZpZ2F0ZU9iamVjdFxyXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBjb21wb25lbnRcclxuICogQHByb3BlcnR5IHsocGF0aG5hbWU6IHN0cmluZykgPT4gdm9pZH0gdXBkYXRlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge05hdmlnYXRlUm91dGVbXX0gbmF2aWdhdGVSb3V0ZXMgXHJcbiAqIEByZXR1cm5zIHtET01OYXZpZ2F0ZU9iamVjdH1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERPTU5hdmlnYXRlKG5hdmlnYXRlUm91dGVzKSB7XHJcbiAgY29uc3QgY29tcG9uZW50ID0gX1snZG9tLW5hdmlnYXRlJ10oKVxyXG5cclxuICBuYXZpZ2F0ZVJvdXRlcyA9IHNvcnRXaWxkQ2FyZFJvdXRlVG9FbmQobmF2aWdhdGVSb3V0ZXMpICBcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbXBvbmVudCxcclxuXHJcbiAgICB1cGRhdGUocGF0aG5hbWUpIHtcclxuICAgICAgbGV0IHJlbmRlckNvbXBvbmVudCA9IG51bGxcclxuXHJcbiAgICAgIGZvciAoY29uc3Qgcm91dGUgb2YgbmF2aWdhdGVSb3V0ZXMpIHtcclxuICAgICAgICBpZiAocm91dGUucGF0aCA9PT0gcGF0aG5hbWUpIHtcclxuICAgICAgICAgIHJlbmRlckNvbXBvbmVudCA9IHJvdXRlLmNvbXBvbmVudFxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyb3V0ZS5wYXRoID09PSAnKicpIHtcclxuICAgICAgICAgIHJlbmRlckNvbXBvbmVudCA9IHJvdXRlLmNvbXBvbmVudFxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbXBvbmVudC5yZXBsYWNlQ2hpbGRyZW4oKVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiByZW5kZXJDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICBjb21wb25lbnQuYXBwZW5kKHJlbmRlckNvbXBvbmVudCgpKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwYXRjaEN1c3RvbU5hdmlnYXRlKCkge1xyXG4gIGNvbnN0IGN1c3RvbU5hdmlnYXRlID0gbmV3IEN1c3RvbUV2ZW50KCdjdXN0b20tbmF2aWdhdGUnLCB7ZGV0YWlsOiBudWxsfSlcclxuICB3aW5kb3cuZGlzcGF0Y2hFdmVudChjdXN0b21OYXZpZ2F0ZSlcclxufVxyXG5cclxuLy8gRmlyZSBgY3VzdG9tLW5hdmlnYXRlYCBldmVudCBvbiBgbG9hZGBcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBldmVudCA9PiB7XHJcbiAgZGlzcGF0Y2hDdXN0b21OYXZpZ2F0ZSgpXHJcbn0sIHtvbmNlOiB0cnVlfSlcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBldmVudCA9PiB7XHJcbiAgZGlzcGF0Y2hDdXN0b21OYXZpZ2F0ZSgpXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbiA9IHtcclxuXHJcbiAgZ2V0IHN0YXRlKCkge1xyXG4gICAgcmV0dXJuIGhpc3Rvcnkuc3RhdGVcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFxyXG4gICAqIEBwYXJhbSB7SGlzdG9yeVsnc3RhdGUnXX0gW3N0YXRlPW51bGxdIFxyXG4gICAqL1xyXG4gIHJlcGxhY2UodXJsLCBzdGF0ZSA9IG51bGwpIHtcclxuICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHN0YXRlLCAnJywgdXJsKVxyXG4gICAgZGlzcGF0Y2hDdXN0b21OYXZpZ2F0ZSgpXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBcclxuICAgKiBAcGFyYW0ge0hpc3RvcnlbJ3N0YXRlJ119IFtzdGF0ZT1udWxsXSBcclxuICAgKi9cclxuICBwdXNoKHVybCwgc3RhdGUgPSBudWxsKSB7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgJycsIHVybClcclxuICAgIGRpc3BhdGNoQ3VzdG9tTmF2aWdhdGUoKVxyXG4gIH0sXHJcblxyXG4gIGZvcndhcmQoKSB7XHJcbiAgICBoaXN0b3J5LmZvcndhcmQoKVxyXG4gIH0sXHJcblxyXG4gIGJhY2soKSB7XHJcbiAgICBoaXN0b3J5LmJhY2soKVxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7J2N1c3RvbS1uYXZpZ2F0ZSd9IGV2ZW50VHlwZSBcclxuICAgKiBAcGFyYW0geyhldmVudDogQ3VzdG9tRXZlbnQpID0+IHZvaWR9IGNhbGxiYWNrTGlzdGVuZXIgXHJcbiAgICovXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGNhbGxiYWNrTGlzdGVuZXIpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgY2FsbGJhY2tMaXN0ZW5lcilcclxuICB9XHJcblxyXG59XHJcbiIsIi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtpbXBvcnQoXCIuL2luZGV4LmpzXCIpLk5hdmlnYXRlUm91dGVbXX0gcm91dGVzIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRXaWxkQ2FyZFJvdXRlVG9FbmQocm91dGVzKSB7XHJcbiAgY29uc3Qgc29ydGVkUm91dGVzID0gWy4uLnJvdXRlc10uc29ydCgoYSwgYikgPT4gYS5wYXRoID09PSAnKicgPyAxIDogYi5wYXRoID09PSAnKicgPyAtMSA6IDApXHJcbiAgcmV0dXJuIHNvcnRlZFJvdXRlc1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG1haW5TdHlsZVNoZWV0IGZyb20gJy4vc3R5bGVzL21haW4uY3NzJ1xyXG5pbXBvcnQgXywge2J1aWxkRWxlbWVudCBhcyAkLCBidWlsZFNoYWRvd0hvc3RFbGVtZW50IGFzICQkfSBmcm9tICcuL2Z1bmN0aW9uYWwtZG9tL2luZGV4LmpzJ1xyXG5pbXBvcnQgeyBDb29sQm9yZGVyIH0gZnJvbSAnLi9Db29sQm9yZGVyL2luZGV4LmpzJ1xyXG5pbXBvcnQgeyBDdXN0b21CdXR0b24gfSBmcm9tICcuL0N1c3RvbUJ1dHRvbi9pbmRleC5qcydcclxuaW1wb3J0IERPTU5hdmlnYXRlLCB7IG5hdmlnYXRpb24gfSBmcm9tICcuL2Z1bmN0aW9uYWwtZG9tL2NvbXBvbmVudHMvZG9tLW5hdmlnYXRlL2luZGV4LmpzJ1xyXG5cclxuZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzID0gW21haW5TdHlsZVNoZWV0XVxyXG5cclxuY29uc3Qgcm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcqJyxcclxuICAgIGNvbXBvbmVudDogZnVuY3Rpb24gTm90Rm91bmQoKSB7XHJcbiAgICAgIHJldHVybiBfLmRpdih7c3R5bGU6IHt3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnIzkwMCcsIGRpc3BsYXk6ICdncmlkJywgcGxhY2VJdGVtczogJ2NlbnRlcid9fSwgJ05PVCBGT1VORCcpXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIFJvb3QoKSB7XHJcbiAgICAgIHJldHVybiBfLmRpdih7Y2xhc3M6ICdyb290J30sICdUaGUgcm9vdCBvZiB0aGluZ3MnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9zb25pYycsXHJcbiAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIFNvbmljKCkge1xyXG4gICAgICByZXR1cm4gX1snc29uaWMtcCddKHt9LFxyXG4gICAgICAgICdTb25pYycsXHJcbiAgICAgICAgXy5kaXYoe2NsYXNzOiAnc3RhdGUnfSwgYFN0YXRlIHZhbHVlIG9mIHRoaXMgcGF0aDogJHtKU09OLnN0cmluZ2lmeShuYXZpZ2F0aW9uLnN0YXRlKX1gKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL2FteScsXHJcbiAgICBjb21wb25lbnQ6IENhcmRzQ29udGFpbmVyLFxyXG4gIH0sXHJcbl1cclxuXHJcbmNvbnN0IE5hdmlnYXRlID0gRE9NTmF2aWdhdGUocm91dGVzKVxyXG5cclxubmF2aWdhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjdXN0b20tbmF2aWdhdGUnLCBldmVudCA9PiB7XHJcbiAgTmF2aWdhdGUudXBkYXRlKGxvY2F0aW9uLnBhdGhuYW1lKVxyXG59KVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIHJldHVybiBfLmRpdih7ZGF0YXNldDoge2lkOiAnYXBwJ319LFxyXG4gICAgXy5kaXYoe2RhdGFzZXQ6IHtpZDogJ2FwcC1jb250ZW50J319LFxyXG4gICAgICBBc2lkZSgpLFxyXG4gICAgICBNYWluKCksXHJcbiAgICApXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBc2lkZSgpIHtcclxuICByZXR1cm4gXy5hc2lkZSh7Y2xhc3M6ICdhc2lkZS1jb21wb25lbnQnfSxcclxuICAgIF8uJG1hcCg2LCBpbmRleCA9PiBfLmRpdih7Y2xhc3M6ICdpdGVtJ30sIGluZGV4ICsgMSkpXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBNYWluKCkge1xyXG4gIGNvbnN0IHNvbmljQnRuID0gQ3VzdG9tQnV0dG9uKClcclxuICBzb25pY0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IG5hdmlnYXRpb24ucHVzaCgnL3NvbmljJywgJ1ByaW5jZXNzIEVsaXNlJykpXHJcblxyXG4gIGNvbnN0IGFteUJ0biA9IEN1c3RvbUJ1dHRvbigpXHJcbiAgYW15QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gbmF2aWdhdGlvbi5wdXNoKCcvYW15JykpXHJcblxyXG4gIGNvbnN0IHJvb3RCdG4gPSBDdXN0b21CdXR0b24oKVxyXG4gIHJvb3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBuYXZpZ2F0aW9uLnB1c2goJy8nKSlcclxuXHJcbiAgY29uc3Qgbm90Rm91bmRCdG4gPSBDdXN0b21CdXR0b24oKVxyXG4gIG5vdEZvdW5kQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gbmF2aWdhdGlvbi5wdXNoKCcvQG5vdC1mb3VuZCcpKVxyXG5cclxuICByZXR1cm4gXy5tYWluKHtjbGFzczogJ21haW4tY29tcG9uZW50J30sXHJcbiAgICBDb29sQm9yZGVyKHt0YWdOYW1lOiAnaDEnLCBjbGFzczogJ3RpdGxlLWJvcmRlci13cmFwcGVyJ30sXHJcbiAgICAgIF8uZGl2KHtjbGFzczogJ3RpdGxlJ30sICdTb21lIGNvb2wgdGl0bGUnKVxyXG4gICAgKSxcclxuXHJcbiAgICAkKE5hdmlnYXRlLmNvbXBvbmVudCwge2NsYXNzOiAnbmF2aWdhdGUtY29tcG9uZW50J30pLFxyXG5cclxuICAgIFR5cGVTb25pYygpLFxyXG5cclxuICAgICQoc29uaWNCdG4sIHtjbGFzczogJ2J0bicsIHN0eWxlOiB7YmFja2dyb3VuZENvbG9yOiAnIzA0YSd9fSwgJ0dvIHRvIFNvbmljJyksXHJcbiAgICAkKGFteUJ0biwge2NsYXNzOiAnYnRuJywgc3R5bGU6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjYjRiJ319LCAnR28gdG8gQW15JyksXHJcbiAgICAkKHJvb3RCdG4sIHtjbGFzczogJ2J0bicsIHN0eWxlOiB7YmFja2dyb3VuZENvbG9yOiAnIzA5MCd9fSwgJ0dvIHRvIFJvb3QnKSxcclxuICAgICQobm90Rm91bmRCdG4sIHtjbGFzczogJ2J0bicsIHN0eWxlOiB7YmFja2dyb3VuZENvbG9yOiAnIzIyMid9fSwgJ0dvIHRvIGFueSBOb3QgRm91bmQnKSxcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFR5cGVTb25pYygpIHtcclxuICBjb25zdCB0eXBlRWZmZWN0ID0gVHlwZUVmZmVjdCgpXHJcblxyXG4gIGNvbnN0IGJ0biA9IEN1c3RvbUJ1dHRvbigpXHJcblxyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgIHR5cGVFZmZlY3QuaW5pdEFuaW1hdGlvbignU29uaWMgVGhlIEhlZGdlaG9nJywgMTAwKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiBfKFxyXG4gICAgJCh0eXBlRWZmZWN0LmNvbXBvbmVudCwge2NsYXNzOiAndHlwZS1lZmZlY3QtY29tcG9uZW50J30pLFxyXG4gICAgJChidG4sXHJcbiAgICAgIHtjbGFzczogJ2J0bicsIHN0eWxlOiB7YWxpZ25TZWxmOiAnZmxleC1zdGFydCd9fSxcclxuICAgICAgJ0NsaWNrIE1lJ1xyXG4gICAgKSxcclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIENhcmRzQ29udGFpbmVyKCkge1xyXG4gIHJldHVybiBfLmRpdih7Y2xhc3M6ICdjYXJkcy1jb250YWluZXInfSxcclxuICAgIF8uJG1hcCgzLCAoKSA9PiBfLmRpdih7Y2xhc3M6ICdjYXJkJ30sXHJcbiAgICAgICAgXy5kaXYoe2NsYXNzOiAndGl0bGUnfSwgJ0NhcmQgVGl0bGUnKSxcclxuICAgICAgICBfLmRpdih7Y2xhc3M6ICdjb250ZW50J30sICdNeSBwZXJmZWN0IGNvbnRlbnRcXG4nLnJlcGVhdCg0KSlcclxuICAgICAgKVxyXG4gICAgKSxcclxuICApXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBUeXBlRWZmZWN0KCkge1xyXG4gIGNvbnN0IHBsYWNlaG9sZGVyRm9yRW1wdHlTdHJpbmcgPSAoKSA9PiBfLnByZSh7YXR0cmlidXRlczogeydhcmlhLWhpZGRlbic6IHRydWV9fSwgJyAnKVxyXG4gIGNvbnN0IGNvbXBvbmVudCA9IF9bJ3R5cGUtZWZmZWN0J10oe2NsYXNzOiAndHlwZS1lZmZlY3QtY29tcG9uZW50Jywgc3R5bGU6IHtsaW5lSGVpZ2h0OiAnMS4zZW0nfX0sIHBsYWNlaG9sZGVyRm9yRW1wdHlTdHJpbmcoKSlcclxuXHJcbiAgbGV0IGlcclxuICBsZXQgdGltZW91dEFuaW1hdGlvblxyXG5cclxuICBmdW5jdGlvbiBhbmltKHRleHQsIGRlbGF5KSB7XHJcbiAgICBjb21wb25lbnQuaW5uZXJUZXh0ID0gdGV4dC5zbGljZSgwLCBpKVxyXG5cclxuICAgIGlmICgrK2kgPiB0ZXh0Lmxlbmd0aCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aW1lb3V0QW5pbWF0aW9uID0gc2V0VGltZW91dChhbmltLCBkZWxheSwgLi4uYXJndW1lbnRzKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbXBvbmVudCxcclxuICAgIGluaXRBbmltYXRpb24odGV4dCA9ICdObyBUZXh0IFRvIFR5cGUnLCBkZWxheSA9IDEwMCkge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dEFuaW1hdGlvbilcclxuICAgICAgaSA9IDFcclxuXHJcbiAgICAgIGNvbXBvbmVudC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICBjb21wb25lbnQuYXBwZW5kKHBsYWNlaG9sZGVyRm9yRW1wdHlTdHJpbmcoKSlcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoYW5pbSwgZGVsYXksIC4uLmFyZ3VtZW50cylcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlciA9IF8oXHJcbiAgQXBwKCksXHJcbilcclxuXHJcbmRvY3VtZW50LmJvZHkucmVwbGFjZUNoaWxkcmVuKClcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKHJlbmRlcilcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9