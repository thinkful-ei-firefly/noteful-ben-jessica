import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NoteSidebar from './components/NoteSidebar';
import STORE from './dummy-store.js';
import Notebook from './components/Notebook';
import DetailNote from './components/DetailNote';
import { Route } from 'react-router-dom';
import MainView from './components/MainView';
import NoteView from './components/NoteView';

class App extends React.Component {

  state = {
    STORE, 
    selectedFolderId: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1", 
    selectedNoteId: "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1"
  }

  setNoteId = (newId) => {
    this.setState({selectedNoteId: newId})
  }
  
  setFolderId = (newId) => {
    this.setState({selectedFolderId: newId})
  }
    
  render () {
    return (
      <main className='App'>
        <Header />

        <Route 
          exact path="/"
          render={() => <MainView 
            folders={this.state.STORE.folders} 
            notes={this.state.STORE.notes} 
            folderId={this.state.selectedFolderId}
            setNoteId={this.setNoteId}
            setFolderId={this.setFolderId}
            />}
        />

        <Route 
          path="/folder/:folderid"
          render={() => <MainView 
            folders={this.state.STORE.folders} 
            notes={this.state.STORE.notes} 
            folderId={this.state.selectedFolderId}
            setNoteId={this.setNoteId}
            setFolderId={this.setFolderId}
            />}
        />

        <Route 
          path="/note/:noteid"
          render={() => <NoteView 
            notes={this.state.STORE.notes} 
            noteId={this.state.selectedNoteId} 
            folders={this.state.STORE.folders} 
            folderId={this.state.selectedFolderId}
            />}
        />

       
      </main>
    );}
  
}

export default App;