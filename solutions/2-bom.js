// BEGIN
export default (url) =>{

  window.location.assign(url)
  return `${navigator.appCodeName}/${navigator.appVersion} ${url}`
}
// END