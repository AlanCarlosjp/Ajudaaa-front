import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { UltimasAtividadesType } from '../types'


interface Prop {
    prop: UltimasAtividadesType
}

const MiniCard = ({prop}: Prop) => {

    const [cobrancaCor, setCobrancaCor] = useState("green");

    return (
        <View style={
        styles.container}>
            <Text style={styles.title}>{prop.titulo}</Text>
            <Text style={
                [{color: prop.tipoTransacao === "compra" ? "red" : cobrancaCor},
                styles.valor
                ]}>R$: {prop.valor}</Text>
            <Text>{prop.data}</Text>
        </View>
    )
}

export default MiniCard;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 300,
        borderRadius: 20,
        margin: 10,
        borderWidth: 2        
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    valor:{
        fontSize: 20
    }
})