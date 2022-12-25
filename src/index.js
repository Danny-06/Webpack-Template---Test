import mainStyleSheet from './styles/main.css'
import _, {buildElement as $} from './functional-dom/index.js'
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

function TypeSonic() {
  const typeEffect = TypeEffect()

  const btn = _.button()

  btn.addEventListener('click', event => {
    typeEffect.initAnimation('Sonic The Hedgehog', 100)
  })

  return _(
    $(typeEffect.component, {class: 'type-effect-component'}),
    $(btn,
      {class: 'btn', style: {alignSelf: 'flex-start', backgroundColor: '#06f', padding: '1rem', borderRadius: '0.3em'}},
      'Click Me'
    ),
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
