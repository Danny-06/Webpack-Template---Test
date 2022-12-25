
module.exports = function htmlDocumentFragmentLoader(content, map, meta) {
  return `
  function queryDeclarativeTemplatesShadowDOM(documentFragment) {
    const templates = [...documentFragment.querySelectorAll('template[shadowroot]:first-child')]
  
    templates.forEach(template => {
      const innerTemplates = queryDeclarativeTemplatesShadowDOM(template.content)
      templates.push(...innerTemplates)
    })
  
    return templates
  }

  function parseDeclarativeShadowDOM(hostElement) {
    if (!hostElement) {
      throw new Error(\`HostElement not found for declarative shadow DOM\`)
    }
  
    const template = hostElement.querySelector(':scope > template[shadowroot]:first-child')
  
    const hasTemplate = template != null
  
    if (!hasTemplate) return false
  
    template.remove()
  
    const mode = template.getAttribute('shadowroot')
  
    const shadowRoot = hostElement.attachShadow({mode})
    shadowRoot.append(template.content)
  
    return shadowRoot
  }

  function parseMultipleDeclarativeShadowDOM(element) {
    const templates = queryDeclarativeTemplatesShadowDOM(element)
  
    const shadowRoots = templates.map(template => parseDeclarativeShadowDOM(template.parentElement))
  
    return shadowRoots
  }

  function turnStringIntoTrustedHTML(htmlString) {
    if (!window.trustedTypes) {
      return htmlString
    }

    const trustedHTMLPolicy = trustedTypes.createPolicy('trustedHTML', {createHTML: string => string})
    return trustedHTMLPolicy.createHTML(htmlString)
  }

  const html = ${JSON.stringify(content)}

  const trustedHTML = turnStringIntoTrustedHTML(html)

  const htmlDoc = document.implementation.createHTMLDocument()

  const documentFragment = htmlDoc.createRange().createContextualFragment(trustedHTML)

  export default {
    documentFragment: documentFragment.cloneNode(true),

    clone(ownerDocument = null) {
      const clonedDF = documentFragment.cloneNode(true)
      parseMultipleDeclarativeShadowDOM(clonedDF)

      if (ownerDocument instanceof Document) {
        ownerDocument.adoptNode(clonedDF)
      }

      return clonedDF
    }
  }
  `
}
