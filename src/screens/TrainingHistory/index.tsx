import React from 'react'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import useTrainingHistoryPagination from 'src/hooks/useTrainingHistoryPagination'
import LoadMoreHistory from './LoadMoreHistory'
import HistoryWeek from './HistoryWeek'

const TrainingHistory = () => {
  const { trainingHistoryWithPagination, haveMorePortion, incrementCurrentPage } =
    useTrainingHistoryPagination()

  return (
    <MainLayout Header={() => <EmptyHeader title="Training history" />}>
      {trainingHistoryWithPagination.map((week, i) => (
        <HistoryWeek
          key={week._id}
          days={JSON.parse(week.daysString).reverse()}
          weekNumber={week.weekNumber}
          isLast={trainingHistoryWithPagination.length === i + 1}
          isRebuilded={
            trainingHistoryWithPagination[i + 1]
              ? trainingHistoryWithPagination[i + 1].weekNumber === week.weekNumber
              : false
          }
        />
      ))}
      {haveMorePortion && <LoadMoreHistory incrementCurrentPage={incrementCurrentPage} />}
    </MainLayout>
  )
}

export default TrainingHistory
