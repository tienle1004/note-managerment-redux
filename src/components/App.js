import '../App.css';
import { Component } from 'react';
import Nav from './Nav'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import { connect } from 'react-redux'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  // getNoteInfo = (item) => {
  //   push(child(dbRef, 'noteData'), item)
  //   alert('Add note successfullly!')
  // }
  componentDidMount() {
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  showForm = () => {
    if (this.props.isEdit) {
      return <NoteForm />
    }
  }
  render() {
    return (
      <div className="App">
        <button
          type="button"
          className="btn btn-danger btn-floating btn-lg"
          id="btn-back-to-top"
        >
          <i className="bi bi-capslock-fill"></i>
        </button>
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
