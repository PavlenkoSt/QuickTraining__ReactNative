import { ITrainingHistoryDayDB } from 'src/RealmDB/schemas/TrainingHistory'

interface ITrainingHistoryDay extends ITrainingHistoryDayDB {
  isRest: boolean
}

export default ITrainingHistoryDay
