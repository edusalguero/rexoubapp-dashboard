"use strict";

import React from "react";

/**
 * NotFound Page
 */
class NotFound extends React.Component {

    render() {
        return <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Requested page not found!
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}
export default NotFound;
