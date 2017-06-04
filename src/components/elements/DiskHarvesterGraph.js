/**
 * DiskHarvesterGraph element
 */
"use strict";

import React from "react";
import PropTypes from "prop-types";
import {Doughnut} from "react-chartjs-2";

class DiskHarvesterGraph extends React.Component {

    static calcPercent(total, value) {
        return Math.round((100 * value) / total);
    }
    render() {
        const {harvest} = this.props;

        const filesystems = harvest.map((disk, index) => {
            const free = Math.round(disk.free / 1024 );
            const used = Math.round(disk.used / 1024 );
            const total = Math.round(free + used);
                const data = {
                    labels: ['Free ('+free+' GB)', 'Used ('+used+' GB)'],
                    datasets: [{
                        data: [DiskHarvesterGraph.calcPercent(total, free), DiskHarvesterGraph.calcPercent(total, used)],
                        backgroundColor: [
                            '#36A2EB',
                            '#FF6384'
                        ],
                        hoverBackgroundColor: [
                            '#36A2EB',
                            '#FF6384'
                        ]}]
                };

            const options = {
                responsive: true,
                legend: {
                    position: 'bottom',
                },
                title: {
                    position: 'top',
                    display: true,
                    text: disk.filesystem + ' ('+total+' GB)'
                },
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            return data.labels[tooltipItem.index] + ' (' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%)';
                        }
                    }
                },
            };

                return <div key={disk.filesystem}>
                    <Doughnut data={data} options={options}/>
                </div>
            }
        );

        return (
            <div>
                {filesystems}
            </div>
        );
    }
}

DiskHarvesterGraph.propTypes = {
    harvest: PropTypes.object.isRequired,
};
export default DiskHarvesterGraph;
