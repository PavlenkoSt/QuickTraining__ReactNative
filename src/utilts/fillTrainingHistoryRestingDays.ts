import { ITrainingHistoryDayDB } from 'src/RealmDB/schemas/TrainingHistory'
import ITrainingHistoryDay from 'src/types/ITrainingHistoryDay'

const fillTrainingHistoryRestingDays = (days: ITrainingHistoryDayDB[]) => {
  const lastDayNumber = days[0].dayNumber

  console.log('test ===', lastDayNumber)

  const res: ITrainingHistoryDay[] = []

  for (let i = 0; i < days.length; i++) {
    if (res.length > 0) {
      const existDay = res.find((day) => day.dayNumber === days[i].dayNumber + 1)

      if (!existDay) {
        res.push({
          dayNumber: days[i].dayNumber + 1,
          exercises: [],
          isTest: false,
          isRest: true,
        })
      }
    }
    res.push({ ...days[i], isRest: false })
  }

  return res
}

export default fillTrainingHistoryRestingDays
