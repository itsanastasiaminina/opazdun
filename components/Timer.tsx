import React, { useState, FC } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'

const TimerItem = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 40px;
`
const TimerStatus = styled.View`
  display: flex;
  flex-direction: row;
  align-items: end;
`
const TimerWrapper = styled.View`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`

const Timer = () => {
  const [hour, setHour] = useState<number>(0)
  const [minute, setMinute] = useState<number>(0)
  return (
    <TimerWrapper>
      <TimerItem>
        <Dec
          fn={() => setHour((state) => (state > 0 ? (state -= 1) : state))}
        />
        <TimerStatus>
          <Text style={{ fontWeight: '400', fontSize: 78 }}>{hour}</Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              paddingBottom: 10,
              paddingLeft: 24,
            }}
          >
            час.
          </Text>
        </TimerStatus>
        <Inc fn={() => setHour((state) => (state += 1))} />
      </TimerItem>
      <TimerItem>
        <Dec
          fn={() => setMinute((state) => (state > 0 ? (state -= 1) : state))}
        />
        <TimerStatus>
          <Text style={{ fontWeight: '400', fontSize: 78 }}>{minute}</Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              paddingBottom: 10,
              paddingLeft: 24,
            }}
          >
            мин.
          </Text>
        </TimerStatus>
        <Inc fn={() => setMinute((state) => (state += 1))} />
      </TimerItem>
    </TimerWrapper>
  )
}

export default Timer

const Inc: FC<{ fn(): void }> = ({ fn }) => {
  return (
    <TouchableHighlight onPress={fn}>
      <svg
        width="36"
        height="18"
        viewBox="0 0 36 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M34.454 1.29995L21.0618 14.6922C19.3708 16.3831 16.6292 16.3831 14.9382 14.6922L1.54603 1.29995"
          stroke="black"
          strokeWidth="2.598"
        />
      </svg>
    </TouchableHighlight>
  )
}

const Dec: FC<{ fn(): void }> = ({ fn }) => {
  return (
    <TouchableHighlight onPress={fn}>
      <svg
        width="36"
        height="18"
        viewBox="0 0 36 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.54602 16.7001L14.9382 3.30785C16.6292 1.61689 19.3708 1.61689 21.0618 3.30785L34.454 16.7001"
          stroke="black"
          strokeWidth="2.598"
        />
      </svg>
    </TouchableHighlight>
  )
}