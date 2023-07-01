import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import LottieView from 'lottie-react-native';
import { Entypo } from '@expo/vector-icons';

export function Login() {
    const [visible, setVisible] = useState(false)

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0182F7', '#115B97', '#203841']}
        style={{flex:1}}
      >
        <Text style={styles.title1}>SMART</Text>
        <Text style={styles.title2}>UBS</Text>
        <Text style={styles.subtitle}>Realize seu login e tenha acesso às funcionalidades do app.</Text>
        <View style={styles.inputEmailView}>
            <View style={{position:'absolute', width:40, height:40}}>
                <LottieView
                autoPlay
                source={require('../Lotties/98814-email.json')}
                />
            </View>
            <TextInput placeholder='Endereço de E-mail' style={styles.inputEmail} ></TextInput>
        </View>
        <View style={styles.inputSenhaView}>
            <View style={{position:'absolute', width:40, height:40}}>
                <LottieView
                autoPlay
                source={require('../Lotties/105919-password-security.json')}
                />
            </View>
            <TextInput placeholder='Senha' style={styles.inputSenha}></TextInput>
            {
                visible ? (
                    <TouchableOpacity onPress={()=>setVisible(!visible)} style={{alignSelf:'center', justifyContent:'center', marginLeft:10}}>
                        <Entypo name="eye" size={24} color="black" />
                    </TouchableOpacity>
                )
                :
                    (
                        <TouchableOpacity onPress={()=>setVisible(!visible)} style={{alignSelf:'center', justifyContent:'center', marginLeft:10}}>
                            <Entypo name="eye-with-line" size={24} color="black" />
                        </TouchableOpacity>
                    )
                    
            }
        </View>
        <TouchableOpacity style={styles.botaoLogin}><Text style={styles.textBtLogin}>Login</Text></TouchableOpacity>
        <TouchableOpacity style={styles.botaoEsq}><Text style={styles.textBtEsq}>Esqueceu a senha?</Text></TouchableOpacity>
        <Text style={styles.extra}>Ao realizar login você concorda com nossos {<Text style={styles.termos}>termos e condições</Text>} e com nossa {<Text style={styles.politica}>Politica de privacidade</Text>}.</Text>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  title1:{
    marginTop:35,
    marginBottom:-30,
    color:'#fff',
    fontSize:20,
    textAlign:'center',
    fontWeight:'300',
    fontFamily:'Roboto_300Light'
  },
  title2:{
    fontSize:85,
    fontWeight:'700',
    textAlign:'center',
    color:'#fff',

  },
  subtitle:{
    color:'#fff',
    paddingHorizontal:8,
    textAlign:'center',
    marginTop:25,
    marginBottom:65,
  },
  inputEmail:{
    backgroundColor:'#fff',
    height:45,
    marginLeft:51,
    width:'85%',
    borderRadius:8,
    display:'flex'
  },
  inputEmailView:{
    backgroundColor:'#fff',
    height:45,
    width:'90%',
    alignSelf:'center',
    borderRadius:8,
    marginBottom:25,
  },
  inputSenha:{
    backgroundColor:'#fff',
    height:45,
    marginLeft:51,
    width:'70%',
    borderRadius:8,
    display:'flex'
  },
  inputSenhaView:{
    backgroundColor:'#fff',
    height:45,
    width:'90%',
    alignSelf:'center',
    borderRadius:8,
    marginBottom:25,
    flexDirection:'row'
  },
  botaoLogin:{
    backgroundColor:'#475459',
    width:"90%",
    alignSelf:'center',
    height:45,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    elevation:10,
    marginBottom:10,
    fontFamily:'Roboto_400Regular'

  },
  textBtLogin:{
    color:'#fff',
    fontSize:16
  },
  textBtEsq:{
    color:'#fff',
    textAlign:'center',
    marginBottom:95
  },
  extra:{
    color:'#fff',
    textAlign:'center',
    fontSize:13,
    paddingHorizontal:15
  },
  termos:{
    color:'#0182F7'
  },
  politica:{
    color:'#0182F7'
  },
});
