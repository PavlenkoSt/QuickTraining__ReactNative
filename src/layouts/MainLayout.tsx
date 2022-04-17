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
      <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
      {!!Header && <Header />}
      {withoutScroll ? (
        <View style={styles.noScrollInnerContainer}>{children}</View>
      ) : (
        <ScrollView>{children}</ScrollView>
      )}
    </View>
  )
}

export default MainLayout

const styles = EStyleSheet.create({
  mainContainer: {
    paddingTop: 30,
  },
  noScrollInnerContainer: {
    flex: 1,
  },
})
