import { Box, Flex, Text } from '@react-native-material/core'
import React, { FC, useState } from 'react'
import { View, TouchableHighlight, TextInput } from 'react-native'
import styled from 'styled-components/native'
import Arrow from '../../components/ArrowNext'
import FirstStepProccess from '../../components/FirstStepProccess'

const MainImage = styled.Image`
  width: 337px;
  height: 197px;
  margin: 0 auto;
`

const Wrapper = styled.View`
flex-direction: row;
  margin-top: 4px;
  padding-top: 10px;
  align-items: center;
  margin: 10px;
  margin-left: 4px;
  margin-right: 4px;
`
const Items = styled.View`
  margin-left: 4px;

`


const SettingsPage: FC = () => {

  const [times, setTimes] = useState('')
  return (
  <Flex fill>
      <Box pt='64px' pb='12px'>
        <Text variant="h6" style={{ fontWeight: '900', textAlign: 'center' }}>
        Настройки
        </Text>
      </Box>
      <Text variant="subtitle1" style={{fontWeight: '300', textAlign: 'center', paddingBottom:'60px'}}>
        Настрой параметры под себя
        </Text>

      <Wrapper>
        <Text variant="subtitle1" style={{width: '250px', padding:'20px', fontWeight: '300', textAlign: 'left' , fontSize: 18 }}>
        Время утром на сборы
        </Text>
        {/* <TextInput
            onChangeText={(text) => {
              
              if (/^[0-1|:]/.test(text)) {
                setTimes(text)
              }
            }}
            value={times}
            placeholder="00:00"
          /> */}
          <Items>
<!--           <Text variant="subtitle1" style={{fontWeight: '800', textAlign: 'center', fontSize: 18 }}>
        40 мин.
        </Text> -->
          </Items>
      </Wrapper>
      <Wrapper>
        <Text variant="subtitle1" style={{width: '250px', padding:'20px', fontWeight: '300', textAlign: 'left', fontSize: 18  }}>
        Дом
        </Text>
        {/* <TextInput
            onChangeText={(text) => {
              
              if (/^[0-1|:]/.test(text)) {
                setTimes(text)
              }
            }}
            value={times}
            placeholder="00:00"
          /> */}
          <Items>
<!--           <Text variant="subtitle1" style={{fontWeight: '800', textAlign: 'center', fontSize: 18 }}>
        ул. Тургенева, д. 4
        </Text> -->
          </Items>
          
      </Wrapper>
    </Flex>
  )
}

export default SettingsPage
