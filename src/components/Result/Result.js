import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './Result.css';

class Result extends Component {

    render(){
        return (
            <div>
                <Card body className="result">{this.props.outputs}</Card>
            </div>
        )
    }
}
export default Result;