import { useEffect, useRef, useState } from 'react'
import useTimerSong from './useTimerSong'

type useRelaxExPropsType = {
  relaxDelation: number
  toNextExercise: () => void
}

const useRelaxEx = ({ relaxDelation, toNextExercise }: useRelaxExPropsType) => {
  const [relax, setRelax] = useState(() => relaxDelation)

  const relaxTimer = useRef<any>(null)

  const { playSong, vibrate } = useTimerSong()

  const startRelaxTimer = () => {
    relaxTimer.current = setInterval(() => {
      setRelax((prev) => {
        if (prev === 4) {
          playSong()
        }
        if (prev === 1) {
          vibrate()
        }
        return prev - 1
      })
    }, 1000)
  }

  const clearRelaxTimer = () => {
    clearInterval(relaxTimer.current)
    relaxTimer.current = null
  }

  useEffect(() => {
    if (relax <= 0) {
      clearRelaxTimer()
      toNextExercise()
    }
  }, [relax])

  useEffect(() => {
    return () => clearRelaxTimer()
  }, [])

  return { relax, relaxTimer, startRelaxTimer, clearRelaxTimer }
}

export default useRelaxEx
