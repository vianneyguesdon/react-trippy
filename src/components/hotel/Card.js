import React from 'react';
import Config from '../../Config'
import {Link} from 'react-router-dom';
import Rating from './Rating';
import styled from 'styled-components';
import Global from '../../Global';

const Container = styled.div`
  height: 330px;
  padding: 10px;
  a {
    color: black
  }
  a:hover {
    text-decoration: none;
    color: ${Global.color.body};
  }
  img {
    width: 100%;
    height: 15vw;
    object-fit: cover;
    border-radius: 2%;
    margin-bottom: 10px;
  }
  .title {
    height: 40px;
  }
  .rating-cards {
    margin-left: 170px;
    margin-top: -30px;
  }
`;

class Card extends React.Component {
  
  render() {
    // console.log("card this.props", this.props);
    const {name, price, pictures, stars, _id} = this.props;

    return (
      <Container className="col-6">
        <Link to={`/hotels/${_id}`}>
          <h5 className="title">{name}</h5>
          <img className="img-fluid" src={`${Config.host}${pictures[0]}`} alt={name}/>

          <h6>{price}€</h6>
          <div className="rating-cards">
            <Rating stars={stars}/>
          </div>
        </Link>
      </Container>
    )
  }
}

export default Card;