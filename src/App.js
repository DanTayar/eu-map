import React from 'react';
import './App.css';
import Europe from './Europe';

const colors = ['red','green', 'blue','orange','yellow','#fc0da1']


class App extends React.Component {
  state={}

  changecountryColor= (event)=>{
    const currentColorIndex = colors.indexOf(this.state[event.target.id] );
    let nextColorIndex = currentColorIndex + 1 ;
    // % colors.length
    if(nextColorIndex === colors.length){ 
      nextColorIndex=0;
    }
    const nextColor = colors[nextColorIndex]

    this.setState({
      [event.target.id]:nextColor
    })
  }

  render(){
    return (
      <div className="App">
        <Europe countryColors={this.state} onClick={this.changecountryColor}/>

      </div>
    );
  }
}

export default App;
