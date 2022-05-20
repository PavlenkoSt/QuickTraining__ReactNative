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

export enum InventarNeedForExerciseEnum {
  BAR = 'haveBar',
  BARS = 'haveBars',
  POWER_TAPE = 'havePowerTape',
  SKIPPING_ROPE = 'haveSkippingRope',
  STANDS = 'haveStands',
  WALL_BAR = 'haveWallBar',
  WIDE_TAPE = 'haveWideTape',
}

export enum ExerciseType {
  PULL = 'PULL',
  PUSH = 'PUSH',
  CORE = 'CORE',
  LEGS = 'LEGS',
}

export interface IExercise {
  id: number
  name: string
  video: NodeRequire
  execution: ExecutionExerciseEnum
  targetMuscles: ExerciseTargetMuscle[]
  needInventar: InventarNeedForExerciseEnum | null
  type: ExerciseType
  coefficientDifficult: number
  awailableForPercent: number
  max?: number
}

export interface IExercisesTree {
  man: IExercise[]
  woman: IExercise[]
}
