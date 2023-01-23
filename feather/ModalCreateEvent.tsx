import { Button, Text } from '@react-native-material/core'
import React, { FC, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  View,
  Modal,
  TextInputChangeEventData,
  NativeSyntheticEvent,
  StyleSheet,
  Switch,
} from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

import styled from 'styled-components/native'
import { DateData } from 'react-native-calendars'
import InputHelper from '../components/InputHelper'
import AlarmClock from 'react-native-alarm-clock'

const InpWrapper = styled.View`
  position: relative;
  display: flex;
  flex-direction: column;
`

const SwitchWrapper = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TabWrapper = styled.TouchableOpacity`
  flex: 1;
`
const ModalV = styled.Modal`
height: 400px;
`

const TabActiveGroup = styled.TouchableOpacity`
  flex: 1;
  border-bottom-width: 4px;
  border-radius: 4px;
  border-bottom-color: #367cff;
`

const TabGroupWrapper = styled.View`
  flex-direction: row;
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
  color: #49454f;
`

const BtnsWrapper = styled.View`
  display: flex;
  flex-direction: row-reverse;
  margin: 10px;
`

const TextInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(28, 27, 31, 0.3)',
})`
  border-radius: 10px;
  padding: 16px;
  margin: 4px;
  font-size: 16;
  border: 0.2px;
  border-color: grey;
  &:active {
    outline: 0;
    outline-offset: 0;
    border-width: 2px;
    border-color: blue;
  }
  &:hover {
    outline: 0;
    outline-offset: 0;
    border-color: blue;
  }
  &:focus {
    outline: 0;
    outline-offset: 0;
    border-color: blue;
  }
  outline: 0;
  outline-offset: 0;
`

const styles = StyleSheet.create({
  dropdown: {
    margin: 4,
    borderColor: '#808080',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 12,
    padding: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  btn: {
    flex: 1,
    borderRightWidth: 0.25,
    borderLeftWidth: 0.25,
    borderColor: '#6B7280',
  },
  TabText: {
    textAlign: 'center',
    paddingVertical: 16,
    fontSize: 14,
  },
})

const month = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря',
]
var days = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]
const data = [
  { label: 'Не повторяется', value: '1' },
  { label: 'Каждый день', value: '2' },
  { label: 'Каждую неделю', value: '3' },
  { label: 'Каждый месяц', value: '4' },
]

const ModalCreateIvent: FC<{
  visible: boolean
  date: DateData | null
  handlerPrev(): void
}> = ({ visible, date, handlerPrev }) => {
  const [val, setVal] = useState<{
    name: string
    address: string
  } | null>()

  const [isEnabled, setIsEnabled] = useState(false)

  const onChangeName = async (text: string) => {
    if (text || text === '') {
      setVal((state) => (state ? { ...state, name: text } : { name: text }))
    }
  }

  const fetchFn = async () => {
    if (time && val?.name && val?.address)
      try {
        const adress = await AsyncStorage.getItem('address')
        const res = await fetch('http://localhost:7185/todos', {
          method: 'POST',
          body: JSON.stringify({
            title: val?.name,
            startPlace: adress,
            endPlace: val?.address,
            startTime: new Date(time).toISOString(),
          }),
        })
        date &&
          isEnabled &&
          AlarmClock.createAlarm(new Date(res.body).toISOString(), val?.name)
      } catch (error) {
        console.log(error)
      }
  }
  const [time, setTime] = useState<null | Date>(null)

  const onChangeAddress = async (    event: string
    ) => {
    if (event) {
      setVal((state) => (state ? { ...state, address: event } : { address: event }))
    }
  }

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const [times, setTimes] = useState('')
  return (
    <ModalV visible={visible}>
      <View
        style={{
          backgroundColor: '#f4f4f4f4',
          margin: 40,
          flex: 1,
          borderRadius: 10,
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            padding: 12,
          }}
        >
          {date?.day} {month[(date?.month || 1) - 1]}
          {date ? ', ' + days[new Date(date.timestamp).getDay()] : ''}
        </Text>
        <InpWrapper>
          <TextInput
            onChangeText={onChangeName}
            value={val?.name || ''}
            placeholder="Введите название"
          />
          <TextInput
            onChangeText={(text) => {
              if (text === '') {
                setTimes('')
              }
              if (/^[0-1|:]/.test(text)) {
                setTimes(text)
              }
              if (date && /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(text)) {
                const data = text.split(':')
                if (data[0]) {
                  setTime(
                    new Date(
                      date?.timestamp +
                        3600 * (data[0] || 0) +
                        60 * (data[1] || 0)
                    )
                  )
                }
              }
            }}
            value={times}
            placeholder="00:00"
          />
          <InputHelper handlerChange={onChangeAddress} />
          <SwitchWrapper>
            <Text
              style={{
                fontSize: 16,
                padding: 20,
                paddingLeft: 4,
              }}
            >
              Включить будильник
            </Text>
            <Switch
              style={{ margin: 20 }}
              trackColor={{ false: '#767577', true: '#a1c4ff' }}
              thumbColor={isEnabled ? '#4b6af5' : '#c2c2c2'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </SwitchWrapper>
          <BtnsWrapper>
            <Button
              style={{ margin: 5 }}
              onPress={fetchFn}
              variant="text"
              title="Далее"
              color="#367cff"
              uppercase={false}
            />
            <Button
              style={{ margin: 5 }}
              onPress={handlerPrev}
              variant="text"
              title="Отмена"
              color="black"
              uppercase={false}
            />
          </BtnsWrapper>
        </InpWrapper>
      </View>
    </ModalV>
  )
}

export default ModalCreateIvent