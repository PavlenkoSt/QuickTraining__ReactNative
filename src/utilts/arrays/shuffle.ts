const shuffle = (list: any[]) => {
  return list.sort(() => Math.round(Math.random() * 100) - 50)
}

export default shuffle
