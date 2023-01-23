import React, { useCallback, useState, FC } from 'react'
import styled from 'styled-components/native'
import { Text } from '@react-native-material/core'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableHighlight,
} from 'react-native'
import { debounce } from 'lodash'

const HelperWrapper = styled.View`
  position: relative;
`
const Helper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  width: 300px;
  top: calc(100% + 9px);
  background-color: white;
  z-index: 10000000;

  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`
const HelperItem = styled.Text`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 16px 24px 16px 16px;

  text-align: left;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
  z-index: 10000;
  width: 299px;
  &:hover {
    background-color: #e3e3e3;
  }
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

const InputHelper: FC<{ handlerChange(el: string): void }> = ({
  handlerChange,
}) => {
  const [helperMap, setHelperMap] = useState<string[]>([])
  const [openHelper, setOpenHelper] = useState<boolean>(false)
  const [val, setVal] = useState<string>('')
  const onChange = async (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    let query =
      event.target && (event.target as never as { value: string })?.value
    setVal(query || '')
    if (query) {
      await sendHelper(query)
      setOpenHelper(true)
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
          return result
        })
        .catch((error) => console.log('error', error))
    }, 1000),
    [val]
  )

  const handlerClick = (el: string) => {
    return () => {
      AsyncStorage.setItem('address', el)
      setOpenHelper(false)
      setVal(el)
      handlerChange(el)
    }
  }

  return (
    <HelperWrapper>
      <TextInput onChange={onChange} value={val} placeholder="Введите адрес" />
      {openHelper && helperMap && (
        <Helper>
          {helperMap.map((el) => (
            <TouchableHighlight onPress={handlerClick(el)}>
              <HelperItem>{el}</HelperItem>
            </TouchableHighlight>
          ))}
        </Helper>
      )}
    </HelperWrapper>
  )
}

export default InputHelper
