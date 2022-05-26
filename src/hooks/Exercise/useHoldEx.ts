import { useEffect, useRef, useState } from 'react'

type useHoldExPropsType = {
  needCount?: number
  isTest?: boolean
}

const useHoldEx = ({ needCount, isTest }: useHoldExPropsType) => {
  const [time, setTime] = useState(() => (needCount && !isTest ? needCount : 0))

  const timer = useRef<any>()

  useEffect(() => {
    if (time === 0) {
      stopTimer()
    }
  }, [time])

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

  return { time, timer, startTimer, stopTimer }
}

export default useHoldEx
