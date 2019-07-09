import React, { Component } from 'react';

class Result extends Component {

    render(){
        return (
            <div className="result">
                <p>{this.props.outputs}</p>
            </div>
        )
    }
}
export default Result;