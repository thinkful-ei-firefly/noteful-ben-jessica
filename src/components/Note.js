import React from 'react';
import { NavLink } from 'react-router-dom';

function Note(props) {
  let date = new Date(props.modified);

  return (
    <li className="note">
      <h2>
        <NavLink
          to={`/note/${props.id}`}
          onClick={() => props.setNoteId(props.id)}
        >
          {props.name}
        </NavLink>
      </h2>
      <div className="note-flex">
        <span>{date.toLocaleDateString()}</span>
        <button>Delete</button>
      </div>
    </li>
  );
}

export default Note;
