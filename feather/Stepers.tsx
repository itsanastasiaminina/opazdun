import React, { FC, ReactNode } from 'react'
import { View } from 'react-native'

const Stepers: FC<{ step: number; items: ReactNode[] }> = ({ step, items }) => {
  return items[step] ? <>{items[step]}</> : null
}

export default Stepers
