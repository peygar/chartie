import React, { Component } from 'react';

class DataPointInput extends Component {
    nameChangeHandler(e) {
        this.props.onNameChange(this.props.index, e.target.value);
    }

    valueChangeHandler (e) {
        this.props.onValueChange(this.props.index, e.target.value);
    }

    render() {
        return (
            <div>
                Name: <input type="text" name="DataPointName"
                text='{this.props.name}'
                onChange={this.nameChangeHandler} />
                Value: <input type="text" name="DataPointValue"
                text='{this.props.value}'
                onChange={this.valueChangeHandler} />
            </div>
        );
    }
}

export default DataPointInput;
