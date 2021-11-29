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
} from "react-native";
import logo from './assets/QU3ST2.png';
import textStyling from './src/textStyling.css';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.wrap}>

      <StatusBar style="auto" />

      <View style={[styles.regBox, textStyling.bg]}>

      <div className="regTitle">The Journey begins...</div>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setEmail(username)}
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

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.buttonText}>Embark!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nvm}>
        <Text style={{fontFamily: "times", color: "#E5A4CB"}}>Return to Login</Text>
      </TouchableOpacity>
      </View>
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

  wrap:{
    backgroundColor:"#a6dee3",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },

  regBox:{
    align: "center",
    backgroundColor: "#FBE8B3",
    borderColor : "#C92D2D",
    borderWidth : 3,
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    padding: "10",
    width: "60%",
    borderRadius: "10%",
  },

  image: {
    marginBottom: 40,
    width: 300,
    height: 100,
  },

  inputView: {
    backgroundColor: "#E5A4CB",
    borderColor : "#45062e",
    borderWidth : 2,
    borderRadius: 20,
    margin: 10,
    width: "30%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    textAlign: 'center',
  },

  buttonText: {
    fontFamily: "Times",
    fontWeight: "bold",
    fontSize: 30,
    color: "#E5A4CB",
  },

  forgot_button: {
    height: 30,
    paddingTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },

  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#45062e",
  },

  nvm: {
    width: "30%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#45062e",
  },
});
