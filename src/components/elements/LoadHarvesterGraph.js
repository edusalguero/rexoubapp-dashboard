/**
 * LoadHarvesterGraph element
 */
"use strict";

import React from "react";
import PropTypes from "prop-types";
import {HorizontalBar} from "react-chartjs-2";

class LoadHarvesterGraph extends React.Component {

    render() {
        const {harvest} = this.props;

        const data = {
            labels: [
                'Last minute',
                'Last 5 minutes',
                'Last 15 minutes'
            ],
            datasets: [{
                label: 'AVG Load',
                backgroundColor: 'rgba(0, 128, 0,0.6)',
                borderColor: 'rgba(0, 128, 0,0.9)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0, 128, 0,0.8)',
                hoverBorderColor: 'rgba(0, 128, 0,1)',
                data: [harvest.last, harvest.last5mins, harvest.last15mins],
            }]
        };

        const options = {
            scales: {
                xAxes: [{

                    id: 'load',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        min: 0,
                        max: 1
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Load AVG',
                    }
                }],
                yAxes: [{
                    barThickness: 10
                }]
            },
            maintainAspectRatio: true
        };
        return (
            <div>
                <HorizontalBar data={data} width={100} height={50} options={options}/>
            </div>
        );
    }
}

LoadHarvesterGraph.propTypes = {
    harvest: PropTypes.object.isRequired,
};
export default LoadHarvesterGraph;
