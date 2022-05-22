import useRealmUser from 'src/hooks/Realm/useRealmUser'
import { ExerciseType } from 'src/types/ExerciseTypes'

const calculateExerciseReply = (
  exCoefficient: number,
  typeExercise: ExerciseType,
  index: number
) => {
  const { user } = useRealmUser()

  if (!user) return 0

  const maxReplyExType =
    typeExercise === ExerciseType.PUSH
      ? user.pushUpMax
      : typeExercise === ExerciseType.LEGS
      ? user.sitUpMax
      : typeExercise === ExerciseType.CORE
      ? user.plankMax
      : 0

  const clearReplies = exCoefficient * maxReplyExType

  const diffPercent = 10

  const difference = ((clearReplies * diffPercent) / 100) * (index + 1)

  const result = clearReplies - difference

  return result < 20 ? 20 : Math.ceil(result)
}

export default calculateExerciseReply
