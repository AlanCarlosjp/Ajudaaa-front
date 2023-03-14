import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base';

type BotaoType = {
    label: string;
    onPress: () => void;
}

interface BotaoProp {
    botaoProp: BotaoType
}

const Botao = ({ botaoProp }: BotaoProp) => {

    return (
            <Button
                title={botaoProp.label}
                onPress={botaoProp.onPress} />
    )
}

export default Botao;