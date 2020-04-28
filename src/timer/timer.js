import React, { Component } from "react";
import "./timer.css";
class Timer extends Component {
  state = {
    time: 0,
    hour: 0,
    min: 0,
    sec: 0,
  };

  timeConvert = () => {
    var num = this.state.time;
    this.setState({ hour: Math.floor(num / 3600) });
    this.setState({ min: Math.floor((num % 3600) / 60) });
    this.setState({ sec: num % 60 });
  };
  resetTimer = () => {
    this.setState({ hour: 0, min: 0, sec: 0 });
  };
  render() {
    return (
      <div className="timer">
        <h1>Type your time</h1>
        <input
          type="text"
          id="time"
          placeholder="Time"
          onChange={(e) => this.setState({ time: e.target.value })}
        />

        <br />
        <div className="box">
          <h1>{this.state.hour} :</h1>
          <h1>{this.state.min} :</h1>
          <h1>{this.state.sec}</h1>
        </div>
        <button type="button" className="conv" onClick={this.timeConvert}>
          Convert
        </button>
        <button type="button" className="res" onClick={this.resetTimer}>
          Reset
        </button>
      </div>
    );
  }
}
export default Timer;
