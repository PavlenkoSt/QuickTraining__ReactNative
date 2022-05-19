import React from 'react'

import MainLayout from 'src/layouts/MainLayout'
import EmptyHeader from 'src/components/Headers/EmptyHeader'
import InventarForm from 'src/components/InventarForm'

const Inventar = () => {
  return (
    <MainLayout Header={() => <EmptyHeader title="Inventory" />}>
      <InventarForm mode="edit" />
    </MainLayout>
  )
}

export default Inventar
