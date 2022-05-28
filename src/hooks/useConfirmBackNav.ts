import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'

import { NavigationActionType } from 'src/types/NavigationActionType'

const useConfirmBackNav = () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [navigateAction, setNavigateAction] = useState<NavigationActionType | null>(null)

  const { addListener } = useNavigation()

  useEffect(() => {
    addListener('beforeRemove', (e) => {
      if (e.data.action.type !== 'GO_BACK') return

      e.preventDefault()

      setNavigateAction(e.data.action)
      setVisibleModal(true)
    })
  }, [])

  return { visibleModal, setVisibleModal, navigateAction }
}

export default useConfirmBackNav
