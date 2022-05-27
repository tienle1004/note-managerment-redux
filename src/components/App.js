import '../App.css';
import { Component } from 'react';
import Nav from './Nav'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import {connect} from 'react-redux'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }
  
  // getNoteInfo = (item) => {
  //   push(child(dbRef, 'noteData'), item)
  //   alert('Add note successfullly!')
  // }
  showForm = () => {
    if (this.props.isEdit) {
      return <NoteForm />
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container mt-2">
          <div className="row">
            <NoteList />
            {this.showForm()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

export default connect(mapStateToProps, null)(App)
