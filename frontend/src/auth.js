//import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link } from 'react-router-dom';
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
import textStyling from './assets/textStyling.css';


export default function Auth() {
  const [errorMessage, setErrorMessage] = React.useState("");
  var cod = JSON.parse(localStorage.getItem('regi_info'));
  console.log(cod);
  var obj = { email: cod.email, code: "" }
  const setCode = (code) => {
    obj.code = code;
  }

  const doRegister = async event => {
    console.log(obj)
    //event.preventDefault();
    // FIXME: Pull Login And Password From Our Fields
    var js = JSON.stringify(obj);
    try {
      //
      const response = await fetch('http://quest-task.herokuapp.com/api/confirm',
        { method: 'POST', body: js, headers: { 'Content-Type': 'application/json'}});

      var res = JSON.parse(await response.text());
      //console.log(res);
      if (res.error) {
        console.log("Error");
        // TODO: Send User Error Message
        console.log(res.error.message);
        setErrorMessage(res.error.message);
      }
      else {
        console.log("no error");
        console.log(res);
        console.log(obj);
        // This is where we will move to auth phase
        window.location.href = '/..';
      }
    }
    catch (e) {
      alert(e.toString());
      return;
    }
  };
  const goHome = async event => {
    window.location.href = '/..';
  }
  //Removed <StatusBar style="auto" />
  return (
    <View style={styles.wrap}>

      

      <View style={[styles.regBox, textStyling.bg]}>
        <Image source={logo} style={{ width: 750, height: 300 }} />

        <div className="regTitle">Enter 6 Digit Code</div>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="6 Digit Code"
            placeholderTextColor="#003f5c"
            onChangeText={(code) => setCode(code)}
          />
        </View>



        <TouchableOpacity onPress={() => doRegister()} style={styles.loginBtn}>
          <Text style={styles.buttonText}>Embark!</Text>
        </TouchableOpacity>

        {errorMessage && (<p className="error"> {errorMessage} </p>)}
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

  wrap: {
    backgroundColor: "#a6dee3",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },

  regBox: {
    align: "center",
    backgroundColor: "#FBE8B3",
    borderColor: "#C92D2D",
    borderWidth: 3,
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
    borderColor: "#45062e",
    borderWidth: 2,
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
