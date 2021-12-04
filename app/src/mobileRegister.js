import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import logo from './assets/QU3ST2.png';
import bg from './assets/background.png';

export default function mobileRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.wrap}>
        <ImageBackground source={bg} style={{width: '100%', height: '100%', alignItems: 'center'}}>

      <StatusBar style="auto" />

      <View style={[styles.regBox, {justifyContent: 'center'}]}>

      <Text style={styles.titleText}>The Journey begins...</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={[styles.loginBtn, styles.shadowProp]}>
        <Text style={styles.buttonText}>Embark!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.nvm, styles.shadowProp]}>
        <Text style={{color: "#FFFFFF"}}>Return to Login</Text>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  wrap: {
    backgroundColor:"#a6dee3",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  regBox: {
    backgroundColor: "#FBE8B3",
    marginTop: 80,
    borderRadius: 25,
    width: "90%",
    height: "75%",
    alignItems: "center",
    borderColor : "#C92D2D",
    borderWidth: 4,
    overflow: "hidden",
  },

  image: {
    marginBottom: 40,
    width: 300,
    height: 100,
  },

  inputView: {
    backgroundColor: "#A1869E",
    borderRadius: 30,
    width: "65%",
    height: 40,
    margin: 14,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    textAlign: 'center',
  },

  titleText: {
      color: "#C92D2D",
      fontSize: 35,
      textAlign: 'center',
      marginBottom: 20,

  },

  buttonText: {
    color: "white",
    fontSize: 30,
  },

  forgot_button: {
    height: 30,
    paddingTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: "#797596",
  },

  nvm: {
    width: "60%",
    borderRadius: 20,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: "#797596",
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

});