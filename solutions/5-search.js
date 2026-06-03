export default (document) => {
  // BEGIN
  const title = document.querySelector('.content > h1').textContent.trim()
  const description = document.querySelector('.description').textContent.trim()
  const items = [...document.querySelectorAll('.links > div')].map((item) => ({
    title: item.querySelector('a').textContent.trim(),
    description: item.querySelector('p').textContent.trim(),
  }))

  return {
    title,
    description,
    items,
  }
  // END
};
