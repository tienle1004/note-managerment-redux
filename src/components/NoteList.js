import React, { Component } from 'react';
import NoteListItem from './NoteListItem';
import { dbRefShow } from './DataFirebase'
import { onValue } from 'firebase/database';

class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    componentDidMount() {
        onValue(dbRefShow, (notes) => {
            var arrData = []
            notes.forEach(element => {
                const key = element.key
                const noteTitle = element.val().noteTitle
                const noteDate = element.val().noteDate
                const noteContent = element.val().noteContent
                const noteLevel = element.val().noteLevel

                arrData.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteDate: noteDate,
                    noteContent: noteContent,
                    noteLevel: noteLevel
                })
            });
            this.setState({
                dataFirebase: arrData
            });

        })
    }
    
    getData = () => {
        
        if (this.state.dataFirebase) {
            return this.state.dataFirebase.map((value, key) => {
                return (
                    <NoteListItem
                        note={value}
                        id={key}
                        key={key}
                        noteTitle={value.noteTitle}
                        noteDate={value.noteDate}
                        noteContent={value.noteContent}
                        noteLevel={value.noteLevel}
                    />
                )
            })
        }
    }
    render() {
        return (
            <div className="col">
                <div className="accordion">
                    {this.getData()}
                </div>
            </div>

        );
    }
}

export default NoteList;