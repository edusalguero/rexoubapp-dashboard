/**
 * Header navigation bar
 */
"use strict";

import React from "react";
import PropTypes from "prop-types";
import {logoutUser} from "../../actions/auth";
import {Link} from "react-router-dom";

class Header extends React.Component {

    render() {
        const {dispatch, isAuthenticated, user} = this.props;

        //noinspection CheckTagEmptyBody
        return <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed"
                            aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to='/' className="navbar-brand">Rexoubador</Link>
                </div>
                {isAuthenticated &&
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to={{pathname: '/'}}>Dashboard</Link></li>
                        <li><Link to={{pathname: '/servers'}}>Servers</Link></li>
                        <li><Link to={{pathname: '/uptime'}}>Uptime</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><p className="navbar-text">Signed in as {user.firstName} {user.lastName} </p></li>
                        <li>
                            <button type="button" onClick={() => dispatch(logoutUser())}
                                    className="btn btn-default navbar-btn">Log out
                            </button>
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
