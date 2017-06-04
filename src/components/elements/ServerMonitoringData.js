"use strict";

import React from "react";
import PropTypes from "prop-types";
import ReactJson from 'react-json-view'

/**
 * ServerMonitoringData element
 */
class ServerMonitoringData extends React.Component {

    render() {
        const {harvesters, observers} = this.props;
        return (
            <div>
                <h4>Monitoring data</h4>
                <ReactJson name="Harvesters" src={harvesters} collapsed/>
                <ReactJson name="Observers" src={observers} collapsed/>
            </div>
        );
    }
}

ServerMonitoringData.propTypes = {
    harvesters: PropTypes.array.isRequired,
    observers: PropTypes.array.isRequired,
};
export default ServerMonitoringData;
