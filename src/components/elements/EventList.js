"use strict";

import React from "react";
import PropTypes from "prop-types";
import EventItem from "./EventItem";

/**
 * EventList element
 */
class EventList extends React.Component {

    render() {
        const {events} = this.props;
        const listEvents = events.map((event, index) =>
            <li key={index}>
                <EventItem eventDate={event.eventDate} message={event.message} server={event.server}/>
            </li>
        );
        return (
            <div className="event-list">
                <ul className="list-unstyled">{listEvents}</ul>
            </div>

        );
    }
}

EventList.propTypes = {
    events: PropTypes.array.isRequired,
};
export default EventList;
