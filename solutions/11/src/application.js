import 'whatwg-fetch';

export default () => {
  // BEGIN
const inputs = document.querySelectorAll('[data-autocomplete]')


  inputs.forEach((input) =>{
    const urlBase = input.dataset.autocomplete
    const name = input.dataset.autocompleteName


  
    const list = document.querySelector(
      `ul[data-autocomplete-name="${name}"]`
    );

    input.addEventListener('input', async (e) =>{

      const value = e.target.value

      const url = new URL(urlBase, window.location.origin)
      url.searchParams.set('search', value)

      const response = await fetch(url)
      const data = await response.json()


      list.innerHTML = ''


      if (data.length === 0) {
        const li = document.createElement('li')
        li.textContent = 'Nothing'
        list.appendChild(li)
        return;
      }


      data.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item
        list.appendChild(li)
      })
    })
  })
  // END
};
