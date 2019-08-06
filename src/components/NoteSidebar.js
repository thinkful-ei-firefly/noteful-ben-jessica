import React from 'react';
import { NavLink } from 'react-router-dom';


function NoteSidebar(props) {

const folders = props.folders;
const notes = props.notes;
const id = props.noteId;

const foundNote = notes.find(note => note.id ===id);
const folderId = foundNote.folderId;
const foundFolder = folders.find(folder => folder.id ===folderId);

return (
    <section className="sidebar">
        <button onClick={() => props.history.goBack()}>Go Back</button>
        <h2>{foundFolder.name}</h2>        
    </section>
);
}

export default NoteSidebar;
        