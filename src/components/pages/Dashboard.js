/**
 * Dashboard Page
 */
"use strict";

import React from "react";
import EventList from "../elements/EventList";
import PropTypes from "prop-types";
import {fetchUserInfo} from "../../actions/user";
import {fetchUserEvents} from "../../actions/events";
import {Link} from "react-router-dom";


class Dashboard extends React.Component {

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchUserInfo());
        dispatch(fetchUserEvents());
    }

    render() {
        const {user, events} = this.props;
        const entries = events.entries;
        const eventNumber = entries.length;
        const {serversCount, observersCount, harvestersCount, contactsCount} = user;
        return <div className="row">
            <div className="col-md-6">
                <h2>Last events</h2>
                { eventNumber === 0 ?
                    (<p>There are no events in the last 7 days</p>) :
                    (<EventList events={events.entries}/>)
                }
            </div>
            <div className="col-md-6">
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
        </div>;
    }
}


Dashboard.propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired
};
export  default Dashboard;