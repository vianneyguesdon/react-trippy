import React from 'react';
import Card from './Card';
import Map from '../map/Map';
import styled from 'styled-components';

const MapContainer = styled.div`
  overflow: hidden;
  height: 85vh;
`;

const CardContainer = styled.div`
  overflow: auto;
  height: 85vh;
`;


class Hotel extends React.Component {

  render() {
    console.log("this.props HOTELS", this.props.hotels)
    const {hotels, zoom, center} = this.props
    console.log("center HOTELS render", center)
    console.log(" HOTELS render to map", hotels)

    return (
      <MapContainer className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Map
              hotels={hotels}
              zoom={zoom}
              center={{
                lat: center.lat,
                lng: center.lon
              }}
            />
          </div>
          <CardContainer className="col-12 col-lg-6 cardscroll">
            <div className="row">

              {hotels.map((hotel, index) => {
                return(
                  <Card
                  {...hotel} // Spread. Permet d'envoyer tout l'objet et de ne plus envoyer le props hotel
                  key={hotel._id}
                  />
                );
              })}

            </div>
          </CardContainer>
        </div>
      </MapContainer>
    );
  }
}

export default Hotel;