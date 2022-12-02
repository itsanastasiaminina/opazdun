import { Box, Flex, Text } from '@react-native-material/core'
import React, { FC } from 'react'
import { TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import ArrowNext from '../../components/ArrowNext'
import ArrowPrev from '../../components/ArrowPrev'
import FirstStepProccess from '../../components/FirstStepProccess'

const MainImage = styled.Image`
  width: 296px;
  height: 220px;
  margin: 0 auto;
`

const Step2: FC<{
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
        <Box p="16px" pt="32px" pr="15px">
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
        </Box>
      </TouchableHighlight>
      <Box pt="40px" pb="40px">
        <MainImage source={require('../../assets/step2.png')} />
      </Box>
      <Box>
        <Text variant="h6" style={{ fontWeight: '500', textAlign: 'center' }}>
          Состовляй расписание
        </Text>
      </Box>
      <Box pt="9px">
        <Text
          variant="subtitle1"
          style={{ fontWeight: '300', textAlign: 'center' }}
        >
          Или импортируй из Google-календаря или личного кабинета УрФУ
        </Text>
      </Box>
      <Box p="calc(100%/7)" pt="46px">
        <FirstStepProccess val={3} />
      </Box>
      <Flex direction="row" justify="between">
        <TouchableHighlight onPress={handlerPrev}>
          <Box p="16px">
            <ArrowPrev />
          </Box>
        </TouchableHighlight>
        <TouchableHighlight onPress={handlerNext}>
          <Box p="16px">
            <ArrowNext />
          </Box>
        </TouchableHighlight>
      </Flex>
    </Flex>
  )
}

export default Step2
