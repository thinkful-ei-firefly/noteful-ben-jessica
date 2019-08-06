import React from 'react';
import Header from './components/Header';
import STORE from './dummy-store.js';
import { Route } from 'react-router-dom';
import MainView from './components/MainView';
import NoteView from './components/NoteView';

class App extends React.Component {

  state = {
    STORE, 
    selectedFolderId: null, 
    selectedNoteId: null
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
        <Header setFolderId={this.setFolderId}/>

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
          render={({history}) => <NoteView 
            notes={this.state.STORE.notes} 
            noteId={this.state.selectedNoteId} 
            folders={this.state.STORE.folders} 
            folderId={this.state.selectedFolderId}
            history={history}
            />}
        />

       
      </main>
    );}
  
}

export default App;