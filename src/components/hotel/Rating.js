import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #FCBF49;
`;

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    // const {stars} = this.props;
    if (this.props.stars === null || this.props.stars === undefined ) {
      return (
        <Container>
          Not rate yet
        </Container>
      );
    }
    if (this.props.stars === 1) {
      return (
        <Container>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </Container>
      );
    }
    if (this.props.stars === 2) {
      return (
        <Container>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </Container>
      );
    }
    if (this.props.stars === 3) {
      return (
        <Container>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </Container>
      );
    }
    if (this.props.stars === 4) {
      return (
        <Container>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
        </Container>
      );
    }
    return (
      <Container>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </Container>
    );
  }
}

export default Rating;