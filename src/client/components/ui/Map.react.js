import React from 'react';
import CSSModules from 'react-css-modules';
import Leaflet from 'leaflet';
import styles from './Map.scss';
import data from '../../../../property_data.csv';
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

// const LeafletMap = () => {
// var map = Leaflet.map('map').setView([51.505, -0.09], 13);
// Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//   attribution:
//     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);
// Leaflet.marker([51.5, -0.09])
//   .addTo(map)
//   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//   .openPopup();
//   return <div id="map" />;
// };

class LeafletMap extends React.Component {
  constructor(props) {
    super(props);
    this.leaflet = Leaflet;
    this.id = styles['map'];
    this.state = {
      position: [43.683334, -79.76667]
    };
  }

  componentDidMount() {
    console.log(data);
    const { position } = this.state;
    const { leaflet, id } = this;
    this.map = leaflet.map(id).setView(position, 20);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    Leaflet.marker(position)
      .addTo(this.map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }

  render() {
    const { id } = this;
    return <div id={id} />;
  }
}

export default LeafletMap;
