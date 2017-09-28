import React, { Component } from 'react';
import DataForm from '../components/DataForm'
import BarChart from '../components/BarChart'

class ChartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "My Bar Chart",
            scale: 10,
            width: 400,
            height: 200,
            dataPoints: [
                {name: "First Column", value: 0},
                {name: "First Column", value: 0}
            ]
        };
    }

    render() {
        return (
            <div>
                <DataForm dataPoints={this.state.dataPoints}/>
                <BarChart width='400px' height='400px'/>
            </div>
        );
    }
}

export default ChartContainer;
