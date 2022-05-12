import { useRef, useState } from 'react'

const useHoldEx = () => {
  const [time, setTime] = useState(0)

  const timer = useRef<any>()

  const startTimer = () => {
    if (timer.current) {
      stopTimer()
    }

    timer.current = setInterval(() => setTime((prev) => prev + 1), 1000)
  }

  const stopTimer = () => {
    clearInterval(timer.current)
    timer.current = null
  }

  return { time, timer, startTimer, stopTimer }
}

export default useHoldEx
