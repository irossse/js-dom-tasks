export default () => {
  // BEGIN
  document.addEventListener('click', (event) =>{
    const clickedTab = event.target.closest('[data-bs-toggle="tab"], [data-bs-toggle="pill"]')
    
    if (!clickedTab) {
      return;
    }
    event.preventDefault()
    if (clickedTab.classList.contains('active')) {
      return;
    }

    const rowContainer = clickedTab.closest('.row')
    if (!rowContainer) {
      return
    }
    const currentActiveTab = rowContainer.querySelector('.nav-link.active')
    if (currentActiveTab) {
      currentActiveTab.classList.remove('active')
    }
    clickedTab.classList.add('active')

    const currentActivePane = rowContainer.querySelector('.tab-pane.active')
    if (currentActivePane) {
      currentActivePane.classList.remove('active')
    }

    const targetSelector = clickedTab.dataset.bsTarget
    const targetPane = rowContainer.querySelector(targetSelector)

    if (targetPane) {
      targetPane.classList.add('active')
    }
  })
  // END
};
