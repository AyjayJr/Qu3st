import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {ImageBackground, View, StyleSheet, TextInput} from 'react-native';
import axios from 'axios';
import bg from './../assets/background.png'
import Task from './Task';
import FilterButtons from './FilterButtons';
import NewTaskForm from './NewTaskForm';
import ButtonIcons from './ButtonIcons';
import DeleteConfirmation from './DeleteConfirmation';
import path from './Path.js'
// import styles from './../assets/style'

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

function ToDoList(props) {

    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState('All');
    const [message, setMessage] = useState('');

    const [name, setName] = useState(props.name);
    const [isEditing, setEditing] = useState(false);
    const editFieldRef = useRef(null);
    const editButtonRef = useRef(null);
    const wasEditing = usePrevious(isEditing);
    const [delCon, setDelCon] = useState(false);

    const addRes = useRef(null);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    // Filter names and conditions
    const FILTER_MAP = {
        All: () => true,
        Unfinished: task => task.completed === false,
        Completed: task => task.completed
    };

    const FILTER_NAMES = Object.keys(FILTER_MAP);


    // Toggle for filter/browser to unify state
    function toggleTaskCompleted(id) {
        let completed = false;
        const updatedTasks = tasks.map(task => {

            if (id === task.id) {
                completed = !task.completed;
                return { ...task, completed: !task.completed }
            }

            return task;
        });
        
        const config = {
            method: 'post',
            url: path.updateTask,
            headers:
            {
                'Content-Type': 'application/json'
            },
            data: {
                token: localStorage.getItem("toke"),
                completed: completed
            }
        };

        axios(config)
            .then(function (response) {
                var res = response.data;
                if (res.error) {
                    setMessage('Error editing task');
                    addRes.current.style.display = "inline-block";
                    return;
                }

                setTasks(updatedTasks);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // For rendering desired number of tasks based on task props
    const taskList = tasks
        ?.filter(FILTER_MAP[filter])
        .map(task => (
            <Task
                id={task.id}
                name={task.text}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ));

    // For rendering desired number of filter buttons by name and condition
    const filterList = FILTER_NAMES.map(name => (
        <FilterButtons
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    function addTask(name) {
        const config = {
            method: 'post',
            url: path.createTask,
            data: {
                token: localStorage.getItem("token"),
                completed: false,
                text: name,
                text: date,
                text: urgency,
                text: description
            }
        };

        //const config = {method: "post",  url: path.createQuest, headers: {Authorization: `Bearer ${token}`}, };  
        axios.post(path.createTask, obj, config) 
        .catch(error => console.error('Error: ', error));
    }

    function editTask(id, newName) {

        const config = {
            method: 'post',
            url: path.updateTask,
            headers: {Authorization: `Bearer ${token}`},
            data: {
                token: localStorage.getItem("token"),
                text: newName
            }
        };

        axios.post(path.updateTask, obj, config) 
        .catch(error => console.error('Error: ', error));
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        const config = {
            method: 'post',
            url: path.deleteTask,
            headers: {Authorization: `Bearer ${token}`},
            data: {
                "token": localStorage.getItem("token")
            }
        };

        axios(config)
            .then(function (response) {

                const res = response.data;
                if (res.error) {
                    setMessage('Error deleting task');
                    addRes.current.style.display = "inline-block";
                    return;
                }

                setTasks(remainingTasks);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.editList(props.id, name, props.tasks);
        setName(name);
        // re-init. date and setting editing state to false
        setEditing(false);
    }

    function handleDelete(choice, id){

        console.log(choice);
        if(choice == true){
            props.deleteList(id);
            setDelCon(false);
        } else{
            setDelCon(false);
        }
    }

    const editingTemplate = (
    <Card.Body className="cardContent">
        <form className="form editTask" onSubmit={handleSubmit}>
            <div className="editFields splitFields">
                <input
                    id={props.id}
                    name="name"
                    className="todo-text inFields"
                    type="text"
                    value={name}
                    onChange={handleChange}
                    ref={editFieldRef}
                />
                <div className="editBtns editRow">
                    <Button
                        type="button"
                        className="buttonScheme schedButton"
                        onClick={() => setEditing(false)}
                    >
                        Test
                    </Button>
                    <Button type="submit" className="buttonScheme schedButton">
                        Save
                    </Button>
                </div>
            </div>
        </form>
        <div className="filterBtns priority">
            {filterList}
        </div>
        <ListGroup variant="flush" className="listAdjust">
            {taskList}
        </ListGroup>
        <NewTaskForm addTask={addTask} />
    </Card.Body>
    );

/*      filter list view
            <div className="filterBtns priority">
                {filterList}
            </div> */

    const viewTemplate = (
        <Card.Body className="cardContent">
            {
                !props.singleView
                    ? <h1><a className="singleView" href={`/list/${props.id}`}>{props.name}</a></h1>
                    : <h1>{props.name}</h1>
            }

            <button 
                type="button" 
                className="btn listCtrl" 
                onClick={ () => setEditing(true) } 
                ref={editButtonRef}
            >
                <ButtonIcons type="Edit" />
            </button>
            <button 
                type="button"
                className="btn delListView" 
                onClick={() => setDelCon(true)}
            >
                <ButtonIcons type="Delete" />
            </button>
            <ListGroup variant="flush" className="listAdjust">
                {taskList?.length < 1 ? <p><br />Add a new task below</p> : taskList}
            </ListGroup>
            <NewTaskForm type="Priority" addTask={addTask} />
            <span id="taskResult" ref={addRes} style={{ display: "none", color: "red" }}>{message}</span>
        </Card.Body>
    );

    useEffect(() => {
        if (!wasEditing && isEditing) {
            editFieldRef.current.focus();
        }
        if (wasEditing && !isEditing) {
            editButtonRef.current.focus();
        }
    }, [wasEditing, isEditing]);

    return (
            <View>
                {delCon ? <DeleteConfirmation id={props.id} handleDelete={handleDelete}/> : (isEditing ? editingTemplate : viewTemplate)}
            </View>
    );
}

export default ToDoList;


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