export default () => {
  // BEGIN
  const button = document.getElementById('alert-generator')
  const alertsContainer = document.querySelector('.alerts')

  let counter = 0

  button.addEventListener('click', () => {
    counter += 1

    const alertElement = document.createElement('div')
    alertElement.classList.add('alert', 'alert-primary')
    alertElement.textContent = `Alert ${counter}`

    alertsContainer.prepend(alertElement)
  })
  // END
};