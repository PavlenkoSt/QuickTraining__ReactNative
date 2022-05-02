import {
  ExecutionExerciseEnum,
  ExerciseLevel,
  ExerciseTargetMuscle,
  ExerciseTrainingPart,
  IExercisesTree,
} from 'src/types/ExerciseTypes'

const pushUpVid = require('src/assets/videos/ex/push-up.mp4')

const generateExerciseTree = (): IExercisesTree => {
  return {
    man: {
      [ExerciseLevel.LOW]: [
        {
          id: 0,
          name: 'Push ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
          forTrainingPart: ExerciseTrainingPart.MAIN,
          needInventar: null,
          min: 10,
          max: 30,
        },
      ],
      [ExerciseLevel.MEDIUM]: [],
      [ExerciseLevel.HARD]: [],
    },
    women: {
      [ExerciseLevel.LOW]: [],
      [ExerciseLevel.MEDIUM]: [],
      [ExerciseLevel.HARD]: [],
    },
  }
}

export default generateExerciseTree
