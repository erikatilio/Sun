import React, { Component } from "react";

import DigitalClock from "./components/DigitalClock/DigitalClock";
import Building from "./components/Building/Building";
import ApiService from "./API/ApiService";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objSunrise: {},
    };
  }
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        ApiService.getTimeSunrise(
          `lat=${position.coords.latitude}&lng=${position.coords.longitude}`
        ).then((res) => {
          this.setState({ objSunrise: res });
          console.log(this.state.objSunrise);
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container text-center mt-5">
          <DigitalClock />
          <Building />
          <button type="button" className="btn btn-outline-info mt-5">
            LIGAR
          </button>
        </div>
      </div>
    );
  }
}
