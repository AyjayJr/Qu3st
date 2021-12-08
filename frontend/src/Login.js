//import { StatusBar } from "expo-status-bar";
import { BrowserRouter as Router, Route, Routes, Redirect, Switch, Link } from 'react-router-dom';
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
import Register from "./register";
import textStyling from './assets/textStyling.css';

var obj = {email:"",password:""}

export default function Login() {
  const [errorMessage, setErrorMessage] = React.useState("");
  const doRegister = async event => 
  {
    window.location.href = '/register';
  }
  // Function To Log User In
  // Takes Email and 
  // Returns Error JSON If Error Occured
  // Returns Token If Valid
  const doLogin = async event => 
  {

      console.log(obj);
      //event.preventDefault();
      // FIXME: Pull Login And Password From Our Fields
      //var obj = {email:"culltrip@gmail.com",password:"COP4331!p"};
      var js = JSON.stringify(obj);
      try
      {    
          //https
          const response = await fetch('https://quest-task.herokuapp.com/api/login',
              {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

          var res = JSON.parse(await response.text());
          //console.log(res);
            if( res.error )
            {
              console.log(res.error)
              setErrorMessage(res.error.message);
            }
            else
            {
                console.log("no error");
                var user = {FirstName:res.FirstName,LastName:res.LastName, Token:res.Token}
                localStorage.setItem('user_data', JSON.stringify(user));
                console.log(user);
                // TODO: Route To Dashboard Page And Send User Info
                window.location.href = '/dash';
            }
      }
      catch(e)
      {
          alert(e.toString());
          return;
      }    
  };

     const [state, setState] = useState(
        {
            loginName: "",
            loginPassword: ""
        }
    );

    const setEmail = (email) => {
      obj.email = email;
    }
    const setPassword = (password) => {
      obj.password = password;
    }
    
   return (

    <View style={styles.wrap}>
      <ImageBackground source={bg} style={{width: '100%', height: '100%', alignItems: 'center'}}>

      <View style={styles.menuWrap}>
      

      <Image source={logo} style={{ width: 750, height: 300 }} /> 

      <div className="loginTitle">Where your everyday tasks make you the hero.</div>

      <View style={[styles.inputView, styles.shadowProp]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={[styles.inputView, styles.shadowProp]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => doLogin()} style={[styles.loginBtn, styles.shadowProp]}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      {/* <div className="subText">New here, adventurer? Begin your journey </div> --> */}

      <TouchableOpacity onPress = {() => doRegister()} style={[styles.registerBtn, styles.shadowProp]}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      {errorMessage && (<p className="error"> {errorMessage} </p>)}
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

  menuWrap:{
    backgroundColor: "#FBE8B3",
    marginTop: 30,
    borderRadius: 25,
    width: 800,
    height: "90%",
    alignItems: "center",
    borderColor : "#C92D2D",
    borderWidth: 4,
    overflow: "hidden",
  },

  wrap:{
    align: "center",
    backgroundColor:"#a6dee3",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },

  image: {
    marginTop: -10,
    marginBottom: 20,
    width: 300,
    height: 100,
  },

  inputView: {
    backgroundColor: "#A1869E",
    borderRadius: 30,
    width: "30%",
    height: 40,
    marginBottom: 14,
    alignItems: "center",
  },

  loginText:{
    fontFamily: "Garamond, serif",
    fontWeight: "bold",
    color: "white",
  },

  TextInput: {
    height: 50,
    flex: 1,
    textAlign: 'center',
  },

  forgot_button: {
    height: 30,
    paddingTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    fontFamily: "Garamond, serif",
    fontSize: 14,
    fontWeight: "bolder",
    marginTop: -10,
    marginBottom: 10,
    padding: 20,
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#797596",
  },

  registerBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#797596",
  },
});