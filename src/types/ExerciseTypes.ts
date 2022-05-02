export enum ExerciseLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export enum ExecutionExerciseEnum {
  REPEAT = 'repeat',
  HOLD = 'hold',
}

export enum ExerciseTargetMuscle {
  CORE = 'core',
  BICEPS = 'biceps',
  TRICEPS = 'triceps',
  SHOULDERS = 'shoulders',
  CHEST = 'chest',
  BACK = 'back',
  BUTT = 'butt',
  HIPS = 'hips',
  SHINS = 'shins',
}

export enum ExerciseTrainingPart {
  WARM_UP = 'warm_up',
  MAIN = 'main',
  END = 'end',
}

export enum InventarNeedForExerciseEnum {
  BAR = 'haveBar',
  BARS = 'haveBars',
  POWER_TAPE = 'havePowerTape',
  SKIPPING_ROPE = 'haveSkippingRope',
  STANDS = 'haveStands',
  WALL_BAR = 'haveWallBar',
  WIDE_TAPE = 'haveWideTape',
}

export interface IExercise {
  id: number
  name: string
  video: NodeRequire
  execution: ExecutionExerciseEnum
  targetMuscles: ExerciseTargetMuscle[]
  forTrainingPart: ExerciseTrainingPart
  needInventar: InventarNeedForExerciseEnum | null
  min: number
  max: number
}

export interface IExercisesTree {
  man: {
    low: IExercise[]
    medium: IExercise[]
    hard: IExercise[]
  }
  women: {
    low: IExercise[]
    medium: IExercise[]
    hard: IExercise[]
  }
}
