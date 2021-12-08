import { StatusBar } from "expo-status-bar";
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

let questArr = [];
let curr_quest_id = "";
let questName = "";
let description = "";
let index = 0;

export default function Add() {

  const getQuests = async event => 
  {
    console.log(cod);
      //event.preventDefault();
      // FIXME: Pull Login And Password From Our Fields
      var obj = {};
      var js = JSON.stringify(obj);
      try
      {    
          //
          const response = await fetch('https://quest-task.herokuapp.com/api/listQuests',
              {method:'POST',body:js,headers:{'Content-Type': 'application/json', 'Authorization': token}});

          var res = JSON.parse(await response.text());
          console.log(res);
            if( res.error )
            {
              console.log("error getting quest id list");
              console.log(res.error)
              setErrorMessage(res.error.message);
            }
            else
            {
                console.log("no error getting quest id list");
                var hen = res.quests;
                //var quests = {FirstName:res.FirstName,LastName:res.LastName, Token:res.Token}
                //localStorage.setItem('quests', JSON.stringify(quests));
                //console.log(user);
                // TODO: Route To Dashboard Page And Send User Info
                // window.location.href = '/';
                // For Loop To View All Quest IDs

                questArr = [];
                for (let i = 0; i < hen.length; i++) 
                {
                  curr_quest_id = hen[i];
                  index = i;
                  viewQuests();
                }
                console.log('Quest Array Right Here:');
                localStorage.setItem('quest_data', JSON.stringify(questArr));
                console.log(questArr);
                console.log(localStorage.getItem('quest_data'))
                  // curr_quest_id = questID[i]
                  // index = i
                  // viewQuest (within this we set  = return value)
            }
      }
      catch(e)
      {
          alert(e.toString());
          return;
      }    
  };
  
  const viewQuests = async event => 
  {
    console.log(cod);
      //event.preventDefault();
      // FIXME: Pull Login And Password From Our Fields
      var obj = {id:curr_quest_id};
      var js = JSON.stringify(obj);
      console.log("View View");
      try
      {    
          //
          const response = await fetch('https://quest-task.herokuapp.com/api/viewQuest',
              {method:'POST',body:js,headers:{'Content-Type': 'application/json', 'Authorization': token}});

          var res = JSON.parse(await response.text());
          console.log(res);
            if( res.error )
            {
              console.log("error reading quests");
              console.log(res.error)
              setErrorMessage(res.error.message);
            }
            else
            {
                console.log("no error reading quests");
                console.log(res.quest);
                var quests = {
                  name:res.quest.name,
                  description:res.quest.description, 
                  id:res.quest._id
                };
                localStorage.setItem('quest_reee', JSON.stringify(quests));
                console.log("Look at me!");
                console.log(JSON.parse(localStorage.getItem('quest_reee')));
                questArr.push(quests);
                questName = res.quest.name;
                description=res.quest.description;
                console.log(questName);
                console.log(description);
                console.log(questArr);

                localStorage["mydatas"] = JSON.stringify(questArr);

                console.log(JSON.parse(localStorage["mydatas"])); 
                console.log(JSON.parse(localStorage["mydatas"])[0].id); 
                localStorage["First_Adress"] = JSON.stringify(JSON.parse(localStorage["mydatas"])[0].id)

                //localStorage.setItem('quests', JSON.stringify(quests));
                //console.log(user);
                // TODO: Route To Dashboard Page And Send User Info
                // window.location.href = '/';
            }
      }
      catch(e)
      {
          alert(e.toString());
          return;
      }    
  };


  const [errorMessage, setErrorMessage] = React.useState("");
  var obj = {name:"",description:"",urgency:"No", xPtotal:"0", due:"2021-11-05", isFinished:"0"}
  var cod = JSON.parse(localStorage.getItem('user_data'));
  var token = cod.Token
  const setname = (name) => {
    obj.name = name;
  }
  const setdescription = (description) => {
    obj.description = description;
  }
  const setdue = (due) => {
    obj.due = due;
  }
  const doAdd = async event => 
  {
      console.log(obj)
      //event.preventDefault();
      // FIXME: Pull Login And Password From Our Fields
      var js = JSON.stringify(obj);
      try
      {    
          //
          const response = await fetch('https://quest-task.herokuapp.com/api/createQuest',
              {method:'POST',body:js,headers:{'Content-Type': 'application/json', 'Authorization': token}});

          var res = JSON.parse(await response.text());
          //console.log(res);
          if( res.error )
          {
              // TODO: Send User Error Message
              console.log(res.error.message);
              setErrorMessage(res.error.message);
          }
          else
          {
              console.log("no error");
              console.log(res);
              //localStorage.setItem('regi_info', JSON.stringify(obj));
              console.log(obj);
              // This is where we will move to auth phase
              
              
              getQuests();

              console.log(questArr);

              //window.location.href = '/dash';
          }
      }
      catch(e)
      {
          alert(e.toString());
          return;
      }    
  };
  const goHome = async event => 
  {
    getQuests();

    console.log(questArr);

    window.location.href = '/dash';
  }
  return (
    <View style={styles.wrap}>
    
      <StatusBar style="auto" />

      <View style={[styles.regBox, textStyling.bg]}>
      

      <div className="regTitle">Hello adventurer...</div>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Quest Title"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setname(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Quest Description"
          placeholderTextColor="#003f5c"
          
          onChangeText={(description) => setdescription(description)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Due Date"
          placeholderTextColor="#003f5c"
          onChangeText={(due) => setdue(due)}
        />
      </View>

      <TouchableOpacity onPress = {() => doAdd()} style={styles.loginBtn}> 
        <Text style={styles.buttonText}>Accept Quest</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => goHome()} style={styles.nvm}>
        <Text style={styles.buttonText}>Return</Text>
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