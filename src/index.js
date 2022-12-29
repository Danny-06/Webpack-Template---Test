import mainStyleSheet from './styles/main.css'
import _, {buildElement as $, buildShadowHostElement as $$} from './functional-dom/index.js'
import { CoolBorder } from './CoolBorder/index.js'
import { CustomButton } from './CustomButton/index.js'
import DOMNavigate, { navigation } from './functional-dom/components/dom-navigate/index.js'

document.adoptedStyleSheets = [mainStyleSheet]


navigation.setRoot(location.href)

const Navigate = DOMNavigate({class: 'navigate-component'}, [
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
    component: function Amy() {
      return _['amy-p']({}, 'Amy')
    }
  },
])

navigation.addEventListener('custom-navigate', event => {
  Navigate.update()
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
    _.$map(6, index => _.div({class: 'item'}, index + 1))
  )
}

function Main() {
  const sonicBtn = CustomButton()
  sonicBtn.addEventListener('click', event => navigation.push('/sonic', 'Princess Elise'))

  const amyBtn = CustomButton()
  amyBtn.addEventListener('click', event => navigation.push('/amy'))

  const rootBtn = CustomButton()
  rootBtn.addEventListener('click', event => navigation.push('/'))

  return _.main({class: 'main-component'},
    CoolBorder({tagName: 'h1', class: 'title-border-wrapper'},
      _.div({class: 'title'}, 'Some cool title')
    ),
    CardsContainer(),

    TypeSonic(),

    $(sonicBtn, {class: 'btn', style: {backgroundColor: '#04a'}}, 'Go to Sonic'),
    $(amyBtn, {class: 'btn', style: {backgroundColor: '#b4b'}}, 'Go to Amy'),
    $(rootBtn, {class: 'btn', style: {backgroundColor: '#090'}}, 'Go to Root'),

    Navigate.component,
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
  const placeholderForEmptyString = () => _.pre({}, ' ')
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

      setTimeout(anim, delay, ...arguments)
    }
  }
}

const render = _(
  App(),
)

document.body.replaceChildren()

document.body.append(render)
