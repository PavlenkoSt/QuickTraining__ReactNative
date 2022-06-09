import React from 'react'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import useRealmTrainingHistory from 'src/hooks/Realm/useRealmTrainingHistory'
import HistoryWeek from './HistoryWeek'

const TrainingHistory = () => {
  const { trainingHistory } = useRealmTrainingHistory()

  return (
    <MainLayout Header={() => <EmptyHeader title="Training history" />}>
      {!!trainingHistory &&
        trainingHistory.map((week, i) => (
          <HistoryWeek
            key={week._id}
            days={JSON.parse(week.daysString).reverse()}
            weekNumber={week.weekNumber}
            isLast={trainingHistory.length === i + 1}
            isRebuilded={
              trainingHistory[i + 1] ? trainingHistory[i + 1].weekNumber === week.weekNumber : false
            }
          />
        ))}
    </MainLayout>
  )
}

export default TrainingHistory
