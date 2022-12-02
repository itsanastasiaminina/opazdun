import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Stepers from './feather/Stepers'
import Step0 from './feather/Steps/Step0'
import Step1 from './feather/Steps/Step1'
import Step2 from './feather/Steps/Step2'

export default function App() {
  const [step, setStep] = useState(0)
  const handlerChangeStep = (newStep: number) => () => setStep(newStep)
  return (
    <View style={styles.container}>
      <Stepers
        step={step}
        items={[
          <Step0
            handlerNext={handlerChangeStep(1)}
            handlerSkip={handlerChangeStep(4)}
          />,
          <Step1
            handlerPrev={handlerChangeStep(0)}
            handlerNext={handlerChangeStep(2)}
            handlerSkip={handlerChangeStep(4)}
          />,
          <Step2
            handlerPrev={handlerChangeStep(1)}
            handlerNext={handlerChangeStep(3)}
            handlerSkip={handlerChangeStep(4)}
          />,
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
