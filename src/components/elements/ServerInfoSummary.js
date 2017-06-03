"use strict";

import React from "react";
import PropTypes from "prop-types";

/**
 * ServerInfoSummary element
 */
class ServerInfoSummary extends React.Component {

    render() {
        const {id, ip, uptime, status, entryDate} = this.props;
        return (
            <div>
                <h4>Server info</h4>
                <ul className="list-unstyled">
                    <li>IP: <strong>{ip}</strong></li>
                    <li>ID: <em>{id}</em></li>
                    <li>Uptime: <strong>{uptime}</strong> seconds <small>({ Math.floor(uptime / 86400)} days)</small></li>
                    <li className="divider">&nbsp;</li>
                    <li>Status: <strong>{status}</strong></li>
                    <li>Added at: <date>{entryDate}</date></li>
                </ul>
            </div>
        );
    }
}

ServerInfoSummary.propTypes = {
    ip: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    uptime: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    entryDate: PropTypes.string.isRequired,
};
export default ServerInfoSummary;
