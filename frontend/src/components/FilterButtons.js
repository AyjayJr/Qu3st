import React from 'react';
import { Button } from 'react-bootstrap';

function FilterButtons(props)
{
    return(
        <Button type="button" className="buttonScheme toggle-btn filter" 
            aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>
                {props.name}
        </Button>
    );
}
export default FilterButtons;