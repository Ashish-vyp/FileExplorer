import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Controls = (props) => {

    const { handleEditClick, handleDelete } = props;

    return (
        <React.Fragment>
            <FaEdit onClick={handleEditClick} style={{marginLeft: '8px'}}/> 
            <FaTrash onClick={handleDelete} style={{marginLeft: '8px'}}/> 
        </React.Fragment>
        
    )
};

export default Controls;