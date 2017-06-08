/**
 * HarvestersList element
 */
"use strict";

import React from "react";
import PropTypes from "prop-types";
import LoadHarvesterGraph from "./LoadHarvesterGraph";
import MemoryHarvesterGraph from "./MemoryHarvesterGraph";
import DiskHarvesterGraph from "./DiskHarvesterGraph";

class HarvestersList extends React.Component {

    render() {
        const {harvesters} = this.props;
        const harvestersList = harvesters.map((harvester, index) => {
                let graph= '';
                if(harvester.harvester.type==='MEMORY_USAGE'){
                    graph = <MemoryHarvesterGraph harvest={harvester.harvest}/>;
                }else if(harvester.harvester.type==='LOAD'){
                    graph = <LoadHarvesterGraph harvest={harvester.harvest}/>;
                }else if(harvester.harvester.type==='DISK_USAGE'){
                    graph = <DiskHarvesterGraph harvest={harvester.harvest}/>;
                }
                return <div key={index} className="harvester col-sm-12 col-xs-12 col-md-4 col-lg-4">
                    <h5>{harvester.harvester.label}</h5>
                    {graph}
                </div>
            }
        );
        return (
            <div>
                <h4>Harvesters</h4>
                <div className="harvesters row">
                    {harvestersList}
                </div>
            </div>
        );
    }
}

HarvestersList.propTypes = {
    harvesters: PropTypes.array.isRequired,
};
export default HarvestersList;
