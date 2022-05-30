const checkArrayValuesDifferenceMoreThan = (array: number[], needDifference = 3) => {
  let min: number | undefined
  let max: number | undefined

  for (let i = 0; i < array.length; i++) {
    if (min !== undefined && max !== undefined) {
      if (array[i] < min) {
        min = array[i]
      }

      if (array[i] > max) {
        max = array[i]
      }

      if (max - min >= needDifference) {
        break
      }
    } else {
      min = array[i]
      max = array[i]
    }
  }

  return max !== undefined && min !== undefined && max - min >= needDifference
}

export default checkArrayValuesDifferenceMoreThan
