import _, { buildElement as $, buildShadowHostElement as $$ } from '../functional-dom/index.js'
import mainStyleSheet from './main.css'


let isEnd = false
let isPressed = false


export function CustomButton(options, ...children) {
  const host = _['custom-button']()
  host.role = 'button'

  const effect = _.div()

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
