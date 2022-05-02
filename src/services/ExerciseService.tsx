import { IExercisesTree } from 'src/types/ExerciseTypes'
import generateExerciseTree from 'src/utilts/generateExerciseTree'

class ExerciseService {
  exercisesTree: IExercisesTree | null = null

  constructor() {
    this.exercisesTree = generateExerciseTree()
  }
}

export default new ExerciseService()
