import React from 'react';
import './Folder.css';

function Folder(props) {
    
  return (
    <button className="folder-button" id={props.id}>{props.name}</button>
  );
}

export default Folder;