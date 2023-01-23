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
const Step0: FC<{
  handlerSkip(): void
  handlerNext(): void
}> = ({ handlerSkip, handlerNext }) => {
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
        <MainImage source={require('../../assets/step0.png')} />
      </CustomBox2>
      <Box>
        <Text variant="h6" style={{ fontWeight: '500', textAlign: 'center' }}>
          Составляй расписание
        </Text>
      </Box>
      <CustomBox3>
        <Text
          variant="subtitle1"
          style={{ fontWeight: '300', textAlign: 'center' }}
        >
          Или импортируй из Google-календаря или личного кабинета УрФУ
        </Text>
      </CustomBox3>
      <CustomBox4>
        <FirstStepProccess val={1} />
      </CustomBox4>
      <Flex direction="row" justify="end">
        <TouchableHighlight onPress={handlerNext}>
          <CustomBox5>
            
            <Arrow/>
          </CustomBox5>
        </TouchableHighlight>
      </Flex>
    </Flex>
  )
}

export default Step0
