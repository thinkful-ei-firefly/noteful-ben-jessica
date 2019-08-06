import React from 'react';
import Folder from './Folder';
import './Sidebar.css';


function Sidebar(props) {

    const foldersHtml = props.folders.map(folder => <Folder name={folder.name} id={folder.id} key={folder.id}/>)

  return (
    <section className="sidebar">
        {foldersHtml}
        <button className="add-folder">Add Folder</button>
         
    </section>
  );
}

export default Sidebar;