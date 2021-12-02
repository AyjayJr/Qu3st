import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
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
import dummy from './assets/dummy.png';
import red from './assets/dummyRed.png';
import blue from './assets/dummyBlue.png';
import yellow from './assets/dummyYellow.png';
import textStyling from './assets/textStyling.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

export default function App() {

  const red = require('./assets/dummyRed.png');
  const blue = require('./assets/dummyBlue.png');
  const yellow = require('./assets/dummyYellow.png');
  const normal = require('./assets/dummy.png');
  // Do this

  const colours = { red, blue, yellow, normal }

  const [choice, setSelected] = useState(colours.normal)
  



  return (
    <View style={styles.wrap}>

      <View style={styles.menuWrap}> 

      <div className="title">Create your hero!</div>

      <View style= {{alignItems : 'center'}}>

    
      <View style={styles.characterWrap}>


      <img src = { choice} style={{ width: 300, height: 300 }} alt = 'colours' />

        
      </View>
      </View>

      <View style={{flexDirection:'row', alignItems:'stretch'}}>

      <TouchableOpacity onPress={ () => setSelected(colours.red)} style={styles.choiceWrap}>
      <Image source={red} style={{ width: 100, height: 100 }} /> 
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => setSelected(colours.blue)} style={styles.choiceWrap}>
      <Image source={blue} style={{ width: 100, height: 100 }} /> 
      </TouchableOpacity>

      <TouchableOpacity onPress= { () => setSelected(colours.yellow) } style={styles.choiceWrap}>
      <Image source={yellow} style={{ width: 100, height: 100 }} /> 
      </TouchableOpacity>

      </View>

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
    flex: 1,
  },
  menuWrap:{
    borderRadius: 20,
    width: "70%",
    height: "90%",
    marginBottom: 20,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  characterWrap:{
    backgroundColor: "#FBE8B3",
    borderRadius: 20,
    width: 1000,
    height: 400,
    alignItems: "center",
    borderColor : "#C92D2D",
    borderWidth: 3,
    overflow: "hidden",
  },

  choiceWrap:{
    backgroundColor: "#ffffff",
    borderRadius: 20,
    height: 130,
    width: 125,
    margin: 15,
    borderColor : "#C92D2D",
    borderWidth: 3,
  }
}
)
;
