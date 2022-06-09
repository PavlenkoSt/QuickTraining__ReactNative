import { useCallback, useMemo, useState } from 'react'

import useRealmTrainingHistory from 'src/hooks/Realm/useRealmTrainingHistory'

const useTrainingHistoryPagination = () => {
  const { trainingHistory } = useRealmTrainingHistory()

  const [currentPage, setCurrentPage] = useState(3)
  const [portionNumber] = useState(1)

  const incrementCurrentPage = useCallback(() => {
    setCurrentPage((prev) => prev + 1)
  }, [])

  const haveMorePortion = useMemo(() => {
    const totalLength = trainingHistory?.length || 0
    const currentLength = currentPage * portionNumber

    return totalLength > currentLength
  }, [trainingHistory, currentPage, portionNumber])

  const trainingHistoryWithPagination = useMemo(
    () =>
      !!trainingHistory ? trainingHistory.filter((week, i) => i < currentPage * portionNumber) : [],
    [trainingHistory, currentPage, portionNumber]
  )

  return { trainingHistoryWithPagination, haveMorePortion, incrementCurrentPage }
}

export default useTrainingHistoryPagination
