import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { Header } from '@rneui/base'
import { HeaderProp } from './types'
import { Avatar } from '@rneui/themed'

const UserHeader = ({ headerProp, action }: HeaderProp) => {
  return (
    <Header style={styles.container}>
      <Avatar
        size={35}
        rounded
        title={headerProp.nome}
        containerStyle={{backgroundColor: 'black', borderRadius: 30}}
      />
      <Text>{headerProp.nome}</Text>
    </Header>
  )
}

export default UserHeader