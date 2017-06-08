/**
 * Header navigation bar
 */
"use strict";

import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseNavbar: true,
        }
    }
    toogleNavbar(event)
    {
        event.preventDefault();
        const currentCollapseNavbar = !this.state.collapseNavbar;
        this.setState({collapseNavbar : currentCollapseNavbar});

    }
    render() {
        const {logoutUser, isAuthenticated, user} = this.props;
        const {collapseNavbar} = this.state;
console.log(collapseNavbar);
        //noinspection CheckTagEmptyBody
        return <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" onClick={(event) => this.toogleNavbar(event)}
                            aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to={{pathname: '/'}} className="navbar-brand">Rexoubapp <span>dashboard</span></Link>
                </div>
                {isAuthenticated &&
                <div className={ `navbar-collapse ${collapseNavbar===true?"collapse":""}`}>
                    <ul className="nav navbar-nav">
                        <li><Link to={{pathname: '/'}}>Home</Link></li>
                        <li><Link to={{pathname: '/servers'}}>Servers</Link></li>
                        <li><Link to={{pathname: '/uptime'}}>Uptime</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><p className="navbar-text">Signed in as {user.firstName} {user.lastName} </p></li>
                        <li className="navbar-btn">
                            <button type="button" onClick={() => logoutUser()}
                                    className="btn btn-default">Log out
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
    logoutUser:PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
};
export default Header;
