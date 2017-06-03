"use strict";

import React from "react";
import PropTypes from "prop-types";

/**
 * ServerMonitoringSummary element
 */
class ServerMonitoringSummary extends React.Component {

    render() {
        const {lastHarvestDate, harvestStatus, harvestersCount, observersCount} = this.props;
        return (
            <div>
                <h4>Monitoring summary</h4>
                <ul className="list-unstyled">
                    <li>
                        Harvest:
                        <ul>
                            <li>Last harvest at:
                                <date>{lastHarvestDate}</date>
                            </li>
                            <li>Status: <span
                                className={ `harvest-status status-${harvestStatus}`}>{harvestStatus}</span>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Monitors:
                        <ul>
                            <li>{harvestersCount} harvesters</li>
                            <li>{observersCount} observers</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

ServerMonitoringSummary.propTypes = {
    lastHarvestDate: PropTypes.string.isRequired,
    harvestStatus: PropTypes.string.isRequired,
    harvestersCount: PropTypes.number.isRequired,
    observersCount: PropTypes.number.isRequired,
};
export default ServerMonitoringSummary;
