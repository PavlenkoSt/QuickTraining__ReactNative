import { useEffect, useRef, useState } from 'react'
import useTimerSong from './useTimerSong'

type useHoldExPropsType = {
  needCount?: number
  isTest?: boolean
}

const useHoldEx = ({ needCount, isTest }: useHoldExPropsType) => {
  const [time, setTime] = useState(() => (needCount && !isTest ? needCount : 0))

  const timer = useRef<any>()

  const { playSong, vibrate } = useTimerSong()

  useEffect(() => {
    if (!isTest) {
      if (time === 3) {
        playSong()
      }
      if (time === 0) {
        vibrate()
        stopTimer()
      }
    }
  }, [time, playSong])

  const startTimer = () => {
    if (timer.current) {
      stopTimer()
    }

    timer.current = setInterval(
      () => setTime((prev) => (needCount && !isTest ? prev - 1 : prev + 1)),
      1000
    )
  }

  const stopTimer = () => {
    clearInterval(timer.current)
    timer.current = null
  }

  useEffect(() => {
    return () => stopTimer()
  }, [])

  return { time, timer, startTimer, stopTimer }
}

export default useHoldEx
