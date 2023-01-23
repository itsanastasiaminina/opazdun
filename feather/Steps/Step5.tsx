import { Button, Text } from '@react-native-material/core'
import React, { FC, useState } from 'react'
import { TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import { Calendar, DateData } from 'react-native-calendars'
import ModalCreateEvent from '../ModalCreateEvent'
import Svg, { G, Path } from 'react-native-svg';

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
  padding-top: 20px;
`
const Container = styled.View`
  padding-top: 180px;
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

  return (
    <MainWrapper>
      <TouchableHighlight onPress={handlerPrev}>
        <PrevBtn>
          <Svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              opacity="0.7"
              d="M9.89174 1.20941C10.5091 1.84477 10.5096 2.85577 9.89298 3.4918L5.60766 7.91173C4.47949 9.07535 4.47948 10.9247 5.60766 12.0883L9.89298 16.5082C10.5096 17.1442 10.5091 18.1552 9.89174 18.7906C9.24826 19.4528 8.18494 19.4528 7.54146 18.7906L1.03137 12.0906C-0.099848 10.9264 -0.0998487 9.0736 1.03137 7.90939L7.54146 1.20942C8.18494 0.547174 9.24826 0.547172 9.89174 1.20941Z"
              fill="#A6A6A6"
            />
          </Svg>
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
            maxWidth: '400',
          }}
        >
          И добавь мероприятие
        </Text>
      </TitleText>
      <Container>
      <Calendar 
        theme={{
          selectedDayBackgroundColor: '#367cff',
          }}
        enableSwipeMonths={true}
        onDayPress={(day) => {
          setVisible(true)
          setDate(day)
        }}
      />
    </Container>
      <ModalCreateEvent
        visible={visible}
        date={date}
        handlerPrev={handlerPrev}
      />

      <BtnWrapper>
        <Button
          variant="text"
          onPress={handlerNext}
          title="Сохранить"
          color="#367cff"
          uppercase={false}
        />
      </BtnWrapper>
    </MainWrapper>
  )
}

export default Step5