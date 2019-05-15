import React from 'react';
import styled from 'styled-components';
import Global from '../../Global';
import LargeCard from './LargeCard';
import Card from './Card';

const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  color: ${Global.color.body};
  font-family: ${Global.font.primary};
`;

class Gallery extends React.Component {
  
  render() {

    const {
      cities
    } = this.props

    // console.log("cities GALLERY", cities)
    // console.log("paris ??? GALLERY", cities[0])

    return (
      <div className="container">
        <Container className="row">
          <div className="col-12">
            <h2>Explore the World with Trippy !</h2>
          </div>
          <div className="col-12 col-md-6">
            <LargeCard name={cities[0].name} source={cities[0].source} slug={cities[0].slug}/>
          </div>
          <div className="col-12 col-md-6">
            <div className="row">
              {cities.slice(1).map((city, index) => {
                return(
                  <Card 
                    key={index}
                    name = {city.name}
                    slug = {city.slug}
                    source = {city.source}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Gallery;