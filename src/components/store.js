import { dbRef, dbRefShow } from './DataFirebase';
import { child, push, remove, update } from "firebase/database";

var redux = require('redux')
const noteInitialState = {
    isAdd: false,
    isEdit: false,
    editItem: {}
}
const noteReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            push(child(dbRef, 'noteData'), action.noteFormItem)
            alert('add note oke');
            return state
        case "GET_EDIT_DATA":
            return {...state, editItem: action.editObject}
        case "CHANGE_EDIT_STATUS":
            return {...state, isEdit: !state.isEdit}
        case "CHANGE_ADD_STATUS":
            return {...state, isAdd: !state.isAdd}
        case "EDIT_NOTE":
            const noteKey = action.getInfoEdit.id
            update(child(dbRefShow, noteKey), {
                noteTitle: action.getInfoEdit.noteTitle,
                noteDate: action.getInfoEdit.noteDate,
                noteContent: action.getInfoEdit.noteContent,
                noteLevel: Number(action.getInfoEdit.noteLevel),
            })
            alert('update note: ' + action.getInfoEdit.noteTitle + 'successfully!');
            return {...state, editItem: {}}
        case "DELETE_NOTE":
            remove(child(dbRefShow, action.deleteId))
            alert('delete note oke');
            return state
        default:
            return state
    }
}

var store = redux.legacy_createStore(noteReducer)
store.subscribe(() => console.log(store.getState()))
export default store