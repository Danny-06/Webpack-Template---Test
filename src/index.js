import mainStyleSheet from './styles/main.css'
import _, {buildElement as $, buildShadowHostElement as $$} from './functional-dom/index.js'
import { CoolBorder } from './CoolBorder/index.js'
import { CustomButton } from './CustomButton/index.js'
import DOMNavigate from './functional-dom/components/dom-navigate/index.js'
import { navigation } from './functional-dom/components/dom-navigate/navigation.js'
import { Link } from './functional-dom/components/dom-navigate/Link.js'

document.adoptedStyleSheets = [mainStyleSheet]

const routes = [
  {
    path: '*',
    component: function NotFound() {
      const style = {width: '100%', height: '100%', backgroundColor: '#900', display: 'grid', placeItems: 'center'}
      return _.div({style}, 'NOT FOUND')
    }
  },
  {
    path: '/',
    component: function Root() {
      return _.div({class: 'root'}, 'The root of things')
    }
  },
  {
    path: '/sonic',
    component: function Sonic() {
      return _['sonic-p']({},
        'Sonic',
        _.div({class: 'state'}, `State value of this path: ${JSON.stringify(navigation.state)}`)
      )
    }
  },
  {
    path: '/amy',
    component: CardsContainer,
  },
]

const Navigate = DOMNavigate(routes)

navigation.addEventListener('custom-navigate', event => {
  Navigate.update(event.detail.path)
})

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
    _.$map(6, index => Link({class: 'item', href: `#index${index + 1}`}, index + 1))
  )
}

function Main() {
  return _.main({class: 'main-component'},
    CoolBorder({tagName: 'h1', class: 'title-border-wrapper'},
      _.div({class: 'title'}, 'Some cool title')
    ),

    $(Navigate.component, {class: 'navigate-component'}),

    TypeSonic(),

    Link({href: '/sonic', state: 'Princess Elise'},
      CustomButton({noBtn: true, style: {backgroundColor: '#04a'}}, 'Go to Sonic'),
    ),
    Link({href: '/amy'},
      CustomButton({noBtn: true, style: {backgroundColor: '#b4b'}}, 'Go to Amy'),
    ),
    Link({href: '/'},
      CustomButton({noBtn: true, style: {backgroundColor: '#090'}}, 'Go to Root'),
    ),
    Link({href: '/@not-found'},
      CustomButton({noBtn: true, style: {backgroundColor: '#222'}}, 'Go to any Not Found'),
    ),
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
      {style: {alignSelf: 'flex-start'}},
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
  const placeholderForEmptyString = () => _.pre({attributes: {'aria-hidden': true}}, ' ')
  const component = _['type-effect']({class: 'type-effect-component', style: {lineHeight: '1.3em'}}, placeholderForEmptyString())

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

      timeoutAnimation = setTimeout(anim, delay, ...arguments)
    }
  }
}

const render = _(
  App(),
)

document.body.replaceChildren()

document.body.append(render)
