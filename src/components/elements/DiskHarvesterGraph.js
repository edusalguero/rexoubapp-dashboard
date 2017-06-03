/**
 * DiskHarvesterGraph element
 */
"use strict";

import React from "react";
import PropTypes from "prop-types";
import {Doughnut} from "react-chartjs-2";

class DiskHarvesterGraph extends React.Component {

    render() {
        const {harvest} = this.props;

        const filesystems = harvest.map((disk, index) => {
                const data = {
                    labels: ['Free', 'Used'],
                    datasets: [{
                        data: [disk.free, disk.used],
                        backgroundColor: [
                            '#36A2EB',
                            '#FF6384'
                        ],
                        hoverBackgroundColor: [
                            '#36A2EB',
                            '#FF6384'
                        ]}]
                };

                return <div>
                    <p><strong>{disk.filesystem}</strong> <small>mounted on <strong>{disk.mountedOn}</strong></small></p>
                    <Doughnut data={data}/>
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
