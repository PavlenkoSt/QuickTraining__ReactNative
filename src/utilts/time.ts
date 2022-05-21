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
  timeFormat: (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const sec = seconds - minutes * 60

    return `${time.addZeroIfNeed(minutes)}:${time.addZeroIfNeed(sec)}`
  },
}

export default time
