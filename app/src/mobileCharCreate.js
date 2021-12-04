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


export default function mobileCharCreate() {

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

      <Text>Create your hero!</Text>

      <View style= {{alignItems : 'center'}}>

      
      <View style={styles.characterWrap}>
      <ImageBackground source={bg} style={{width: '193%', height: '100%', alignItems: 'stretch'}}>

      <Image source = { choice} style={{ width: 300, height: 300 }} alt = 'colours' />

      </ImageBackground>

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

      <TouchableOpacity style={styles.continueBtn}>
        <Text style={styles.buttonText}>Embark!</Text>
      </TouchableOpacity>

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

  continueBtn: {
    width: 185,
    borderRadius: 25,
    height: 50,
    marginLeft: 'auto',
    marginTop: -55,
    marginRight: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FBE8B3",
  },

  characterWrap:{
    backgroundColor: "#FBE8B3",
    borderRadius: 20,
    width: "90%",
    height: 400,
    alignItems: "center",
    borderColor : "#C92D2D",
    borderWidth: 3,
    overflow: "hidden",
  },

  choiceWrap:{
    backgroundColor: "#ffffff",
    borderRadius: 20,
    height: 105,
    width: 95,
    margin: 15,
    borderColor : "#C92D2D",
    borderWidth: 3,
  },

  buttonText: {
    fontFamily: "Times",
    fontWeight: "bold",
    fontSize: 20,
    color: "#b8324f",
  },
}
)
;