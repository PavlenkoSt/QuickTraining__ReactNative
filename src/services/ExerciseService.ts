import { ExerciseType } from './../types/ExerciseTypes'
import { GenderEnum } from 'src/RealmDB/schemas/User'
import { IExercise, IExercisesTree } from 'src/types/ExerciseTypes'
import generateExerciseTree from 'src/utilts/generateExerciseTree'

interface IDay {
  status: IStatus
  exercises: IExercise[]
  restTime: number
}

type WeekPlanType = IDay | 'test'[] | 'rest'[]

enum IStatus {
  INCOMPLETE = 'INCOMPLETE',
  COMPLETE = 'COMPLETE',
}

class ExerciseService {
  exercisesTree: IExercisesTree = generateExerciseTree()

  weekPlan: WeekPlanType | null = null

  constructor() {
    // get week plan from realm
  }

  autogeneratePlan(currentPercent: number, gender: GenderEnum, withBar?: boolean) {
    const key = gender === GenderEnum.Male ? 'man' : 'woman'

    // const availableExercises = this.exercisesTree[key].filter(
    //   (ex) => currentPercent >= ex.awailableForPercent
    // )

    let plan: WeekPlanType = []

    // need to save in db last exercise id each type and find a biggest then it
    // + case if more big is not found
    // + case if db is empty

    if (withBar) {
    } else {
      Array(7)
        .fill('#')
        .forEach((item, i) => {})
    }
  }

  getAllExercisesByType() {}

  getTestExercises(gender: GenderEnum, withBar?: boolean) {
    const path = this.exercisesTree[gender === GenderEnum.Male ? 'man' : 'woman']

    if (withBar) {
      return [
        path[ExerciseType.PUSH][0],
        path[ExerciseType.LEGS][0],
        path[ExerciseType.CORE][0],
        path[ExerciseType.PULL][0],
      ]
    } else {
      return [path[ExerciseType.PUSH][0], path[ExerciseType.LEGS][0], path[ExerciseType.CORE][0]]
    }
  }
}

export default new ExerciseService()
