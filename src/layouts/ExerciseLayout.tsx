import React, { FC } from 'react'
import { StatusBar, View } from 'react-native'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

type ExerciseLayoutPropsType = {
  children: React.ReactNode
}

const ExerciseLayout: FC<ExerciseLayoutPropsType> = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#121B22" translucent />
      <View>{children}</View>
    </View>
  )
}

export default ExerciseLayout

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$primaryTheme',
  },
})
