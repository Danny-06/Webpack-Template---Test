
module.exports = function txtLoader(content, map, meta) {
  return `export default ${JSON.stringify(content)}`
}
