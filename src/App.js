import React, {Component} from 'react';
import './App.css';
import NumPad from './components/NumPad/NumPad';
import Result from './components/Result/Result';


class App extends Component {
 
  state={
    outputs:""
  }
  usedKey = keyName =>{
   
    if (keyName === "="){
      this.setState({
        outputs: eval(this.state.outputs)
      })
    
    }else if (keyName === "Clear"){
      this.setState({
        outputs: ""
      })
       
    }else{
        this.setState({
        outputs:this.state.outputs+keyName
      })
    }
  }

  render(){
    return (
      <div className="App">
        <NumPad usedKey={this.usedKey}/>
        <Result outputs={this.state.outputs}/>
      </div>
    );
  }

}

export default App;
