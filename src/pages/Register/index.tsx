import { View, Text, KeyboardAvoidingView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import style from './styles';
import { StatusBar } from 'expo-status-bar';
import { Button, Input } from "@rneui/base";
import { cpfCnpjRegex } from '../../global';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';


const Register = () => {
  const navigate = useNavigation();


  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  useLayoutEffect(() => {
    navigate.setOptions({})
  }, [navigate])

  function verificarCpf() {
    console.log(cpfCnpjRegex.test(cpf))
  }

  const registrar = () => {
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      alert("Não foi possivel cadastrar")
    });
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={style.container} >
      <StatusBar style='dark' />
      <Text style={style.text_1}>Quero muito te conhecer, {'\n'}Faça sua conta e
        vamos conversar </Text>

      <View style={style.inputContainer}>
        <View style={style.space} />
        <Input
          placeholder='Nome'
          autoFocus
          value={nome}
          style={style.inpTxt}
          onChangeText={txt => setNome(txt)}
        />
        <Input
          placeholder='Email'
          value={email}
          textContentType='emailAddress'
          style={style.inpTxt}
          onChangeText={txt => setEmail(txt)}
        />
        <Input
          placeholder='CPF'
          value={cpf}
          style={style.inpTxt}
          onChangeText={txt => setCpf(txt)}
        />
        <Input
          placeholder='Senha'
          value={senha}
          secureTextEntry
          textContentType='password'
          style={style.inpTxt}
          onChangeText={txt => setSenha(txt)}
        />
        <Button onPress={registrar}
          size={'lg'}
          raised
          color="secondary"
          title="Cadastrar" />

      </View>

    </KeyboardAvoidingView>
  )
}

export default Register;