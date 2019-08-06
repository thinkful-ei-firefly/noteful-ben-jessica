import React from 'react';
import Sidebar from './Sidebar';
import Notebook from './Notebook';

function MainView (props) {

    return (
        <div>
            <Sidebar folders={props.folders} setFolderId={props.setFolderId} />
            <Notebook notes={props.notes} id={props.folderId} setNoteId={props.setNoteId}/>
        </div>      

    );
}

export default MainView;