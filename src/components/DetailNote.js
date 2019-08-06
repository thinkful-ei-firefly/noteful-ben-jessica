import React from 'react';
import Notecard from './Notecard';


function DetailNote(props) {
    const [note] = props.notes.filter(note => note.id===props.noteId);
    
  return (
      <section className="note-detail">
          <Notecard id={note.id} name={note.name} modified={note.modified} key={note.id}/>
          <p>{note.content}</p>
      </section>
  );
}

export default DetailNote;