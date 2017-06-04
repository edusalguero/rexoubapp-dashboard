/**
 * Dashboard Page
 */
"use strict";

import React from "react";
import {Link} from "react-router-dom";
import EventList from "../elements/EventList";
import PropTypes from "prop-types";

const loadData = ({ loadUser, loadEvents, loadServers }) => {
    loadUser();
    loadEvents();
    loadServers();
};

class Dashboard extends React.Component {

    componentWillMount() {
        loadData(this.props);
    }

    render() {
        const {user, events} = this.props;
        const {entries} = events;
        const eventNumber = entries.length;
        const {serversCount, observersCount, harvestersCount, contactsCount} = user.data;
        return <div className="row">
            <div className="col-md-6 col-sm-12">
                <h2>Last events</h2>
                { eventNumber === 0 ?
                    (<p>There are no events in the last 7 days</p>) :
                    (<EventList events={events.entries}/>)
                }
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="row">
                    <div className="col-md-12">
                        <h3>{serversCount} servers</h3>
                        <p>A server is anything that can be accessed through ssh to be monitored. </p>
                        <p><Link to={{pathname: '/servers'}}>View servers »</Link></p>
                    </div>
                    <div className="col-md-12">
                        <h3>{contactsCount} contacts</h3>
                        <p>A contact is a email account or Slack channel or username to which will be sent
                            notifications.</p>
                        {/*<p><a href="#" role="button">View details »</a></p>*/}
                    </div>
                    <div className="col-md-12">
                        <h3>{observersCount} observers</h3>
                        <p>A observer is a monitor who observe a service status and check it to to notify inactivity or
                            status changes.</p>
                        {/*<p><a href="#" role="button">View details »</a></p>*/}
                    </div>
                    <div className="col-md-12">
                        <h3>{harvestersCount} harvesters</h3>
                        <p>A harvester is a monitor who obtain metrics and check their values to notify alerts and
                            warnings.</p>
                        {/*<p><a href="#" role="button">View details »</a></p>*/}
                    </div>
                </div>
            </div>
        </div>;
    }
}


Dashboard.propTypes = {
    user: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired,
    loadEvents: PropTypes.func.isRequired,
    loadServers: PropTypes.func.isRequired,

};
export  default Dashboard;