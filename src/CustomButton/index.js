import _, { buildElement as $, buildShadowHostElement as $$ } from '../functional-dom/index.js'
import mainStyleSheet from './main.css'

/**
 * 
 * @param {import('../functional-dom/libs/core.js').FunctionalDOMProperties} [options] 
 * @param  {...import('../functional-dom/libs/core.js').CoreNode} children 
 * @returns 
 */
export function CustomButton(options, ...children) {
  const host = _['custom-button']()
  host.role = 'button'

  const effect = _.div()

  
  let isPressed = false
  let isEnd = false

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
