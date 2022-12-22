import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Stepers from './feather/Stepers'
import Step0 from './feather/Steps/Step0'
import Step1 from './feather/Steps/Step1'
import Step2 from './feather/Steps/Step2'
import Step3 from './feather/Steps/Step3'
import Step4 from './feather/Steps/Step4'
import Step5 from './feather/Steps/Step5'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const [step, setStep] = useState(0)
  const handlerChangeStep = (newStep: number) => () => setStep(newStep)
  useEffect(() => {
    const fn = async () => {
      const storeAddress = await AsyncStorage.getItem('address')
      const storeHour = await AsyncStorage.getItem('hour')
      const storeMinute = await AsyncStorage.getItem('minute')
      const calcStep = storeAddress ? 4 : storeHour && storeMinute ? 5 : 0
      setStep(calcStep)
    }
    fn()
  }, [])

  return (
    <View style={styles.container}>
      <Stepers
        step={step}
        items={[
          <Step0
            handlerNext={handlerChangeStep(1)}
            handlerSkip={handlerChangeStep(3)}
          />,
          <Step1
            handlerPrev={handlerChangeStep(0)}
            handlerNext={handlerChangeStep(2)}
            handlerSkip={handlerChangeStep(3)}
          />,
          <Step2
            handlerPrev={handlerChangeStep(1)}
            handlerNext={handlerChangeStep(3)}
            handlerSkip={handlerChangeStep(3)}
          />,
          <Step3 handlerNext={handlerChangeStep(4)} />,
          <Step4
            handlerPrev={handlerChangeStep(3)}
            handlerNext={handlerChangeStep(5)}
          />,
          <Step5
            handlerPrev={handlerChangeStep(4)}
            handlerNext={handlerChangeStep(6)}
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
