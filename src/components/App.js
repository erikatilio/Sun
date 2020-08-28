import React, { Component } from "react";

import DigitalClock from "./DigitalClock/DigitalClock";
import Building from "./Building/Building";
import ApiService from "../api/ApiService";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sunrise: "",
      sunset: "",
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        ApiService.getTimeSunrise(
          `lat=${position.coords.latitude}&lng=${position.coords.longitude}`
        ).then((res) => {
          this.setState({ sunrise: res.sunrise });
          this.setState({ sunset: res.sunset });
          console.log(this.state);
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container mt-5">
          <DigitalClock />
          <Building />
        </div>
      </div>
    );
  }
}
