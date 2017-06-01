"use strict";

import React from "react";
import PropTypes from "prop-types";

/**
 * EventItem element
 */
class EventItem extends React.Component {

    render() {
        const {eventDate, message, server} = this.props;
        return (
            <div>
                <date>{eventDate}</date>
                <h4>{server.label}
                    <small>{server.id}</small>
                </h4>
                <p> {message}</p>
            </div>
        );
    }
}

EventItem.propTypes = {
    eventDate: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    server: PropTypes.object.isRequired,
};
export default EventItem;
