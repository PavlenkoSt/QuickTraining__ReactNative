import { ScrollView, StatusBar, View } from 'react-native'
import React, { FC } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

type MainLayoutPropsType = {
  children: React.ReactNode
  withoutScroll?: boolean
  Header?: FC
  keyboardShouldPersistTaps?: 'always' | 'never' | 'handled'
  withoutContainer?: boolean
}

const MainLayout: FC<MainLayoutPropsType> = ({
  children,
  withoutScroll,
  Header,
  keyboardShouldPersistTaps,
  withoutContainer,
}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      {!!Header && <Header />}
      {withoutScroll ? (
        <View style={!withoutContainer && styles.noScrollInnerContainer}>{children}</View>
      ) : (
        <ScrollView keyboardShouldPersistTaps={keyboardShouldPersistTaps}>
          <View style={!withoutContainer && styles.scrollInnerContainer}>{children}</View>
        </ScrollView>
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
    paddingVertical: 30,
  },
})
