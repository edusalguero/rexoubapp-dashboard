/**
 * Dashboard Page
 */
"use strict";

import React from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import {fetchUserServer} from "../../actions/servers";
import ServerInfoSummary from "../elements/ServerInfoSummary";
import ServerMonitoringSummary from "../elements/ServerMonitoringSummary";
import ServerMonitoringData from "../elements/ServerMonitoringData";
import ObserversList from "../elements/ObserversList";
import HarvestersList from "../elements/HarvestersList";

class Server extends React.Component {
    componentDidMount() {
        const {dispatch, serverId} = this.props;
        dispatch(fetchUserServer(serverId));
    }

    render() {
        const {servers, serverId} = this.props;
        let server = undefined;
        if (servers.items !== undefined) {
            server = servers.items.filter(server => server.id === serverId).shift();
        }

        return <div className="row">
            <div className="col-md-12">
                {server === undefined &&
                <h2> Upps! Server do not exist!</h2>
                }

                {typeof server === "object" &&
                <div>
                    <h3>
                        <small><FontAwesome name="server"/></small> {server.label}
                        <small> is <span
                            className={ `status status-${server.machineStatus.toLowerCase()}`}>{server.machineStatus}</span>
                        </small>
                    </h3>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <ServerInfoSummary ip={server.ip}
                                               id={server.id}
                                               uptime={server.uptime}
                                               status={server.status.toLowerCase()}
                                               entryDate={server.entryDate}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <ServerMonitoringSummary lastHarvestDate={server.lastHarvestDate}
                                                     harvestStatus={server.harvestStatus.toLowerCase()}
                                                     harvestersCount={server.harvestersCount}
                                                     observersCount={server.observersCount}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <ObserversList observers={server.observers}/>
                            <hr/>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <HarvestersList harvesters={server.harvesters}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <ServerMonitoringData harvesters={server.harvesters}
                                                  observers={server.observers}/>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>;
    }
}

Server.propTypes = {
    servers: PropTypes.object.isRequired
};
export  default Server;