import { ITrainingHistoryDayExercisesDB } from 'src/RealmDB/schemas/TrainingHistory'
import { ExecutionExerciseEnum } from 'src/types/ExerciseTypes'

type generateTestResultsForDailyHistoryPropsType = {
  pushUpMax: number
  sitUpMax: number
  plankMax: number
  pullUpMax: number | null
}

const generateTestResultsForDailyHistory = ({
  pushUpMax,
  sitUpMax,
  plankMax,
  pullUpMax,
}: generateTestResultsForDailyHistoryPropsType) => {
  const resultsForDailyHistory: ITrainingHistoryDayExercisesDB[] = [
    {
      name: 'Push ups',
      type: ExecutionExerciseEnum.REPEAT,
      result: pushUpMax,
    },
    {
      name: 'Sit ups',
      type: ExecutionExerciseEnum.REPEAT,
      result: sitUpMax,
    },
    {
      name: 'Plank',
      type: ExecutionExerciseEnum.HOLD,
      result: plankMax,
    },
  ]

  if (!!pullUpMax) {
    return [
      ...resultsForDailyHistory,
      {
        name: 'Pull ups',
        result: pullUpMax,
        type: ExecutionExerciseEnum.REPEAT,
      },
    ] as ITrainingHistoryDayExercisesDB[]
  }

  return resultsForDailyHistory
}

export default generateTestResultsForDailyHistory
