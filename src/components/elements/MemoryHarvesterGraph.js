/**
 * MemoryHarvesterGraph element
 */
"use strict";

import React from "react";
import PropTypes from "prop-types";
import {Doughnut} from "react-chartjs-2";

class MemoryHarvesterGraph extends React.Component {

    static calcPercent(total, value) {
        return Math.round((100 * value) / total);
    }

    render() {
        const {harvest} = this.props;
        const free = Math.round(harvest.free / 1024);
        const used = Math.round(harvest.used / 1024);
        const total = Math.round(free + used);

        const data = {
            labels: [
                'Free (' + free + ' MB)',
                'Used (' + used + ' MB)'
            ],
            datasets: [{
                data: [MemoryHarvesterGraph.calcPercent(total, free), MemoryHarvesterGraph.calcPercent(total, used)],
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
        const options = {
            responsive: true,
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                position: 'top',
                text: 'Total memory ' + total + ' MB'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        return data.labels[tooltipItem.index] + ' (' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%)';
                    }
                }
            },
        };
        return (
            <div>
                <Doughnut data={data} options={options}/>
            </div>
        );
    }
}

MemoryHarvesterGraph.propTypes = {
    harvest: PropTypes.object.isRequired,
};
export default MemoryHarvesterGraph;
