"use strict";

import React from "react";
import PropTypes from 'prop-types';
import {logoutUser} from '../../actions/auth'

/**
 * Header navigation bar
 */
class Header extends React.Component {

    render() {
        const {dispatch, isAuthenticated, user} = this.props;

        return <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Rexoubador</a>
                </div>
                {isAuthenticated &&
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><p className="navbar-text">Signed in as {user.firstName} {user.lastName} </p></li>
                        <li>
                            <button type="button" onClick = {() => dispatch(logoutUser())} className="btn btn-default navbar-btn">Log out</button>
                        </li>
                    </ul>
                </div>
                }
            </div>
        </nav>;

    }
}

Header.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
};
export default Header;
