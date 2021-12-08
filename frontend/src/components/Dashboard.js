import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {ImageBackground, View, StyleSheet, TextInput, Text} from 'react-native';
//import axios from 'axios';
//import bg from './../assets/background.png'
//import Task from './Task';
//import FilterButtons from './FilterButtons';
//import NewTaskForm from './NewTaskForm';
//import ButtonIcons from './ButtonIcons';
//import DeleteConfirmation from './DeleteConfirmation';
//import path from './Path.js'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import Grid from "@material-ui/core/Grid";
//import Checkbox from "@material-ui/core/Checkbox";
//import TaskList from './TaskList'



    function NotDash(props) {

      /*  var obj = {name:"To the Store",date:"12/14/21",description:"I need to get milk",urgency:"High"} dummy */
      var obj = {name : props.name, date: props.date, description: props.date, urgency: props.urgency};

      var questList = [...{fields: props.description, label: props.name}]

      const exampleList = [
  {
    label: "FormGroup-0",
    content:
      "FormGroup-0 FormGroup-0 FormGroup-0FormGroup-0 FormGroup-0 FormGroup-0",
    fields: [
      {
        el: "input",
        type: "text",
        id: "pension-disability",
        label: "Pension/Disability",
        placeholder: "Pension/Disability",
        value: "",
        name: "pension-disability",
        validation: "currency",
        useValue: true,
        charLimit: 6
      },
      {
        el: "input",
        type: "text",
        id: "testing",
        label: "Testing",
        placeholder: "Testing",
        value: "",
        name: "testing",
        validation: "currency",
        useValue: true,
        charLimit: 6
      }
    ]}];


      return(

      <View>
        <Accordion >
         {exampleList.map((item, index) => (
           <AccordionSummary index={index} activeTab={1} isCollapsible expandIcon={<ExpandMoreIcon />}>             
               {item.label}
             <AccordionDetails>
               <Text>
               <p>{item.content}</p>
                {item.fields && item.fields.map(() => <div>Field</div>)}
                </Text>
             </AccordionDetails>
             </AccordionSummary>
         ))}
      </Accordion>
    </View>

        );
      
      }
      
      export default NotDash;

      const styles = StyleSheet.create({

        questTitle: {
            fontFamily: "Garamond, serif",
            alignItems: "center",
            justifyContent: "center",
          },


      });

      //   <View>
    //     <Accordion>
    //      <AccordionSummary style = { {backgroundColor: "#BCA3AC", width: 750, borderRadius: 5}}>
    //       <Text style = {styles.questTitle}>{obj.name}</Text>
    //       <Text> Due Date - {obj.date} </Text>
    //     </AccordionSummary>
    //     <AccordionDetails>
    //       <Text>
    //         {obj.description}
    //       </Text>
    //       <Text>
    //         {obj.urgency}
    //       </Text>
        
    //     <Button> Edit </Button>
    //     <Button> Delete </Button>

    //     </AccordionDetails>
    //   </Accordion>
    // </View>