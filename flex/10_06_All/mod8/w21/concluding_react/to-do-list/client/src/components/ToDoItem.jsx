import React from 'react';

const ToDoItem = (props) => {
    return (<li>{props.task} <button onClick={() => props.onDelete(props.id)}>Delete</button></li>)
}

export default ToDoItem;