import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
//import logo from './logo.svg';
//import './App.css';

function Map() {
  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{ lat: 39.891480 , lng: 23.785450 }} 
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <WrappedMap 
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA8nuKxeUQFlX2JEg_7NjQd1kUKs4r0LII"}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
