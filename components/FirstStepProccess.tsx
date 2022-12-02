import React, { FC } from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-direction: row;
  gap: 32px;
`
const ItemFill = styled.View`
  background: #367cff;
  border-radius: 50px;
  height: 8px;
  width: calc((100% - 64px) / 3);
`
const Item = styled.View`
  background: #d9d9d9;
  border-radius: 50px;
  height: 8px;
  width: calc((100% - 64px) / 3);
`
const ItemActivePoint = styled.View`
  height: 8px;
  width: 10px;
  border-radius: 50px;
  background-color: #367cff;
`

const ItemActive = () => (
  <Item>
    <ItemActivePoint />
  </Item>
)

const FirstStepProccess: FC<{ val: 1 | 2 | 3 }> = ({ val }) => {
  return (
    <Wrapper>
      {new Array(3)
        .fill(null)
        .map((_, i) =>
          val > i + 1 ? <ItemFill /> : val == i + 1 ? <ItemActive /> : <Item />
        )}
    </Wrapper>
  )
}

export default FirstStepProccess
