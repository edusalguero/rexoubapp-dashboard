/**
 * MemoryHarvesterGraph element
 */
"use strict";

import React from "react";
import PropTypes from "prop-types";
import {Doughnut} from "react-chartjs-2";

class MemoryHarvesterGraph extends React.Component {

    render() {
        const {harvest} = this.props;
        const data = {
            labels: [
                'Free',
                'Used'
            ],
            datasets: [{
                data: [harvest.free, harvest.used],
                backgroundColor: [
                    '#36A2EB',
                    '#FF6384'
                ],
                hoverBackgroundColor: [
                    '#36A2EB',
                    '#FF6384'
                ]
            }]
        };
        return (
            <div>
                <Doughnut data={data} />
            </div>
        );
    }
}

MemoryHarvesterGraph.propTypes = {
    harvest: PropTypes.object.isRequired,
};
export default MemoryHarvesterGraph;
