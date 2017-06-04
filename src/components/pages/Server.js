/**
 * Dashboard Page
 */
"use strict";

import React from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";
import ServerInfoSummary from "../elements/ServerInfoSummary";
import ServerMonitoringSummary from "../elements/ServerMonitoringSummary";
import ServerMonitoringData from "../elements/ServerMonitoringData";
import ObserversList from "../elements/ObserversList";
import HarvestersList from "../elements/HarvestersList";

class Server extends React.Component {

    componentWillMount() {
        const {loadServer, serverId} = this.props;
        loadServer(serverId);
    }

    getServerFromStore(serverId)
    {
        const {servers} = this.props;
        let server = servers.full[serverId];
        if(server === undefined)
        {
            return false;
        }

        return server.data;
    }

    render() {
        const {serverId, isAppFetching} = this.props;
        let serverData = false;

        if(!isAppFetching)
        {
            serverData = this.getServerFromStore(serverId);
        }

        return <div className="row">
            <div className="col-md-12">
                {serverData === false && !isAppFetching &&
                <h2> Upps! Server not found!</h2>
                }

                {typeof serverData === "object" &&
                <div>
                    <h3>
                        <small><FontAwesome name="server"/></small> {serverData.label}
                        <small> is <span
                            className={ `status status-${serverData.machineStatus.toLowerCase()}`}>{serverData.machineStatus}</span>
                        </small>
                    </h3>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <ServerInfoSummary ip={serverData.ip}
                                               id={serverData.id}
                                               uptime={serverData.uptime}
                                               status={serverData.status.toLowerCase()}
                                               entryDate={serverData.entryDate}/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <ServerMonitoringSummary lastHarvestDate={serverData.lastHarvestDate}
                                                     harvestStatus={serverData.harvestStatus.toLowerCase()}
                                                     harvestersCount={serverData.harvestersCount}
                                                     observersCount={serverData.observersCount}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <ObserversList observers={serverData.observers}/>
                            <hr/>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <HarvestersList harvesters={serverData.harvesters}/>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <ServerMonitoringData harvesters={serverData.harvesters}
                                                  observers={serverData.observers}/>
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>;
    }
}

Server.propTypes = {
    servers: PropTypes.object.isRequired,
    loadServer: PropTypes.func.isRequired,
    isAppFetching: PropTypes.bool.isRequired
};
export  default Server;