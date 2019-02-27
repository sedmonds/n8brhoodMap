import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component {
  initMap() {
    // The map, centered at SkyFarm
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: {lat: 19.547621, lng: -155.0136},
      zoom: 12
    });
    window.mapObject = map;
  }
  // loads a script into index.html
  loadScript() {
    let script = document.getElementsByTagName("script")[0];
    const scriptFromMap = this.makeMapScript();
    script.parentNode.insertBefore(scriptFromMap, script[0]);
    scriptFromMap.onerror = () => {
      alert("Error loading map data" + this.src);
    }
    window.initMap = this.initMap;
  }
  // makes script for getting google map element
  makeMapScript() {
    let mapScript = document.createElement("script");
    const API_KEY = "AIzaSyC1CiDMv1byZZsxZ71mstyRoyYOtoU7nxQ";
    const src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    mapScript.src = src;
    mapScript.async = true;
    mapScript.defer = true;
    return mapScript;
  }
  render() {
    this.loadScript();
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
