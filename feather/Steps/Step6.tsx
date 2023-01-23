
import { Button, Flex, Text } from '@react-native-material/core'
import React, { FC, useCallback, useState } from 'react'
import {
  TouchableHighlight,
  View,
  Modal,
  TextInputChangeEventData,
  NativeSyntheticEvent,
  StyleSheet,
  Switch, 
  SafeAreaView,
  TouchableOpacity, 
} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { FontAwesome5, FontAwesome} from '@expo/vector-icons'; 

import styled from 'styled-components/native'
import { Calendar, DateData } from 'react-native-calendars'
import { debounce, size } from 'lodash'
import { Dropdown } from 'react-native-element-dropdown';
import Svg, { G, Path } from 'react-native-svg';
import { ToggleButton } from 'react-native-paper';
import AlarmPage from '../Pages/AlarmPage';
import CalendarPage from '../Pages/CalendarPage';
import SettingsPage from '../Pages/SettingsPage';
import TimePage from '../Pages/TimePage';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


const MainWrapper = styled.View`
  height: 100%;
  width: 100%;
`
const TabWrapper = styled.TouchableOpacity`
flex: 1;
`

const TabActiveGroup = styled.TouchableOpacity`
  flex: 1;

`

const TabGroupWrapper = styled.View`
  flex-direction: row;
  margin-top: 4px;
  padding-top: 10px;
  border-radius: 20px;
  border-width: 1px;
  border-color: grey;
  align-items: center;
  margin: 10px;
  margin-left: 4px;
  margin-right: 4px;
`

const Tab = styled.View`
  flex-direction: column;
  align-items: center;
`

const TabTextActive = styled.Text`
  text-align: 'center';
  padding: 16px;
  font-size: 14;
  color: #367cff;
`

const TabText = styled.Text`
  text-align: 'center';
  padding: 16px;
  font-size: 14;
  color: #49454F;
`
const TabWr = styled.View`
  margin-top: auto;
  margin-bottom: 5px;
  width: 100%;
`
  
const Step6: FC = () => {

  const [step, setStep] = useState(0)
  

  const [isChoose, setIsChoose]=useState(0);
 
    return (
      <MainWrapper>
        {isChoose === 1 ? <TimePage/>  : null}
        {isChoose === 2 ? <AlarmPage/> : null}
        {isChoose === 3 ? <CalendarPage/> : null}
        {isChoose === 4 ? <SettingsPage/> : null}
        <TabWr>
        <TabGroupWrapper>
              {isChoose === 1 ? (
              <TabActiveGroup>
                <Tab>
                  <AntDesign name="clockcircle" size={24} color="#367cff" />
                  <TabTextActive>Время</TabTextActive>
                </Tab>
              </TabActiveGroup>): (
              <TabWrapper onPress={() => setIsChoose(1)}>
                <Tab>
                  <AntDesign name="clockcircle" size={24} color="black" />
                  <TabText>Время</TabText>
                </Tab>
              </TabWrapper>)}

              {isChoose === 2 ? (
              <TabActiveGroup>
                <Tab>
                <MaterialCommunityIcons name="timer" size={24} color="#367cff" />
                  <TabTextActive>Будильник</TabTextActive>
                </Tab>
              </TabActiveGroup>): (
              <TabWrapper onPress={() => setIsChoose(2)}>
                <Tab>
                  <MaterialCommunityIcons name="timer" size={24} color="black" />
                  <TabText>Будильник</TabText>
                </Tab>
              </TabWrapper>)}

              {isChoose === 3 ? (
              <TabActiveGroup>
                <Tab>
                <MaterialCommunityIcons name="calendar" size={24} color="#367cff" />
                  <TabTextActive>Календарь</TabTextActive>
                </Tab>
              </TabActiveGroup>): (
              <TabWrapper onPress={() => setIsChoose(3)}>
                <Tab>
                  <MaterialCommunityIcons name="calendar" size={24} color="black" />
                  <TabText>Календарь</TabText>
                </Tab>
              </TabWrapper>)}

              {isChoose === 4 ? (
              <TabActiveGroup>
                <Tab>
                <Ionicons name="settings-sharp" size={24} color="#367cff" />
                  <TabTextActive>Настройки</TabTextActive>
                </Tab>
              </TabActiveGroup>): (
              <TabWrapper onPress={() => setIsChoose(4)}>
                <Tab>
                <Ionicons name="settings-sharp" size={24} color="black" />
                  <TabText>Настройки</TabText>
                </Tab>
              </TabWrapper>)}
            </TabGroupWrapper>
        </TabWr>
      </MainWrapper>
      
    )
}
    
export default Step6
