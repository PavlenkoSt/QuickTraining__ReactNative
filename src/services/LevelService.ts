enum TestExercisesEnum {
  pushUps,
  sitUps,
  plank,
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
    { ex: TestExercisesEnum.sitUps, max: 300 },
    { ex: TestExercisesEnum.plank, max: 1800 },
  ]

  constructor() {}

  calculatePercent(pushUps: number, sitUps: number, plank: number) {
    const pushUpsMax = this.maxTargetValues[0].max
    const sitUpsMax = this.maxTargetValues[1].max
    const plankMax = this.maxTargetValues[2].max

    const pushUpsPercent = (pushUps * 100) / pushUpsMax
    const sitUpsPercent = (sitUps * 100) / sitUpsMax
    const plankPercent = (plank * 100) / plankMax

    return (pushUpsPercent + sitUpsPercent + plankPercent) / 3
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
