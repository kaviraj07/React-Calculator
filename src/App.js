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
      try{
        this.setState({
          outputs: eval(this.state.outputs)
        })
      }catch (e){
        this.setState({
          outputs:"Operation Cannot Be Performed !"
        })
      }
    }else if (keyName === "Clear"){
      this.setState({
        outputs: ""
      }) 
    }else if(keyName ==="Backspace"){
      this.setState({
        outputs: this.state.outputs.slice(0,-1)
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
