import { useEffect, useRef, useState } from 'react'

type useRelaxExPropsType = {
  relaxDelation: number
  toNextExercise: () => void
}

const useRelaxEx = ({ relaxDelation, toNextExercise }: useRelaxExPropsType) => {
  const [relax, setRelax] = useState(() => relaxDelation)

  const relaxTimer = useRef<any>(null)

  const startRelaxTimer = () => {
    relaxTimer.current = setInterval(() => {
      setRelax((prev) => prev - 1)
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

  return { relax, relaxTimer, startRelaxTimer }
}

export default useRelaxEx
