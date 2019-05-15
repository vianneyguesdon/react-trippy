import React from 'react';
import Config from '../Config';
import Hotel from '../components/hotel/Hotel';
import styled from 'styled-components';

const Container = styled.div`
  
`;

class HotelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hotel: {}
    };
  }
  componentDidMount() {
    const url = `${Config.host}/api/hotels/${this.props.match.params.id}`
    console.log("url", url)
    fetch (url)
      .then (res => res.json())
      .then (data => {
        console.log("@componentDidMount data.result", data.result)
        this.setState({
          hotel: data.result
        })
      })
  }
  render() {
    if (Object.entries(this.state.hotel).length === 0 && this.state.hotel.constructor === Object) {
      return( 
        <div>
          <p>Loading data...</p>
        </div>
      )
    }
    console.log("@hotel container, this.props", this.props)
    return (
      <Container className="container">
        <Hotel hotel={this.state.hotel}/>
        {/* <p>{this.props.match.params.id}</p> */}
      </Container>
    );
  }
}

export default HotelContainer;