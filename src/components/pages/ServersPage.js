/**
 * Dashboard Page
 */
"use strict";

import React from "react";
import EventList from  '../elements/EventList';
import PropTypes from 'prop-types';
import {Link} from "react-router";


class ServersPage extends React.Component {


    render() {
        console.log(this.props);

        return <div className="row">
            <div className="col-md-12">
                <h2>Servers</h2>
            </div>

        </div>;
    }
}


ServersPage.propTypes = {

};
export  default ServersPage;