import React, { Component } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './NumPad.css';


class NumPad extends Component{
    
    usedKey = e =>{
        
        this.props.usedKey(e.target.name);
    };

    render(){
        return (
           
            <Card className={classes.wrapper}>
                <Card.Header>CALCULATOR</Card.Header>
                <Card.Body>
                    <ButtonGroup className="mr-2" aria-label="First group">
                        <Button name="0" onClick={this.usedKey}>0</Button>
                        <Button name="1" onClick={this.usedKey}>1</Button>
                        <Button name="2" onClick={this.usedKey}>2</Button>
                        <Button name="3" onClick={this.usedKey}>3</Button>
                        <Button name="4" onClick={this.usedKey}>4</Button>
                    </ButtonGroup>
                    <br/><br/>

                    <ButtonGroup className="mr-2" aria-label="Second group">
                        <Button name="5" onClick={this.usedKey}>5</Button>
                        <Button name="6" onClick={this.usedKey}>6</Button>
                        <Button name="7" onClick={this.usedKey}>7</Button>
                        <Button name="8" onClick={this.usedKey}>8</Button>
                        <Button name="9" onClick={this.usedKey}>9</Button>
                    </ButtonGroup>
                    <br/><br/>

                    <ButtonGroup className="mr-2" aria-label="Second group">
                        <Button name="+" onClick={this.usedKey}>+</Button>
                        <Button name="-" onClick={this.usedKey}>-</Button>
                        <Button name="/" onClick={this.usedKey}>/</Button>
                        <Button name="*" onClick={this.usedKey}>*</Button>
                        <Button name="=" onClick={this.usedKey}>=</Button>
                    </ButtonGroup>
                    <br/><br/>
                    <Button name="Clear" onClick={this.usedKey}>Clear</Button>
                    
                </Card.Body>
            </Card>
            
        )
    }
};
export default NumPad;
    