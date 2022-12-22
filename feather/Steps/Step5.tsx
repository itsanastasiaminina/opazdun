import {
  Box,
  Button,
  Flex,
  Text,
  Provider,
  Stack,
  DialogHeader,
  DialogContent,
  DialogActions,
  TextInput,
} from '@react-native-material/core'
import React, { FC, PropsWithChildren, useCallback, useState } from 'react'
import {
  TouchableHighlight,
  View,
  Modal,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native'
import styled from 'styled-components/native'
import {
  Calendar,
  CalendarList,
  Agenda,
  DateData,
} from 'react-native-calendars'
import { debounce } from 'lodash'
// import { ConfirmDialog } from 'react-native-simple-dialogs';

const PrevBtn = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
`

const MainWrapper = styled.View`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const TitleText = styled.View`
  padding-top: 64px;
`

const NextBtn = styled.Button`
  border-radius: 10px;
  color: #367cff;
`
const BtnWrapper = styled.View`
  margin-left: 234px;
  margin-bottom: 60px;
`

const Step5: FC<{
  handlerNext(): void
  handlerPrev(): void
}> = ({ handlerNext, handlerPrev }) => {
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState<DateData | null>(null)
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

  const [name, setName] = useState('')
  const [address, setAddress] = useState<string>('')
  const [repeat, setRepeat] = useState('')
  const [helperMap, setHelperMap] = useState<string[]>([])
  const [openHelper, setOpenHelper] = useState<boolean>(false)
  const [val, setVal] = useState<{
    name: string
    address: string
  }>(null)

  const onChange = async (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    let query =
      event.target && (event.target as never as { value: string })?.value
    setAddress(query || '')
    if (query) {
      sendHelper(query)
    } else {
      setOpenHelper(false)
    }
  }

  const sendHelper = useCallback(
    debounce((query: string) => {
      let url =
        'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
      let token = '9b8114e7a02fbdfeaac8a3498338830ebd8cf061'

      let options = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + token,
        },
        body: JSON.stringify({ query: query }),
      }

      fetch(url, options as RequestInit)
        .then((response) => response.json())
        .then((result) => {
          setHelperMap(
            result.suggestions.map((el: { value: string }) => el.value).flat()
          )
          setOpenHelper(true)
          return result
        })
        .catch((error) => console.log('error', error))
    }, 1000),
    [val]
  )
  return (
    <MainWrapper>
      <TouchableHighlight onPress={handlerPrev}>
        <PrevBtn>
          <svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.7"
              d="M9.89174 1.20941C10.5091 1.84477 10.5096 2.85577 9.89298 3.4918L5.60766 7.91173C4.47949 9.07535 4.47948 10.9247 5.60766 12.0883L9.89298 16.5082C10.5096 17.1442 10.5091 18.1552 9.89174 18.7906C9.24826 19.4528 8.18494 19.4528 7.54146 18.7906L1.03137 12.0906C-0.099848 10.9264 -0.0998487 9.0736 1.03137 7.90939L7.54146 1.20942C8.18494 0.547174 9.24826 0.547172 9.89174 1.20941Z"
              fill="#A6A6A6"
            />
          </svg>
        </PrevBtn>
      </TouchableHighlight>
      <TitleText>
        <Text style={{ fontWeight: '600', fontSize: 19, textAlign: 'center' }}>
          Нажми на день
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 12,
            textAlign: 'center',
            maxWidth: '400px',
          }}
        >
          И добавь мероприятие
        </Text>
      </TitleText>
      <Calendar
        enableSwipeMonths={true}
        onDayPress={(day) => {
          setVisible(true)
          setDate(day)
        }}
      />
      <Modal visible={visible}>
        <View
          style={{
            backgroundColor: '#f4f4f4f4',
            margin: 50,
            flex: 1,
            borderRadius: 10,
            padding: 40,
          }}
        >
          <Text style={{ fontSize: 50 }}>
            {date?.day} {month[(date?.month || 1) - 1]}
            {date ? ', ' + days[new Date(date.timestamp).getDay()] : ''}
          </Text>
          <TextInput
            onChange={onChange}
            value={val.name}
            placeholder="Введите название"
          />
          <TextInput
            onChange={onChange}
            value={val.address}
            placeholder="Добавьте местоположение"
          />
        </View>
      </Modal>
      <BtnWrapper>
        <Button
          variant="text"
          onPress={handlerNext}
          title="Сохранить"
          color="#367cff"
        />
      </BtnWrapper>
    </MainWrapper>
  )
}

export default Step5
