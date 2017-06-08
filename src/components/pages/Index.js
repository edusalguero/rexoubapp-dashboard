"use strict";

import React from "react";
import LogIn from "../forms/LogIn";
import PropTypes from "prop-types";

/**
 * MyServers Page
 */
class Index extends React.Component {

    render() {
        const {onFormSubmit, errorMessage} = this.props;
        return <div>
            <div className="row">
                <div className="col-xs-12 col-sm-9">
                    <div className="jumbotron">
                        <h1>Rexoubapp <small>dashboard</small></h1>
                        <p>Rexoubapp is a server monitoring platform. Rexoubapp dashboard is a place which collates
                            information about your monitors</p>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3">
                    <LogIn onFormSubmit={onFormSubmit} errorMessage={errorMessage}/>
                </div>
            </div>
        </div>;
    }
}

Index.props = {
    onFormSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};
export default Index;
