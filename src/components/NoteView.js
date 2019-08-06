import React from 'react';
import NoteSidebar from './NoteSidebar';
import DetailNote from './DetailNote';

function NoteView (props) {

    return (
        <div>
            <NoteSidebar folders={props.folders} folderId={props.folderId} />
            <DetailNote notes={props.notes} noteId={props.noteId}/>
        </div>      

    );
}

export default NoteView;