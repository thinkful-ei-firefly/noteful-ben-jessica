import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NoteSidebar from './components/NoteSidebar';
import STORE from './dummy-store.js';
import Notebook from './components/Notebook';
import DetailNote from './components/DetailNote';
import { Route } from 'react-router-dom';

class App extends React.Component {

  state = {
    STORE, 
    selectedFolderId: "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1", 
    selectedNoteId: "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1"
  }

    
  render () {
    return (
      <main className='App'>
        <Header />
        {/* <Route exact path='/' component = {Sidebar}/> */}
        
        <Sidebar folders={this.state.STORE.folders}/>
        {/* <NoteSidebar state={this.state} /> */}

        {/* <Notebook notes={this.state.STORE.notes} id={this.state.selectedFolderId}/> */}
        <DetailNote notes={this.state.STORE.notes} id={this.state.selectedNoteId}/>
  
        {/* content goes here */}
      </main>
    );}
  
}

export default App;