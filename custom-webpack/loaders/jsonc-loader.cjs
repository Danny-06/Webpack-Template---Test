
module.exports = function jsoncLoader(content, map, meta) {
  /**
   * 
   * @param {string} jsonString 
   * @returns {string}
   */
  function removeCommentsInJSON(jsonString) {
    return jsonString.replace(/\/\*[^]*\*\//g, '').replace(/\/\/.*/g, '')
  }

  const jsonWithoutComments = removeCommentsInJSON(content)

  return `${jsonWithoutComments}`
}
