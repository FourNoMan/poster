const search = (dataList = [], params = [], value = '') => {
  let newList = dataList.filter((item) => {
    return params.some((param) => {
      return item[param].indexOf(value.trim()) >= 0
    })
  })
  return newList
}
export default search
