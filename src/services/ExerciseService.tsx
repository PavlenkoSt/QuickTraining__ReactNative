import { IExercisesTree } from 'src/types/ExerciseTypes'
import generateExerciseTree from 'src/utilts/generateExerciseTree'

class ExerciseService {
  exercisesTree: IExercisesTree = generateExerciseTree()

  constructor() {}
}

export default new ExerciseService()
