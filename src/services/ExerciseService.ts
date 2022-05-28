import { ExerciseType } from 'src/types/ExerciseTypes'
import { GenderEnum } from 'src/RealmDB/schemas/User'
import { IExercise, IExercisesTree } from 'src/types/ExerciseTypes'
import generateExerciseTree from 'src/utilts/generateExerciseTree'
import chunk from 'src/utilts/arrays/chunk'
import shuffle from 'src/utilts/arrays/shuffle'

export interface IDay {
  status: IStatus
  exercises: IExercise[]
  restTime: number
}

export type WeekPlanType = IDay[] | 'test'[] | 'rest'[]

export enum IStatus {
  INCOMPLETE = 'INCOMPLETE',
  COMPLETE = 'COMPLETE',
}

class ExerciseService {
  exercisesTree: IExercisesTree = generateExerciseTree()

  weekPlan: WeekPlanType | null = null

  constructor() {}

  autogeneratePlan(currentPercent: number, gender: GenderEnum, withBar?: boolean) {
    const key = gender === GenderEnum.Male ? 'man' : 'woman'

    const awailableExercises = this.filterExercisesByPercentLevel(currentPercent, key, withBar)

    return this.buildWeekPlan(awailableExercises)
  }

  private filterExercisesByPercentLevel(percent: number, key: 'man' | 'woman', withBar?: boolean) {
    return {
      [ExerciseType.PUSH]: this.exercisesTree[key][ExerciseType.PUSH].filter(
        (exercise) => percent >= exercise.awailableForPercent
      ),
      [ExerciseType.LEGS]: this.exercisesTree[key][ExerciseType.LEGS].filter(
        (exercise) => percent >= exercise.awailableForPercent
      ),
      [ExerciseType.CORE]: this.exercisesTree[key][ExerciseType.CORE].filter(
        (exercise) => percent >= exercise.awailableForPercent
      ),
      [ExerciseType.PULL]: withBar
        ? this.exercisesTree[key][ExerciseType.PULL].filter(
            (exercise) => percent >= exercise.awailableForPercent
          )
        : null,
    }
  }

  private buildWeekPlan(awailableExercises: {
    [ExerciseType.PUSH]: IExercise[]
    [ExerciseType.LEGS]: IExercise[]
    [ExerciseType.CORE]: IExercise[]
    [ExerciseType.PULL]: IExercise[] | null
  }) {
    const countOfExerciseEachType = {
      [ExerciseType.PUSH]: 6,
      [ExerciseType.LEGS]: 6,
      [ExerciseType.CORE]: 6,
      [ExerciseType.PULL]: 6,
    }

    const numberOfPortionsAWeek = 2

    const pushElems = this.divineExerciseArrayToPortions(
      this.selectExercisesForWeekPlan(
        awailableExercises[ExerciseType.PUSH],
        countOfExerciseEachType[ExerciseType.PUSH]
      ),
      Math.ceil(countOfExerciseEachType[ExerciseType.PUSH] / numberOfPortionsAWeek)
    )

    const legsElems = this.divineExerciseArrayToPortions(
      this.selectExercisesForWeekPlan(
        awailableExercises[ExerciseType.LEGS],
        countOfExerciseEachType[ExerciseType.LEGS]
      ),
      Math.ceil(countOfExerciseEachType[ExerciseType.LEGS] / numberOfPortionsAWeek)
    )

    const coreElems = this.divineExerciseArrayToPortions(
      this.selectExercisesForWeekPlan(
        awailableExercises[ExerciseType.CORE],
        countOfExerciseEachType[ExerciseType.CORE]
      ),
      Math.ceil(countOfExerciseEachType[ExerciseType.CORE] / numberOfPortionsAWeek)
    )

    const pullElems = awailableExercises[ExerciseType.PULL]
      ? this.divineExerciseArrayToPortions(
          this.selectExercisesForWeekPlan(
            //@ts-ignore
            awailableExercises[ExerciseType.PULL],
            countOfExerciseEachType[ExerciseType.PULL]
          ),
          Math.ceil(countOfExerciseEachType[ExerciseType.PULL] / numberOfPortionsAWeek)
        )
      : null

    if (pullElems) {
      const plan = Array(7)
        .fill('#')
        .map((emptyItem, i) => {
          if (i === 2 || i === 5) return 'rest'

          if (i === 6) return 'test'

          if (i === 0) {
            return {
              exercises: shuffle([...pushElems[0], ...legsElems[0]]),
              restTime: 90,
              status: IStatus.INCOMPLETE,
            } as IDay
          }

          if (i === 1) {
            return {
              exercises: shuffle([...pullElems[0], ...coreElems[0]]),
              restTime: 120,
              status: IStatus.INCOMPLETE,
            } as IDay
          }

          if (i === 3) {
            return {
              exercises: shuffle([...pullElems[1], ...coreElems[1]]),
              restTime: 150,
              status: IStatus.INCOMPLETE,
            } as IDay
          }

          if (i === 4) {
            return {
              exercises: shuffle([...pushElems[1], ...legsElems[1]]),
              restTime: 180,
              status: IStatus.INCOMPLETE,
            } as IDay
          }
        })

      return plan
    } else {
      const plan = Array(7)
        .fill('#')
        .map((emptyItem, i) => {
          if (i === 1 || i === 3 || i === 5) return 'rest'

          if (i === 6) return 'test'

          if (i === 0) {
            return {
              exercises: shuffle([...pushElems[0], ...legsElems[0]]),
              restTime: 90,
              status: IStatus.INCOMPLETE,
            } as IDay
          }

          if (i === 2) {
            return {
              exercises: shuffle([...pushElems[1], ...coreElems[0]]),
              restTime: 120,
              status: IStatus.INCOMPLETE,
            } as IDay
          }

          if (i === 4) {
            return {
              exercises: shuffle([...legsElems[1], ...coreElems[1]]),
              restTime: 150,
              status: IStatus.INCOMPLETE,
            } as IDay
          }
        })

      return plan
    }
  }

  private selectExercisesForWeekPlan(awailableExercises: IExercise[], count: number) {
    if (awailableExercises.length > count) {
      return this.getRandomExercises(awailableExercises, count)
    } else if (awailableExercises.length < count) {
      return this.stackExecises(awailableExercises, count)
    } else {
      return awailableExercises
    }
  }

  private getRandomExercises(awailableExercises: IExercise[], count: number) {
    let awailableExercisesMutable = awailableExercises
    const randomExercisesResult: IExercise[] = []

    Array(count)
      .fill('#')
      .forEach((item) => {
        const randomPos = Math.floor(Math.random() * awailableExercisesMutable.length)

        randomExercisesResult.push(awailableExercisesMutable[randomPos])
        awailableExercisesMutable = awailableExercisesMutable.filter((item, i) => i !== randomPos)
      })

    return randomExercisesResult
  }

  private stackExecises(awailableExercises: IExercise[], count: number) {
    const multiplyCount = count / awailableExercises.length
    const lost = count % awailableExercises.length

    if (multiplyCount >= 2) {
      const floorMultiplyCount = Math.floor(multiplyCount)

      const result: IExercise[] = []

      Array(floorMultiplyCount)
        .fill('#')
        .forEach((item) => result.push(...awailableExercises))

      if (lost > 0) {
        result.push(...this.getRandomExercises(awailableExercises, count))
      }

      return result
    } else {
      const needRandomElements = count - awailableExercises.length

      return [
        ...awailableExercises,
        ...this.getRandomExercises(awailableExercises, needRandomElements),
      ]
    }
  }

  private divineExerciseArrayToPortions(exercises: IExercise[], portions: number) {
    const elemsInPorion = Math.ceil(exercises.length / portions)

    return chunk(exercises, elemsInPorion)
  }

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
