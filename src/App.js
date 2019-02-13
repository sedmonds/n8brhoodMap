import React, { Component } from "react";
import "./App.css";

class App extends Component {
  initMap() {
    // The map, centered at Puna
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 19.547621, lng: -155.0136},
      zoom: 11
    });
  }
  // loads a script into index.html
  loadScript() {
    let scriptElement = this.makeMapScript();
    let allScripts = document.getElementsByTagName("script");
    let script = allScripts[0];
    console.log(allScripts);
    script.parentNode.insertBefore(scriptElement, allScripts[0]);

    window.initMap = this.initMap;
  }
  // makes script for getting google map element
  makeMapScript() {
    let mapScript = document.createElement("script");
    const API_KEY = "AIzaSyC1CiDMv1byZZsxZ71mstyRoyYOtoU7nxQ";
    mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }
  render() {
    this.loadScript();
    return <div className="App" id="map" />;
  }
}

export default App;
