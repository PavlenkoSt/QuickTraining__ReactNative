import { IUser } from 'src/RealmDB/schemas/User'
import { ExerciseType } from 'src/types/ExerciseTypes'

const calculateExerciseReply = (
  exCoefficient: number,
  coefficientProgress: number,
  typeExercise: ExerciseType,
  index: number,
  user: IUser | null
) => {
  if (!user) return 0

  const maxReplyExType =
    typeExercise === ExerciseType.PUSH
      ? user.pushUpMax
      : typeExercise === ExerciseType.LEGS
      ? user.sitUpMax
      : typeExercise === ExerciseType.CORE
      ? user.plankMax
      : typeExercise === ExerciseType.PULL
      ? user.pullUpMax
      : 0

  const clearReplies = exCoefficient * maxReplyExType

  const diffPercent = 10

  const difference = ((clearReplies * diffPercent) / 100) * (index + 1)

  const result = (clearReplies - difference) * coefficientProgress

  const fixedResultByType =
    typeExercise === ExerciseType.PUSH && result < 5
      ? 5
      : typeExercise === ExerciseType.LEGS && result < 10
      ? 10
      : typeExercise === ExerciseType.CORE && result < 10
      ? 10
      : typeExercise === ExerciseType.PULL && result < 3
      ? 3
      : result

  return Math.ceil(fixedResultByType)
}

export default calculateExerciseReply
