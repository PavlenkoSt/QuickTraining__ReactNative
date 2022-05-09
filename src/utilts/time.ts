const time = {
  addZeroIfNeed: (num: number) => {
    if (num < 10) {
      return `0${num}`
    }
    return `${num}`
  },
  fromSecondsToMinutesAndSeconds: (value: number | string) => {
    if (typeof value === 'string') {
      return value
    }

    const minutes = Math.floor(value / 60)
    const seconds = value - minutes * 60

    return { minutes: time.addZeroIfNeed(minutes), seconds: time.addZeroIfNeed(seconds) }
  },
}

export default time
