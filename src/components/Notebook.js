import React from 'react';
import Note from './Note';

function Notebook(props) {
    let notes = props.notes;
    
    if (props.id) {
        notes = notes.filter(note => note.folderId===props.id);
    }
    const htmlNotes = notes.map(note => <Note id={note.id} name={note.name} modified={note.modified} key={note.id} setNoteId={props.setNoteId}/>)

    
  return (
      <section className="notebook">
          <ul>
            {htmlNotes}
          </ul>          
          <button className="add-note-button">Add Note</button>
      </section>
  );
}

export default Notebook;