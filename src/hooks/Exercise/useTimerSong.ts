import { useCallback, useMemo } from 'react'
import { Vibration } from 'react-native'
import Sound from 'react-native-sound'

const useTimerSong = () => {
  const timerSong = useMemo(() => new Sound('timer.mp3'), [])

  const playSong = useCallback(() => {
    timerSong.play()
  }, [timerSong])

  const vibrate = useCallback(() => {
    Vibration.vibrate(1500)
  }, [])

  return { vibrate, playSong }
}

export default useTimerSong
