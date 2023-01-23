import { Box, Flex, Text } from '@react-native-material/core'
import React, { FC } from 'react'
import { TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import ArrowNext from '../../components/ArrowNext'
import Arrow from '../../components/ArrowNext'
import ArrowPrev from '../../components/ArrowPrev'
import FirstStepProccess from '../../components/FirstStepProccess'

const MainImage = styled.Image`
  width: 338px;
  height: 177px;
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

const Step1: FC<{
  handlerSkip(): void
  handlerNext(): void
  handlerPrev(): void
}> = ({ handlerSkip, handlerNext, handlerPrev }) => {
  return (
    <Flex fill>
      <TouchableHighlight
        onPress={handlerSkip}
        style={{
          backgroundColor: 'white',
        }}
      >
        <CustomBox>
          <Text
            variant="body1"
            style={{
              color: 'rgba(0, 0, 0, 0.7)',
              textAlign: 'right',
              backgroundColor: 'white',
            }}
          >
            Пропустить
          </Text>
        </CustomBox>
      </TouchableHighlight>
      <CustomBox2>
        <MainImage source={require('../../assets/step1.png')} />
      </CustomBox2>
      <Box>
        <Text variant="h6" style={{ fontWeight: '500', textAlign: 'center' }}>
          Выходи позже
        </Text>
      </Box>
      <CustomBox3>
        <Text
          variant="subtitle1"
          style={{ fontWeight: '300', textAlign: 'center' }}
        >
          Но не опаздывай на запланированные мероприятия
        </Text>
      </CustomBox3>
      <CustomBox4>
        <FirstStepProccess val={2} />
      </CustomBox4>
      <Flex direction="row" justify="between">
        <TouchableHighlight onPress={handlerPrev}>
          <CustomBox5>
            <ArrowPrev />
          </CustomBox5>
        </TouchableHighlight>
        <TouchableHighlight onPress={handlerNext}>
          <CustomBox5>
            <ArrowNext />
          </CustomBox5>
        </TouchableHighlight>
      </Flex>
    </Flex>
  )
}

export default Step1
