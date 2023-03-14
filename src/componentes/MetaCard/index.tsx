import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import DataBanner from '../DataBanner';
import styles from './styles';
import { BannerProp } from './types';
import { Chip } from '@rneui/themed';

const MetaCard = ({ bannerProp, action, action_nav, action_nav2 }: BannerProp) => {
    return (
        <DataBanner style={styles.container}>
            <View style={styles.dataContainer}>
                <TouchableOpacity onPress={action}>
                    <Text style={styles.txt_3}>
                        {bannerProp.tipoMoeda === 'Dolar' && '$ > R$' || 'R$ > $'}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.txt_1}>Patrimonio em {bannerProp.tipoMoeda}:</Text>
                <Text style={styles.txt_2}>
                    {bannerProp.tipoMoeda === 'Dolar' && '$' || 'R$'}
                    {bannerProp.valor}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Chip
                    title="Fazer meta"
                    onPress={action_nav}
                    containerStyle={{ marginVertical: 15 }}
                />

                <View style={{ width: 30 }} />
                <Chip
                    title="Registrar atividade"
                    onPress={action_nav2}
                    containerStyle={{ marginVertical: 15 }}
                />
            </View>
        </DataBanner>
    )
}

export default MetaCard;