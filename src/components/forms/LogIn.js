"use strict";

import React from "react";
import PropTypes from 'prop-types';
/**
 * LogIn Form
 */
class LogIn extends React.Component {

    render() {
        return (
            <div>
                <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Username</label>
                        <input type="email" ref="username" className="form-control" placeholder="my@rexoubador.com"
                               required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" ref="password" className="form-control" placeholder="Password"
                               required/>
                    </div>
                    <button className="btn btn btn-primary btn-block" type="submit">Log in</button>
                </form>
            </div>
        );

    }

    handleSubmit(event) {
        const username = this.refs.username;
        const password = this.refs.password;
        const creds = { username: username.value.trim(), password: password.value.trim() }
        this.props.onFormSubmit(creds)
    }
}

LogIn.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};
export default LogIn;
