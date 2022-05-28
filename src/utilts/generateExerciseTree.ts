import {
  ExecutionExerciseEnum,
  ExerciseTargetMuscle,
  ExerciseType,
  IExercisesTree,
} from 'src/types/ExerciseTypes'

// man video
const pushUpVid = require('src/assets/videos/ex/push-up.mp4')

// woman video

const generateExerciseTree = (): IExercisesTree => {
  return {
    man: {
      [ExerciseType.PUSH]: [
        {
          id: 0,
          name: 'Push ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
          needInventar: null,
          type: ExerciseType.PUSH,
          coefficientDifficult: 1,
          awailableForPercent: 0,
          max: 100,
        },
        {
          id: 1,
          name: 'Narrow push ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
          needInventar: null,
          type: ExerciseType.PUSH,
          coefficientDifficult: 0.7,
          awailableForPercent: 0,
        },
        {
          id: 2,
          name: 'Wide push ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
          needInventar: null,
          type: ExerciseType.PUSH,
          coefficientDifficult: 1,
          awailableForPercent: 0,
        },
        {
          id: 3,
          name: 'Bowman push ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
          needInventar: null,
          type: ExerciseType.PUSH,
          coefficientDifficult: 0.7,
          awailableForPercent: 10,
        },
        {
          id: 4,
          name: 'France push ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
          needInventar: null,
          type: ExerciseType.PUSH,
          coefficientDifficult: 0.6,
          awailableForPercent: 10,
        },
        {
          id: 5,
          name: 'France push ups with jumping',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
          needInventar: null,
          type: ExerciseType.PUSH,
          coefficientDifficult: 0.6,
          awailableForPercent: 20,
        },
        {
          id: 6,
          name: 'Mismatch push ups with jumping',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
          needInventar: null,
          type: ExerciseType.PUSH,
          coefficientDifficult: 0.6,
          awailableForPercent: 20,
        },
      ],
      [ExerciseType.LEGS]: [
        {
          id: 0,
          name: 'Sit ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.BUTT, ExerciseTargetMuscle.HIPS],
          needInventar: null,
          type: ExerciseType.LEGS,
          coefficientDifficult: 1,
          awailableForPercent: 0,
          max: 500,
        },
      ],
      [ExerciseType.CORE]: [
        {
          id: 0,
          name: 'Plank',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.HOLD,
          targetMuscles: [ExerciseTargetMuscle.CORE],
          needInventar: null,
          type: ExerciseType.CORE,
          coefficientDifficult: 1,
          awailableForPercent: 0,
          max: 1800,
        },
      ],
      [ExerciseType.PULL]: [
        {
          id: 0,
          name: 'Pull ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.BICEPS, ExerciseTargetMuscle.BACK],
          needInventar: null,
          type: ExerciseType.PULL,
          coefficientDifficult: 1,
          awailableForPercent: 0,
          max: 50,
        },
      ],
    },
    woman: {
      [ExerciseType.PUSH]: [
        {
          id: 0,
          name: 'Push ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.TRICEPS, ExerciseTargetMuscle.CHEST],
          needInventar: null,
          type: ExerciseType.PUSH,
          coefficientDifficult: 1,
          awailableForPercent: 0,
          max: 100,
        },
      ],
      [ExerciseType.LEGS]: [
        {
          id: 0,
          name: 'Sit ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.BUTT, ExerciseTargetMuscle.HIPS],
          needInventar: null,
          type: ExerciseType.LEGS,
          coefficientDifficult: 1,
          awailableForPercent: 0,
          max: 500,
        },
      ],
      [ExerciseType.CORE]: [
        {
          id: 0,
          name: 'Plank',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.HOLD,
          targetMuscles: [ExerciseTargetMuscle.CORE],
          needInventar: null,
          type: ExerciseType.CORE,
          coefficientDifficult: 1,
          awailableForPercent: 0,
          max: 1200,
        },
      ],
      [ExerciseType.PULL]: [
        {
          id: 0,
          name: 'Pull ups',
          video: pushUpVid,
          execution: ExecutionExerciseEnum.REPEAT,
          targetMuscles: [ExerciseTargetMuscle.BICEPS, ExerciseTargetMuscle.BACK],
          needInventar: null,
          type: ExerciseType.PULL,
          coefficientDifficult: 1,
          awailableForPercent: 0,
          max: 50,
        },
      ],
    },
  }
}

export default generateExerciseTree
