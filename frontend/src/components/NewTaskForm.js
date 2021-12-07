import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ButtonIcons from './ButtonIcons';

function NewTaskForm(props)
{
    const [state, setState] = useState(
        {
            name: "",
            date: ""
        }
    );

    const show = useRef(null);
    const focus = useRef(null);

    let err = "*Your task needs a name"

    const handleChange = (e) =>
    {
        setState(
            {
                ...state, 
                [e.target.name]: e.target.value
            }
        )
    }

    function handleSubmit(e)
    {
        e.preventDefault();

        if(state.name === "")
        {
            show.current.style.display = "inline-block";
            focus.current.focus();
            return;
        } 
        else 
        {
            show.current.style.display = "none";
        }

        if(props.type === "Priority")
        {
            props.addTask(state.name);
        }
        else 
        {
            props.addTask(state.name, state.date);
        }

        state.name = "";
        state.date = "";
    }

    return(
        <Form onSubmit={handleSubmit}>      
            <div id="newTaskForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="new-todo-input"
                    className="inFields newTask"
                    name="name"
                    autoComplete="off"
                    placeholder="New Task"
                    value={state.name}
                    onChange={handleChange}
                    ref={focus}
                />
                <Button type="submit" className="buttonScheme">
                    <ButtonIcons type="Add"/>
                </Button>
            </div>
            <span ref={show} className="errorMsg" style={{display: "none", color: "red"}}>{err}</span>
        </Form>
    );
}

export default NewTaskForm;