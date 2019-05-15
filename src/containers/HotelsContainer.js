import React from 'react';
import qs from 'qs';
import Hotel from '../components/hotel/Hotels';

class HotelsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true, 
      hotels: [],
      zoom : 0,
      center : {}
    };
  }

  componentDidMount() {
    // console.log("<< componentDidMount")
    const { city } = qs.parse(this.props.location.search.replace('?', ''));
    fetch (`http://localhost:3001/api/hotels/city/${city}`)
      .then (res => res.json())
      .then (data => {
        console.log("fetch data.result HotelsContainer :", data.results)
        console.log("fetch data HotelsContainer :", data)
        this.setState({
          isLoading: false,
          hotels: data.results,
          zoom: data.zoom,
          center: data.center
        })
      })
  }

  render() {
    if (this.state.isLoading === true) {
      return(
        <p>Loading Data</p>
      )
    }
    if (this.state.hotels.length === 0) {
      return(
        <p>Aucun résultat</p>
      ) 
    }
    console.log("this.state HotelsContainer", this.state)
    return (
      <Hotel 
      hotels={this.state.hotels}
      zoom={this.state.zoom}
      center={this.state.center}
      />
    );
  }
}

export default HotelsContainer;