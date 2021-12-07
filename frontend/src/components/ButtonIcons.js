import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { VscAdd } from 'react-icons/vsc';

function ButtonIcons(props) {
    if (props.type === "Add") {
        return (
            <VscAdd className="icons" />
        );
    }
    else if (props.type === "Edit") {
        return (
            <FiEdit className="icons" />
        );
    }
    else if (props.type === "Delete") {
        return (
            <AiOutlineDelete className="icons" />
        );
    }
}

export default ButtonIcons;