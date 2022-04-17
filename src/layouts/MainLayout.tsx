import { ScrollView, StatusBar, View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

type MainLayoutPropsType = {
  children: React.ReactNode
  withoutScroll?: boolean
  Header?: FC
}

const MainLayout: FC<MainLayoutPropsType> = ({ children, withoutScroll, Header }) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      {!!Header && <Header />}
      {withoutScroll ? (
        <View style={styles.noScrollInnerContainer}>{children}</View>
      ) : (
        <ScrollView style={styles.scrollInnerContainer}>{children}</ScrollView>
      )}
    </View>
  )
}

export default MainLayout

const styles = EStyleSheet.create({
  mainContainer: {
    backgroundColor: '$primaryTheme',
    flex: 1,
  },
  noScrollInnerContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  scrollInnerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
})
