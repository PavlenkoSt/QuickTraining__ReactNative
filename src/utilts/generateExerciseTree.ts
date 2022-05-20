import {
  ExecutionExerciseEnum,
  ExerciseTargetMuscle,
  ExerciseTrainingPart,
  IExercisesTree,
} from 'src/types/ExerciseTypes'

// man video
const pushUpVid = require('src/assets/videos/ex/push-up.mp4')

// woman video

const generateExerciseTree = (): IExercisesTree => {
  return {
    man: [
      {
        id: 0,
        name: 'Push ups',
        video: pushUpVid,
        execution: ExecutionExerciseEnum.REPEAT,
        targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
        forTrainingPart: ExerciseTrainingPart.MAIN,
        needInventar: null,
        max: 200,
      },
      {
        id: 1,
        name: 'Sit ups',
        video: pushUpVid,
        execution: ExecutionExerciseEnum.REPEAT,
        targetMuscles: [ExerciseTargetMuscle.BUTT, ExerciseTargetMuscle.HIPS],
        forTrainingPart: ExerciseTrainingPart.MAIN,
        needInventar: null,
        max: 500,
      },
      {
        id: 2,
        name: 'Plank',
        video: pushUpVid,
        execution: ExecutionExerciseEnum.HOLD,
        targetMuscles: [ExerciseTargetMuscle.CORE],
        forTrainingPart: ExerciseTrainingPart.MAIN,
        needInventar: null,
        max: 1800,
      },
    ],
    woman: [
      {
        id: 0,
        name: 'Push ups',
        video: pushUpVid,
        execution: ExecutionExerciseEnum.REPEAT,
        targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
        forTrainingPart: ExerciseTrainingPart.MAIN,
        needInventar: null,
        max: 200,
      },
      {
        id: 1,
        name: 'Sit ups',
        video: pushUpVid,
        execution: ExecutionExerciseEnum.REPEAT,
        targetMuscles: [ExerciseTargetMuscle.BUTT, ExerciseTargetMuscle.HIPS],
        forTrainingPart: ExerciseTrainingPart.MAIN,
        needInventar: null,
        max: 500,
      },
      {
        id: 2,
        name: 'Plank',
        video: pushUpVid,
        execution: ExecutionExerciseEnum.HOLD,
        targetMuscles: [ExerciseTargetMuscle.CORE],
        forTrainingPart: ExerciseTrainingPart.MAIN,
        needInventar: null,
        max: 1800,
      },
    ],
  }
}

export default generateExerciseTree
