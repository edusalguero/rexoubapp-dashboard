"use strict";

import React from "react";
import FontAwesome from "react-fontawesome";

/**
 * Loader element
 */
class Loader extends React.Component {

    render() {
        return (
            <loader>
                <overlay/>
                <spinner>
                    <div>
                        <FontAwesome name="spinner" size='2x'  spin/> <spam className="spinner-text">Loading data...</spam>
                    </div>
                </spinner>
            </loader>
        );
    }
}
export default Loader;
