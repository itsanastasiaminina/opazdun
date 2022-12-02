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
        <MainImage source={require('../../assets/step0.png')} />
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
        <FirstStepProccess val={1} />
      </Box>
      <Flex direction="row" justify="end">
        <TouchableHighlight onPress={handlerNext}>
          <Box p="16px">
            <Arrow />
          </Box>
        </TouchableHighlight>
      </Flex>
    </Flex>
  )
}

export default Step0
