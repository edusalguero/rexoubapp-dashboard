"use strict";

import React from "react";
import PropTypes from 'prop-types';

/**
 * AlertDangerMessage element
 */
class AlertDangerMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {alertVisible: true};
    }

    render() {
        const {message} = this.props;
        if (message.length==0) {
            return null;
        }

        return (
            <div className="alert alert-danger" role="alert">
                {message}
                <button type="button" className="close" onClick={() => this.closeAlert()} aria-label="Close"><span
                    aria-hidden="true">&times;</span></button>
            </div>
        );

    }

    closeAlert() {
        this.props.onClose();
    }
}

AlertDangerMessage.propTypes = {
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
};
export default AlertDangerMessage;
