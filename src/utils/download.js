const download = (src = '', name) => {
  let a = document.createElement('a')
  a.href = src
  a.download = name
  a.click()
}
export default download
