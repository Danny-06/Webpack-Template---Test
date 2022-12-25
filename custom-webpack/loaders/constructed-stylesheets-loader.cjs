
module.exports = function cssAsTextLoader(content, map, meta) {
  return `
  const css = ${JSON.stringify(content)}

  const stylesheet = new CSSStyleSheet()
  stylesheet.replaceSync(css)

  export default stylesheet
  `
}
