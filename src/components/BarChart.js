import React, { Component } from 'react';

class BarChart extends Component {
    drawText (text, x, y) {
        return(
            <text x={x} y={y} style={{textAnchor: "middle"}} id="graphTitle">{text}</text>
        );
    }

    drawBar(width, height, x, y, style) {
        return(
            <rect width={width} height={height} x={x} y={y} style={style} />
        );
    }

    drawLine(x1, y1, x2, y2) {
        return(
            <line x1={x1} y1={y1} x2={x2} y2={y2} />
        );
    }

    createTitle(title) {
        return (
            this.drawText(title, this.props.width / 2, 12)
        );
    }

    createBar(value) {

    }

    render() {
        return (
            <svg width={this.props.width}
            height={this.props.height}>
                {this.drawBar(10, 30, 0, 0, {fill:"#32BA3F"})}
                {this.createTitle("My Graph")}
            </svg>
        );
    }
}

export default BarChart;
