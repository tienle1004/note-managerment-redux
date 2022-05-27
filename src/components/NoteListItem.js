import React, { Component } from 'react';
import {connect} from 'react-redux'

class NoteListItem extends Component {
    getLevelNote = () => {
        if (this.props.noteLevel === 1) {
            return "border-danger"
        } else if (this.props.noteLevel === 2) {
            return "border-warning"
        } else {
            return "border-info"
        }
    }

    getNoteInfo = () => {
        this.props.changeEditStatus()
        this.props.getEditData(this.props.note);
    }
    render() {
        return (
            <div className="card">
                <div className={"card-header " + this.getLevelNote()} id="headingOne">
                    <div className='row'>
                        <div className="col-9 mb-0">
                            <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target={"#collapse" + this.props.id} aria-expanded="true" aria-controls="collapseOne">
                                {this.props.noteTitle}
                            </button>
                        </div>
                        <div className="btn-group col-3" aria-label="Basic example">
                            <button type="button" onClick={() => this.getNoteInfo()} className="btn btn-warning">Edit</button>
                            <button type="button" onClick={() => this.props.deleteNoteById(this.props.note.id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
                <div id={"collapse" + this.props.id} className="collapse show" aria-labelledby="headingOne" data-parent={"#collapse" + this.props.id}>
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
                <div className="card-footer text-monospace text-right">
                    <small>{this.props.noteDate}</small>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getEditData: (editObject) => {
        dispatch({
          type: "GET_EDIT_DATA",
          editObject
        })
      },
      changeEditStatus: () => {
          dispatch({
              type: "CHANGE_EDIT_STATUS"
          })
      },
      deleteNoteById: (deleteId) => {
          dispatch({
              type: "DELETE_NOTE",
              deleteId
          })
      }
    }
}

export default connect(null, mapDispatchToProps)(NoteListItem)