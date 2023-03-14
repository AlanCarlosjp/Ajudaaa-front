import React from 'react'
import { Text, View } from 'react-native';
import Background from '../../componentes/BackGround';
import styles from './styles';
import LottieView from 'lottie-react-native';


const Home = () => {

    const texto = 'Estamos Procurando o mecanico mais perto....';

    return (
        <Background>
            <View style={styles.container}>
                <Text
                    style={styles.txt_1}
                >{texto}</Text>
                <View style={{height: 30}}/>
                    <LottieView
                        autoPlay
                        ref={null}
                        style={{
                            height: 450,
                            backgroundColor: 'transparent',
                        }}
                        source={require('../../../assets/mech.json')}
                    />

            </View>
        </Background>
    )
}

export default Home