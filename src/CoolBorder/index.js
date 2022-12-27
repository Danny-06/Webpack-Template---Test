import _, { buildElement as $} from '../functional-dom/index.js'
import stylesheet from './main.css'

/**
 * @template T
 * @typedef CoolBorderOptionsDef
 * @property {T extends keyof HTMLElementTagNameMap ? T : string} [tagName="div"]
 */

/**
 * @template T
 * @typedef {CoolBorderOptionsDef<T> & import('../functional-dom/libs/core').FunctionalDOMProperties} CoolBorderOptions
 */

/**
 * @template T
 * @param {CoolBorderOptions<T>} options
 * @param  {...HTMLElement} children 
 * @returns {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : HTMLElement}
 */
export function CoolBorder(options, ...children) {
  const {tagName = 'div'} = options ?? {}

  const shadowRootContent = _.div({class: 'wrapper-border-effect _grid-overlay_'}, 
    _.div({class: 'my-content'},
      _.slot(),
    ),
    _.div({class: 'border-effect'},
      _.div({class: 'border'}),
      _.div({class: 'border'}),
      _.div({class: 'border'}),
      _.div({class: 'border'}),
    )
  )

  const wrapper = _.$[tagName](null, {
    adoptedStyleSheets: [stylesheet],
    children: [shadowRootContent]
  })

  return $(wrapper, options, ...children)
}
