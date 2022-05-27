import React, { Component } from 'react';
import { connect } from 'react-redux'

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            noteTitle: '',
            noteDate: '',
            noteContent: '',
            noteLevel: ''
        }
    }

    componentDidMount() {
        if (this.props.editItem) {
            this.setState({
                id: this.props.editItem.id,
                noteTitle: this.props.editItem.noteTitle,
                noteDate: this.props.editItem.noteDate,
                noteContent: this.props.editItem.noteContent,
                noteLevel: Number(this.props.editItem.noteLevel)
            });
        }
    }


    isChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    getFormValue = (title, date, content, level) => {
        if (this.state.id) {
            var noteItem = {}
            noteItem.id = this.state.id
            noteItem.noteTitle = this.state.noteTitle
            noteItem.noteDate = this.state.noteDate
            noteItem.noteContent = this.state.noteContent
            noteItem.noteLevel = Number(this.state.noteLevel)

            this.props.editNote(noteItem)

        } else {
            //react origin
            var item = {}
            item.noteTitle = title
            item.noteDate = date
            item.noteContent = content
            item.noteLevel = Number(level)
            console.log(item);
            // this.props.noteInfo(item)

            //react-redux
            this.props.addDataStore(item)
        }
        this.props.changeEditStatus()
    }

    showFormTitle = () => {
        if (this.props.addStatus) {
            return "Add Note"
        }else {
            return "Edit Note"
        }
    }
    render() {
        return (
            <div className="col-3">
                <div className="card border-info">
                    <div className="card-header bg-info text-white text-center">
                        {this.showFormTitle()}
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group row">
                                <div className="col-sm-12 text-left">
                                    <label htmlFor='noteTitle'>Title</label>
                                    <input defaultValue={this.props.editItem.noteTitle} type="text" title='input title of your note' name='noteTitle' onChange={(e) => this.isChange(e)} className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12 text-left">
                                    <label htmlFor='noteDate'>Date</label>
                                    <input defaultValue={this.props.editItem.noteDate} type="date" title='choose date for note' name='noteDate' onChange={(e) => this.isChange(e)} className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12 text-left">
                                    <label htmlFor='noteContent'>Content</label>
                                    <textarea defaultValue={this.props.editItem.noteContent} name='noteContent' title='content for note' onChange={(e) => this.isChange(e)} className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-12 text-left">
                                    <label htmlFor='noteLevel'>Level</label>
                                    <select defaultValue={this.props.editItem.noteLevel} className="form-control" title='choose the level' onChange={(e) => this.isChange(e)} name='noteLevel' id="exampleFormControlSelect1" >
                                        <option >Choose level</option>
                                        <option value={1}>High</option>
                                        <option value={2}>Medium</option>
                                        <option value={3}>Low</option>
                                    </select>
                                </div>
                            </div>
                            <hr />
                            <div className="form-group row text-center">
                                <div className="col-sm-12">
                                    <button type="reset" onClick={() => this.getFormValue(this.state.noteTitle, this.state.noteDate, this.state.noteContent, this.state.noteLevel)} className="btn btn-success">create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (noteFormItem) => {
            dispatch({ type: "ADD_DATA", noteFormItem })
        },
        editNote: (getInfoEdit) => {
            dispatch({
                type: "EDIT_NOTE",
                getInfoEdit
            })
        },
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)