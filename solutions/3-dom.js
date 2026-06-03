// BEGIN
const content = document.body.innerHTML.trim()

const lines = content.split('\n')

document.body.innerHTML = lines
  .map((line) => `<p>${line.trim()}</p>`).join('')
// END