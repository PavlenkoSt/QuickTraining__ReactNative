import { View } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { EStyleSheet } from 'react-native-extended-stylesheet-typescript'

import { IResult } from '../FirstTestExercises'
import ModalWrapper from 'src/components/ModalWrapper'
import ResultList from 'src/components/ResultList'
import CustomText from 'src/components/CustomText'
import CustomButton from 'src/components/CustomButton'

type ResultsModalPropsType = {
  visible: boolean
  setVisible: Dispatch<SetStateAction<boolean>>
  results: IResult[]
}

const ResultsModal: FC<ResultsModalPropsType> = ({ visible, setVisible, results }) => {
  return (
    <ModalWrapper visible={visible} setVisible={setVisible}>
      <View>
        <CustomText style={styles.title}>Good job</CustomText>
        <ResultList results={results} />
        <View style={styles.btnContainer}>
          <CustomButton onPress={() => setVisible(false)}>Ok</CustomButton>
        </View>
      </View>
    </ModalWrapper>
  )
}

export default ResultsModal

const styles = EStyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
})
