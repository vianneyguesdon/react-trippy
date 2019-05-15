import React from 'react';

const markerStyle = { backgroundColor: 'white', width: 40, textAlign: 'center', padding: 5};
const MarkerHotel = ({ text }) => <div style={markerStyle}>{text}</div>;

class Marker extends React.Component {
  
  render() {
    const {key, lat, lng, text, price} = this.props
    return (
      <MarkerHotel
        key={key}
        lat={lat}
        lng={lng}
        text={`${price}€`}
        // price={price}
      />
    );
  }
}

export default Marker;