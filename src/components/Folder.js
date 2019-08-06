import React from 'react';
import { NavLink } from 'react-router-dom';

function Folder(props) {
    
  return (
    <NavLink to={`/folder/${props.id}`} onClick={() => props.setFolderId(props.id)} className="folder-button" id={props.id}>{props.name}</NavLink>
  );
}

export default Folder;