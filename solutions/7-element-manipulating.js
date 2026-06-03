import camelCase from 'lodash/camelCase';

// BEGIN
const toCamelCase = (className) => {
  const parts = className.split('-')

  return parts
    .map((part, index) => (
      index === 0
        ? part
        : part[0].toUpperCase() + part.slice(1)
    ))
    .join('')
}

export default (document) => {
  const elements = document.body.getElementsByTagName('*');
  [...elements].forEach((element) => {
    [...element.classList].forEach((className) => {
      const normalized = toCamelCase(className)

      if (normalized !== className) {
        element.classList.replace(className, normalized)
      }
    })
  })
}
// END