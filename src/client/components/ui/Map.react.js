import React from 'react';
import CSSModules from 'react-css-modules';
import Leaflet from 'leaflet';
import styles from './Map.scss';
import data from '../../../properties.json';
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
      position: [43.685885, -79.7602991],
      addresses: data
    };
  }

  componentDidMount() {
    console.log(data);
    const { position } = this.state;
    const { leaflet, id } = this;
    this.map = leaflet.map(id).setView(position, 18);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.state.addresses.forEach(marker => {
      const { coords, description } = marker;
      console.log(coords, description);
      const popUpContent = `
        <p>Business Type: ${marker.businessType}</p>
        <p>Address: ${marker.streetNumber} ${marker.streetName}</p>
        <p>Year Purchased: ${marker.yearPurchased}</p>
        <p>Owner: ${marker.businessOwner}</p>
        <p>Description: ${marker.description}</p>
      `;
      Leaflet.marker(coords)
        .addTo(this.map)
        .bindPopup(popUpContent);
    });
    // Leaflet.marker(position).addTo(this.map);
    // Leaflet.marker(this.state.addresses[3].coords).addTo(this.map);
  }

  render() {
    const { id } = this;
    return <div id={id} />;
  }
}

export default LeafletMap;
