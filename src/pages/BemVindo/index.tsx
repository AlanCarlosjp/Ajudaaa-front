import { Text, TouchableOpacity, View, } from 'react-native';
import { HomeScreenNavigationProp, HomeScreenRouteProp } from './types';
import React from 'react';
import styles from './styles';
import LottieView from 'lottie-react-native';
import Background from '../../componentes/BackGround';
import * as Location from 'expo-location';
import SendLocal from './service/SendLocal';


const BemVindo = ({ route, navigation }:
  { route: HomeScreenRouteProp, navigation: HomeScreenNavigationProp }) => {

  const [location, setLocation] = React.useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = React.useState<string>('');

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const texto = 'Precisa de ajuda ?';

  function sendLocalization(){
    SendLocal(location)
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Text
          style={styles.txt_1}
        >{texto}</Text>
        <TouchableOpacity
          onPress={sendLocalization}
        >
          <LottieView
            autoPlay
            ref={null}
            style={{
              width: 300,
              height: 400,
              backgroundColor: 'transparent',
            }}
            source={require('../../../assets/call.json')}
          />

        </TouchableOpacity>
      </View>
    </Background>

  )
}

export default BemVindo;

