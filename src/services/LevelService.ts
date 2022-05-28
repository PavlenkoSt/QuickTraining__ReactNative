enum TestExercisesEnum {
  pushUps,
  sitUps,
  plank,
  pullUps,
}

class LevelService {
  levels = [
    {
      level: 'Frail',
      percent: 10,
    },
    {
      level: 'Newbie',
      percent: 20,
    },
    {
      level: 'Pretty',
      percent: 30,
    },
    {
      level: 'Beachgoer',
      percent: 40,
    },
    {
      level: 'Toughie',
      percent: 50,
    },
    {
      level: 'Athlete',
      percent: 60,
    },
    {
      level: 'Gladiator',
      percent: 70,
    },
    {
      level: 'Viking',
      percent: 80,
    },
    {
      level: 'Cossack',
      percent: 90,
    },
    {
      level: 'Sensei',
      percent: 100,
    },
  ]

  maxTargetValues = [
    { ex: TestExercisesEnum.pushUps, max: 100 },
    { ex: TestExercisesEnum.sitUps, max: 500 },
    { ex: TestExercisesEnum.plank, max: 1800 },
    { ex: TestExercisesEnum.pullUps, max: 50 },
  ]

  constructor() {}

  calculatePercent(pushUps: number, sitUps: number, plank: number, pullUps?: number) {
    const pushUpsMax = this.maxTargetValues[0].max
    const sitUpsMax = this.maxTargetValues[1].max
    const plankMax = this.maxTargetValues[2].max
    const pullUpsMax = this.maxTargetValues[3].max

    const pushUpsPercent = (pushUps * 100) / pushUpsMax
    const sitUpsPercent = (sitUps * 100) / sitUpsMax
    const plankPercent = (plank * 100) / plankMax
    const pullUpsPercent = pullUps !== undefined ? (pullUps * 100) / pullUpsMax : null

    const calcCommonPercent = pullUpsPercent
      ? (pushUpsPercent + sitUpsPercent + plankPercent + pullUpsPercent) / 4
      : (pushUpsPercent + sitUpsPercent + plankPercent) / 3

    return calcCommonPercent > 100 ? 100 : calcCommonPercent
  }

  getLabelByPercent(percent: number) {
    const level = this.levels.find((level) => {
      const diff = level.percent - percent
      return diff < 10 && diff >= 0
    })

    if (level) return level.level

    return ''
  }
}

export default new LevelService()
