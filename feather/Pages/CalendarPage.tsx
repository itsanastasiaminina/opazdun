import { Box, Flex, Text } from '@react-native-material/core'
import React, { FC, useState } from 'react'
import { View, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import Arrow from '../../components/ArrowNext'
import { Calendar, DateData } from 'react-native-calendars'
import FirstStepProccess from '../../components/FirstStepProccess'

const MainImage = styled.Image`
  width:100%;
  height: 200px;
  margin: 0 auto;
`
const CustomBox = styled.View`
padding: 16px;
padding-top: 32px;
padding-right: 15px;
`
const CustomBox2 = styled.View`
padding-top: 40px;

`
const CustomBox3 = styled.View`
padding-top: 9px;
`
const CustomBox4 = styled.View`
padding: 14%;
padding-top: 46px;
`

const Wrapper = styled.View`
border-radius: 20px;
border-width: 2px;
border-color: #367cff;
flex-direction: row;
  align-items: center;
  margin: 10px;
  margin-left: 4px;
  margin-right: 4px;
`

const Items = styled.View`
  margin-left: 4px;

`

const CalendarPage: FC = () => {
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState<DateData | null>(null)
  return (
    <Flex fill>
    <Box pt='64px' pb='12px'>
      <Text variant="h6" style={{ fontWeight: '900', textAlign: 'center' }}>
      Добавь или измени мероприятия
      </Text>
    </Box>
    <CustomBox2>
    <Calendar 
  theme={{todayTextColor: '#367cff', textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: '#367cff',
  selectedDayTextColor: '#ffffff',}}
        enableSwipeMonths={true}
        onDayPress={(day) => {
          setVisible(true)
          setDate(day)
        }}
      />
    </CustomBox2>
    <CustomBox2>
    <Wrapper>
<!--         <Text variant="subtitle1" style={{padding:'20px', fontWeight: '800', textAlign: 'left', fontSize: 22, color:'#367cff'}}>
        06:00
        </Text> -->
          <Items>
          <Text variant="subtitle1" style={{fontWeight: '800', textAlign: 'center', fontSize: 20 }}>
          Учеба
        </Text>
          </Items>
          
      </Wrapper>
      <Wrapper>
<!--         <Text variant="subtitle1" style={{padding:'20px', fontWeight: '800', textAlign: 'left', fontSize: 22, color:'#367cff'}}>
        12:10
        </Text> -->
          <Items>
          <Text variant="subtitle1" style={{fontWeight: '800', textAlign: 'center', fontSize: 20 }}>
          Работа
        </Text>
          </Items>
          
      </Wrapper>
    </CustomBox2>
  </Flex>
  )
}

export default CalendarPage
