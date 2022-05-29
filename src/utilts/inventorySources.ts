import { InventarNeedForExerciseEnum } from 'src/types/ExerciseTypes'

const inventorySources = {
  [InventarNeedForExerciseEnum.BAR]: require('src/assets/imgs/inventary/bar.jpg'),
  [InventarNeedForExerciseEnum.BARS]: require('src/assets/imgs/inventary/bars.jpg'),
  [InventarNeedForExerciseEnum.POWER_TAPE]: require('src/assets/imgs/inventary/power-tape.jpg'),
  [InventarNeedForExerciseEnum.SKIPPING_ROPE]: require('src/assets/imgs/inventary/skipping-rope.jpg'),
  [InventarNeedForExerciseEnum.STANDS]: require('src/assets/imgs/inventary/stands.jpg'),
  [InventarNeedForExerciseEnum.WALL_BAR]: require('src/assets/imgs/inventary/wallbar.jpg'),
  [InventarNeedForExerciseEnum.WIDE_TAPE]: require('src/assets/imgs/inventary/wide-tape.jpg'),
}

export default inventorySources
