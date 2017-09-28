import React, { Component } from 'react';

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
            <p>Chart Container</p>
            </div>
            );
    }
}

export default ChartContainer;
