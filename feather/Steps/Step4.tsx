import { Button } from '@react-native-material/core'
import React, { FC } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native'
import Timer from '../../components/Timer'
import Arrow from '../../components/ArrowPrev'
import Svg, { G, Path } from 'react-native-svg';

const MainWrapper = styled.View`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PrevBtn = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;
`

const TitleText = styled.View`
  padding-top: 64px;
`

const NextBtn = styled.Button`
  background: #367cff;
  border-radius: 10px;
  color: white;
`

const BtnWrapper = styled.View`
  margin-bottom: 60px;
`

const Step4: FC<{ handlerPrev(): void; handlerNext(): void }> = ({
  handlerPrev,
  handlerNext,
}) => {
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
          {/* <svg
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
          </svg> */}
        </PrevBtn>
      </TouchableHighlight>
      <TitleText>
        <Text style={{ fontWeight: '600', fontSize: 19, textAlign: 'center' }}>
          После пробуждения
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 12,
            textAlign: 'center',
            maxWidth: '90%',
          }}
        >
          Укажи, сколько времени тебе требуетсяна сборы утром
        </Text>
      </TitleText>
      <Timer />
      <BtnWrapper>
        <NextBtn onPress={handlerNext} title="Установить" />
      </BtnWrapper>
    </MainWrapper>
  )
}

export default Step4