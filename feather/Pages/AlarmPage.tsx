import { Box, Flex, Text } from '@react-native-material/core'
import React, { FC } from 'react'
import { TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import Arrow from '../../components/ArrowNext'
import FirstStepProccess from '../../components/FirstStepProccess'

const MainImage = styled.Image`
  width: 337px;
  height: 197px;
  margin: 0 auto;
`
const CustomBox = styled.View`
padding: 16px;
padding-top: 32px;
padding-right: 15px;
`
const CustomBox2 = styled.View`
padding-top: 40px;
padding-bottom: 40px;
`
const CustomBox3 = styled.View`
padding-top: 9px;
`
const CustomBox4 = styled.View`
padding: 14%;
padding-top: 46px;
`
const CustomBox5 = styled.View`
padding: 16px;
`

const AlarmPage: FC = () => {
  return (
    <Flex fill>
      <Box pt='64px' pb='12px'>
        <Text variant="h6" style={{ fontWeight: '900', textAlign: 'center' }}>
            Будильник
        </Text>
      </Box>
      <Box>
        <Text variant="subtitle1" style={{ fontWeight: '300', textAlign: 'center' }}>
          Точное время появится ближе к времени пробуждения
        </Text>
      </Box>
      <CustomBox2>
        <MainImage source={require('../../assets/Alarm.png')} />
      </CustomBox2>
      <Box>
        <Text variant="h6" style={{ fontWeight: '500', textAlign: 'center', fontSize: 20 }}>
           Этот экран ожидается в будущих обновлениях
        </Text>
      </Box>
      <CustomBox3>
        <Text 
          variant="subtitle1"
          style={{ fontWeight: '300', textAlign: 'center'}}
        >
          Работать с будильниками можно через приложение «Будильник»
        </Text>
      </CustomBox3>
      <CustomBox4>
        <FirstStepProccess val={1} />
      </CustomBox4>
    
    </Flex>
  )
}

export default AlarmPage
