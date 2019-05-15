import React from 'react';
import Config from '../../Config';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Container = styled.div`
  
`;

class Card extends React.Component {
  render() {
    // console.log("this.props CARD", this.props)

    const {
      name,
      source,
      slug
    } = this.props

    return (
      <Container className="col-6">
        <Link to={`/hotels?city=${slug}`}>
          <div>
            <img className="img-fluid" src={`${Config.host}${source}`} alt={name}/>
            <p>{name}</p>
          </div>
        </Link>
      </Container>
    );
  }
}

Card.defaultProps = {
  name: "to be defined",
  source: "http://via.placeholder.com/300x200",
  slug: "ahahahahahah slug",
  // onClick: () => {},
}

export default Card;