import mainStyleSheet from './styles/main.css'
import _, {buildElement as $, buildShadowHostElement as $$} from './functional-dom/index.js'
import { CoolBorder } from './CoolBorder/index.js'

document.adoptedStyleSheets = [mainStyleSheet]


function App() {
  return _.div({dataset: {id: 'app'}},
    _.div({dataset: {id: 'app-content'}},
      Aside(),
      Main(),
    )
  )
}

function Aside() {
  return _.aside({class: 'aside-component'},
    _.$map(6, index => _.div({class: 'item'}, index + 1))
  )
}

function Main() {
  return _.main({class: 'main-component'},
    CoolBorder({tagName: 'h1', class: 'title-border-wrapper'},
      _.div({class: 'title'}, 'Some cool title')
    ),
    CardsContainer(),

    TypeSonic(),
  )
}

function CustomButton(options, ...children) {
  const style = _.style({}, // css
    `
    :host {
      position: relative;
      overflow: hidden;

      background-color: #06f;
      padding: 1rem;
      border-radius: 0.3em;
    }

    :host {
      --ripple-color: #0007;
    }

    .effect-wrapper {
      position: absolute;
      inset: 0;
      margin: auto;

      pointer-events: none;

      overflow: hidden;
    }

    .effect {
      opacity: 0;

      width: var(--size);
      height: var(--size);

      position: absolute;
      top: var(--y);
      left: var(--x);

      transform: translate(-50%, -50%) scale(0);      

      border-radius: 50%;
      background-color: var(--ripple-color);
      
      transition: transform 0.2s;
    }

    .grow {
      animation: grow 0.2s ease-out forwards;
    }

    .grow-reversed {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.5);

      animation: grow 0.2s ease-out reverse forwards;
    }

    @keyframes grow {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
      }

      100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1.5);
      }
    }
    `
  )

  const effect = _.div()

  const host = _['custom-button']()

  let isEnd = false

  let isPressed = false

  host.addEventListener('pointerdown', event => {
    isEnd = false
    isPressed = true

    effect.classList.remove('grow')
    effect.classList.remove('grow-reversed')

    effect.getBoundingClientRect()

    effect.classList.add('grow')

    effect.style.setProperty('--y', `${event.offsetY}px`)
    effect.style.setProperty('--x', `${event.offsetX}px`)

    const maxSize = Math.max(host.offsetWidth, host.offsetHeight)

    effect.style.setProperty('--size', `${maxSize}px`)
  })

  window.addEventListener('pointerup', event => {
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
  }, {capture: true})

  effect.addEventListener('animationend', event => {
    isEnd = true
  })

  return $$(host, options,
    {children: [
      style,
      _.slot(),
      _.div({class: 'effect-wrapper'},
        $(effect, {class: 'effect'}),
      )
    ]},
    ...children
  )
}

function TypeSonic() {
  const typeEffect = TypeEffect()

  const btn = CustomButton()

  btn.addEventListener('click', event => {
    typeEffect.initAnimation('Sonic The Hedgehog', 100)
  })

  return _(
    $(typeEffect.component, {class: 'type-effect-component'}),
    $(btn,
      {class: 'btn', style: {alignSelf: 'flex-start'}},
      'Click Me'
    ),
    CustomButton({}, 'Button'),
  )
}

function CardsContainer() {
  return _.div({class: 'cards-container'},
    _.$map(3, () => _.div({class: 'card'},
        _.div({class: 'title'}, 'Card Title'),
        _.div({class: 'content'}, 'My perfect content\n'.repeat(4))
      )
    ),
  )
}


function TypeEffect() {
  const placeholderForEmptyString = () => _.div({style: {height: '1em'}})
  const component = _['type-effect']({class: 'type-effect-component', style: {lineHeight: '1em'}}, placeholderForEmptyString())

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

const render = _(
  App(),
)

document.body.append(render)
