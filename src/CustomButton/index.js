import _, { buildElement as $, buildShadowHostElement as $$ } from '../functional-dom/index.js'
import mainStyleSheet from './main.css'

/**
 * @typedef CustomButtonPropertiesDef
 * @property {boolean} [noBtn=false] Remove button role and functionality if set to `true`
 */

/**
 * @typedef {import('../functional-dom/libs/core.js').FunctionalDOMProperties & CustomButtonPropertiesDef} CustomButtonProperties
 */

/**
 * 
 * @param {CustomButtonProperties} [options] 
 * @param  {...import('../functional-dom/libs/core.js').Children} children 
 * @returns 
 */
export function CustomButton(options, ...children) {
  const {noBtn} = options ?? {}

  const host = _['custom-button']()

  // If `noBtn` is not specified, add button role and functionality
  if (!noBtn) {
    host.role = 'button'
    host.tabIndex = 0

    // Add support for `Space` key

    let isSpacePressed = false

    host.addEventListener('keydown', event => {
      if (event.code !== 'Space' || isSpacePressed) {
        return
      }

      isSpacePressed = true

      host.dispatchEvent(new CustomEvent('pointerdown'))
    })

    host.addEventListener('keyup', event => {
      if (event.code !== 'Space') {
        return
      }

      isSpacePressed = false

      host.dispatchEvent(new Event('click'))
      host.dispatchEvent(new CustomEvent('pointerup'))
    })

    // Add support for `Enter` key
    host.addEventListener('keydown', event => {
      if (event.code !== 'Enter') {
        return
      }

      host.dispatchEvent(new Event('click'))
      host.dispatchEvent(new CustomEvent('pointerdown'))
    })

    host.addEventListener('keyup', event => {
      if (event.code !== 'Enter') {
        return
      }

      host.dispatchEvent(new CustomEvent('pointerup'))
    })
  }

  const effect = _.div()

  let isPressed = false
  let isEnd = false

  host.addEventListener('pointerdown', /**@type {() => {}} */ event => {
    if (event.button !== 0 && !(event instanceof CustomEvent)) {
      return
    }

    isEnd = false
    isPressed = true

    effect.classList.remove('grow')
    effect.classList.remove('grow-reversed')

    // Trigger layout to compute styles
    effect.getBoundingClientRect()

    effect.classList.add('grow')

    if (event instanceof CustomEvent) {
      effect.style.setProperty('--x', `${host.offsetWidth / 2}px`)
      effect.style.setProperty('--y', `${host.offsetHeight / 2}px`)
    } else {
      effect.style.setProperty('--x', `${event.offsetX}px`)
      effect.style.setProperty('--y', `${event.offsetY}px`)
    }

    const maxSize = Math.max(host.offsetWidth, host.offsetHeight)

    effect.style.setProperty('--size', `${maxSize}px`)

    const abortController = new AbortController()
    const signal = abortController.signal

    const pointerUpListener = event => {
      abortController.abort()

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

    window.addEventListener('dragend', pointerUpListener, {capture: true, once: true, signal})

    if (event.pointerType === 'touch') {
      window.addEventListener('touchend', pointerUpListener, {capture: true, once: true, signal})
    } else {
      window.addEventListener('pointerup', pointerUpListener, {capture: true, once: true, signal})
    }
  })

  effect.addEventListener('animationend', event => {
    isEnd = true
  })

  return $$(host, options,
    {
      adoptedStyleSheets: [mainStyleSheet],
      children: [
      _.slot(),
      _.div({class: 'effect-wrapper'},
        $(effect, {class: 'ripple-effect', attributes: {part: 'ripple-effect'}}),
      )
    ]
    },
    ...children
  )
}
