import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'
import { BackGroundProp } from './types'

const Background = ({children}: BackGroundProp) => {
  return (
    <LinearGradient
    colors={['#4c669f', '#3b5998', '#192f6a']}
    style={styles.background}>
      {children}
    </LinearGradient>
  )
}

export default Background