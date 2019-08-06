import React from 'react';
import Sidebar from './Sidebar';
import Notebook from './Notebook';
import './MainView.css';

function MainView (props) {

    return (
        <div>
            <Sidebar folders={props.folders} setFolderId={props.setFolderId} />
            <Notebook notes={props.notes} id={props.folderId} setNoteId={props.setNoteId}/>
        </div>      

    );
}

export default MainView;