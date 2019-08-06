import React from 'react';
import Folder from './Folder';


function Sidebar(props) {

    const foldersHtml = props.folders.map(folder => <Folder setFolderId={props.setFolderId} name={folder.name} id={folder.id} key={folder.id}/>)

  return (
    <section className="sidebar">
        {foldersHtml}
        <button className="add-folder">Add Folder</button>
         
    </section>
  );
}

export default Sidebar;