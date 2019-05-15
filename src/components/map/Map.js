import React from 'react';
import Styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Config from '../../Config';
import Marker from './Marker'

const Container = Styled.div`
`;

class Map extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { 

  //   };
  // }

  render() {
    console.log("<< this.props MAP", this.props)
    const {hotels, center, zoom} = this.props
    console.log("render @MAP center:", center)
    console.log("render MAP zoom:", zoom)
  
    return (
      <Container style={{ height: '80vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: Config.mapCleAPI }}
          defaultCenter={center}
          defaultZoom={zoom}
          // Important d'ajouter ces 2 lignes 
          // center={center}
          // zoom={zoom}
        > 
          {hotels.map((hotel) => {
            console.log("hotel.tripAdvisorId", hotel.tripAdvisorId)
            return( 
              <Marker
              key={hotel.tripAdvisorId}
              lat={hotel.location.lat}
              lng={hotel.location.lon}
              text={hotel.name}
              price={hotel.price}
              />
          )})}
        </GoogleMapReact>
      </Container>
    );
  }
}

Map.defaultProps = {
  center: {
    lat: 48.8534,
    lng: 2.34888
  },
  zoom: 11
}

// Permet de vérifier le type d'une variable
Map.propstype ={
  center: {
    lat: PropTypes.number,
    lng: PropTypes.number,
  },
  zoom: PropTypes.number
}

export default Map;