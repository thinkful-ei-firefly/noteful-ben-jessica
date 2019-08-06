import React from 'react';
import NoteSidebar from './NoteSidebar';
import DetailNote from './DetailNote';
import './NoteView.css';

function NoteView (props) {

    return (
        <div>
            <NoteSidebar folders={props.folders} notes={props.notes} noteId={props.noteId} history={props.history} />
            <DetailNote notes={props.notes} noteId={props.noteId}/>
        </div>      

    );
}

export default NoteView;