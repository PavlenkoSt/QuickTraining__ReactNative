const chunk = (array: any[], size: number) => {
  let arrayChunks = []

  for (let i = 0; i < array.length; i += size) {
    let arrayChunk = array.slice(i, i + size)
    arrayChunks.push(arrayChunk)
  }

  return arrayChunks
}

export default chunk
