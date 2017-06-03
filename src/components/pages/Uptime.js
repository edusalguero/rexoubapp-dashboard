/**
 * Dashboard Page
 */
"use strict";

import React from "react";
import {Link} from "react-router";
import PropTypes from "prop-types";
import {Bar} from "react-chartjs-2";

class Uptime extends React.Component {


    render() {
        const {servers} = this.props;
        const {list} = servers;
        const data = {
            labels: [],
            datasets: [
                {
                    label: 'Uptime',
                    backgroundColor: 'rgba(0, 128, 0,0.6)',
                    borderColor: 'rgba(0, 128, 0,0.9)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(0, 128, 0,0.8)',
                    hoverBorderColor: 'rgba(0, 128, 0,1)',
                    data: []
                }
            ]
        };
        const options = {
            scales: {
                yAxes: [{

                    id: 'days',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        min: 0
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Days',
                    }
                }],
                xAxes: [{
                    barThickness: 10
                }]
            },
            maintainAspectRatio: true
        };
        list.map((server, index) => {
                data.labels.push(server.label);
                let uptimeInDays = Math.floor(server.uptime / 86400);
                data.datasets[0].data.push(uptimeInDays);
            }
        );

        return <div className="row">
            <div className="col-md-12">
                <h2>Uptime</h2>
                <div className="row">
                    <Bar data={data} width={100} height={50} options={options}/>
                </div>
            </div>

        </div>;
    }
}

Uptime.propTypes = {
    servers: PropTypes.object.isRequired
};
export  default Uptime;