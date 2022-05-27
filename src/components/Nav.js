import React, { Component } from 'react';
import { connect } from 'react-redux'

class Nav extends Component {
    handleAdd = (e) => {
        e.preventDefault()
        this.props.showFormAddNote()
        this.props.changeAddStatus()
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" title='Note Managerment' href="http://localhost:3000/">Note Managerment</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav  mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" onClick={(e) => this.handleAdd(e)} href="http://localhost:3000/">New Note</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showFormAddNote: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        changeAddStatus: () => {
            dispatch({
                type: "CHANGE_ADD_STATUS"
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(Nav)