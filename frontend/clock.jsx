import React from 'react';


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  render(){
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    hours = (hours < 10) ? `0${hours}` : `${hours}`;
    minutes = (minutes < 10) ? `0${minutes}` : `${minutes}`;
    seconds = (seconds < 10) ? `0${seconds}` : `${seconds}`;
    
    return (
      <div>
        <h1>Clock</h1> 
        <div className="clock">
        <p>
          <span>Time: </span> 
          <span>{hours}:{minutes}:{seconds} PDT</span>
          </p>
          
        <p>
          <span>Date: </span> 
          <span>{this.state.time.toDateString()}</span>
          </p>


        </div>
      </div>
    );
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

export default Clock;