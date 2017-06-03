/**
 * Dashboard Page
 */
"use strict";

import React from "react";
import FontAwesome from 'react-fontawesome';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class Servers extends React.Component {


    render() {
        const {servers} = this.props;
        const {list} = servers;
        const serversList = list.map((server, index) =>
            <server key={index} className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                <h3><small><FontAwesome name="server"/></small> {server.label} <small>is <span className={ `status status-${server.machineStatus.toLowerCase()}`}>{server.machineStatus}</span></small></h3>
                <ul className="list-unstyled">
                    <li>IP: <strong>{server.ip}</strong></li>
                    <li>ID: <em>{server.id}</em></li>
                    <li>Status: <strong>{server.status}</strong></li>
                    <li>Added at: <date>{server.entryDate}</date></li>
                    <li>Uptime: <strong>{server.uptime}</strong> seconds <small>({ Math.floor(server.uptime / 86400)} days)</small></li>
                    <li>
                        Harvest:
                        <ul>
                            <li>Last Harvest at: <date>{server.lastHarvestDate}</date></li>
                            <li>Status: <span className={ `harvest-status status-${server.harvestStatus.toLowerCase()}`}>{server.harvestStatus}</span></li>
                        </ul>
                    </li>
                    <li>
                        Monitors:
                        <ul>
                            <li>{server.harvestersCount} harvesters</li>
                            <li>{server.observersCount} observers</li>
                        </ul>
                    </li>
                    <li><Link to={{pathname: '/server/'+server.id}} className="btn-link"> <FontAwesome name="line-chart"/> View details</Link></li>
                </ul>
            </server>
        );
        return <div className="row">
            <div className="col-md-12">
                <h2>{list.length} Servers</h2>
                <div className="row">
                <servers>
                    {serversList}
                </servers>
                </div>
            </div>

        </div>;
    }
}

Servers.propTypes = {
    servers: PropTypes.object.isRequired
};
export  default Servers;