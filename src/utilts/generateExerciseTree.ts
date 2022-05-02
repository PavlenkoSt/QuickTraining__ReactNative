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
        {
          id: 1,
          name: 'Sit ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.BUTT, ExerciseTargetMuscle.HIPS],
          forTrainingPart: ExerciseTrainingPart.MAIN,
          needInventar: null,
          min: 10,
          max: 50,
        },
        {
          id: 2,
          name: 'Plank',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.HOLD,
          targetMuscles: [ExerciseTargetMuscle.BUTT, ExerciseTargetMuscle.HIPS],
          forTrainingPart: ExerciseTrainingPart.MAIN,
          needInventar: null,
          min: 10,
          max: 300,
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
