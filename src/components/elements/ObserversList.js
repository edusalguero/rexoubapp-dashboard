/**
 * ObserversList element
 */
"use strict";

import React from "react";
import PropTypes from "prop-types";
import ucfirst from "ucfirst";

class ObserversList extends React.Component {

    render() {
        const {observers} = this.props;
        const observersList = observers.map((observer, index) =>
            <observer key={index}>
                {ucfirst(observer.observer.type.toLowerCase())} <strong>{observer.observer.label}</strong> is <status className={ `status status-${observer.status.toLowerCase()}`}>{observer.status}</status> at {observer.observationDate}
            </observer>
        );

        return (
            <div>
                <h4>Observers</h4>
                <observers>
                    {observersList}
                </observers>
            </div>
        );
    }
}

ObserversList.propTypes = {
    observers: PropTypes.array.isRequired,
};
export default ObserversList;
