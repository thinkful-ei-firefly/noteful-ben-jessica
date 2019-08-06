import React from 'react';

function Notecard(props) {
  let date = new Date(props.modified);

  return (
    <li className="note">
      <h2>{props.name}</h2>
      <div className="note-flex">
        <span>{date.toLocaleDateString()}</span>
        <button>Delete</button>
      </div>
    </li>
  );
}

export default Notecard;
