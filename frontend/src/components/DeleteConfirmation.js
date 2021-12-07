import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const DeleteConfirmation = (props) =>
{
    function choice(e)
    {
        e.preventDefault();
        if(e.target.name === "true")
        {
            props.handleDelete(true, props.id);
        } 
        else 
        {
            props.handleDelete(false, props.id);
        }
    }

    return(
        <Card.Body>
            <p>Are you sure you would like to delete?</p>
            <Form>
                <Button name="true" onClick={choice}>Yes</Button>
                <Button name="false" onClick={choice}>No</Button>
            </Form>
        </Card.Body>
    );
}

export default DeleteConfirmation;