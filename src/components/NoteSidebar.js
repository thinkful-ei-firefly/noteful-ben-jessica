import React from 'react';


function NoteSidebar(props) {


const folders = props.state.STORE.folders;
const id = props.state.selectedFolderId;
const foundFolder = folders.find(folder => folder.id ===id)


return (
    <section className="sidebar">
        <button>Go Back</button>
        <h2>{foundFolder.name}</h2>        
    </section>
);
}

export default NoteSidebar;
        