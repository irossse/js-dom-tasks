// BEGIN
export default (root) => {

  const paragraphs = root.getElementsByTagName('p')
  return [...paragraphs].map((p) => p.textContent.trim())
}
// END