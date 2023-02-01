import { Box, Flex, Text } from '@react-native-material/core'
import React, { FC } from 'react'
import { TouchableHighlight } from 'react-native'
import { grey100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'
import styled from 'styled-components/native'
import Arrow from '../../components/ArrowNext'
import FirstStepProccess from '../../components/FirstStepProccess'


//сервер не привязан
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

const TimePage: FC = () => {
  return (
    <Flex fill>
      <Box pt='64px' pb='12px'>
        <Text variant="h6" style={{ fontWeight: '900', textAlign: 'center' }}>
        Время до выхода
        </Text>
      </Box>
      <Box>
        <Text variant="subtitle1" style={{ fontWeight: '300', textAlign: 'center' }}>
        Активируется после будильника 
или уведомления
        </Text>
      </Box>

      <Box>
<!--         <Text variant="h1" style={{ fontWeight: '500', color:'grey', textAlign: 'center', fontSize: 80, paddingTop:'250px'}}>
           47мин.
            {/* {} */}
        </Text> -->
      </Box> 
    </Flex>
  )
}

export default TimePage
