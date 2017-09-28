import React, { Component } from 'react';

class DataPointInputContainer extends Component {
    getInitialState (){
        return { dataPoints: [{name: "Column 1", value: 0}
                            {name: "Column 2", value: 0}]
                };
    }

    handleDataPointNameChange(index, name) {
        let dataPoints = this.state.dataPoints;
        dataPoints[index].name = name;
        this.setState({dataPoints: dataPoints});
    }

    handleDataPointValueChange(index, value) {
        let dataPoints = this.state.dataPoints;
        dataPoints[index].value = value;
        this.setState({dataPoints: dataPoints});
    }

    handleNewDataPoint(e) {
        let dataPoints = this.state.dataPoints;
        console.log(dataPoints.length);
        console.log(dataPoints);
        dataPoints[dataPoints.length]
        = {name: "Column " + (dataPoints.length + 1), value: 0};
        console.log(dataPoints.length);
        console.log(dataPoints);
        this.setState({dataPoints: dataPoints});
    }

    render() {
        var dataPoints = [];
        for (var i = 0; i < this.state.dataPoints.length; i++)
        {
            dataPoints.push(<DataPoint
                key={i}
                index={i}
                name={this.state.dataPoints[i].name}
                value={this.state.dataPoints[i].value}
                onNameChange={this.handleDataPointNameChange}
                onValueChange={this.handleDataPointValueChange} />);
        }


        var pointDisplay = []
        for (var i = 0; i < this.state.dataPoints.length; i++)
        {
            pointDisplay.push(<p>
                {this.state.dataPoints[i].name
                    + " " + this.state.dataPoints[i].value} </p>);
        }

        return (
            <div>
                {dataPoints}
                <button id="plus"
                type="button"
                onClick={this.handleNewDataPoint}>
                    New Data Point
                </button>
                {pointDisplay}
            </div>
        );
    }
}

export default DataPointInputContainer;
