import { View, Text } from 'react-native'
import React from 'react'
import DataBanner from '../DataBanner'
import styles from './styles'
import { UltimasAtividadesProp } from './types'
import MiniCard from './MineCard'

const AtividadeCard = ({data}: UltimasAtividadesProp) => {
  return (
    <DataBanner style={styles.container}>
      <Text style={styles.txt_1}>Ultimas atividades</Text>
      {data.map(e => <MiniCard  prop={e}/> )}
    </DataBanner>
  )
}

export default AtividadeCard