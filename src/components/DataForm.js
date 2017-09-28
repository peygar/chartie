import React, { Component } from 'react';
import DataPointInputContainer from '../containers/DataPointInputContainer'

class DataForm extends Component {
        render() {
        return (
            <div>
            Title <input type="text" id="title" onChange={this.props.onTextChange}/> <br/>
            Scale <input type="text" id="scale" onChange={this.props.onTextChange}/> <br/>
            X-Axis Label <input type="text" id="xAxisLabel" onChange={this.props.onTextChange}/> <br/>
            Y-Axis Label <input type="text" id="yAxisLabel" onChange={this.props.onTextChange}/> <br/>
            <DataPointInputContainer changeHandler={this.props.onTextChange}
                                dataPoints={this.props.dataPoints}/>
            </div>
        );
    }
}

export default DataForm;
