import React, { Component } from 'react';
import BarChart from '../components/BarChart'

class ChartContainer extends Component {

    getInitialState() {
        return {
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
                <BarChart width='400px' height='400px'/>
            </div>
        );
    }
}

export default ChartContainer;
