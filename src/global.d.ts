// https://www.typescriptlang.org/docs/handbook/modules.html

declare module '*.css'{
  const stylesheet: CSSStyleSheet
  export default stylesheet
}

declare module '*.html'{
  const htmlContent:  {
    documentFragment: DocumentFragment
    clone(ownerDocument?: Document): DocumentFragment
  }
  export default htmlContent
}

declare module '*.txt'{
  const text: string
  export default text
}
