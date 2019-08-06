import React from 'react';


function Note(props) {
    let date = new Date(props.modified)
    
  return (
    <li>
        <h2>{props.name}</h2>
        <span>{date.toLocaleDateString()}</span>
        <button>Delete</button>
    </li>
  );
}

export default Note;