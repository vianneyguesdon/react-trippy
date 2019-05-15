import React from 'react';
import styled from 'styled-components';
import Global from '../../Global';
import {Link} from "react-router-dom";

const { color, size } = Global

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      isScrolled: false,
    };
  }

  componentDidMount() {
    window.onscroll = this.onScroll.bind(this);
  }

  onScroll() {
    console.log('on scroll (App)', window.scrollY)
    
    // console.log('scoll position : ', window.scrollY);
    if(parseInt(window.scrollY) > 0 && this.state.isScrolled !== true){
      this.setState({
        isScrolled: true
      })
    }
    if (parseInt(window.scrollY) === 0 && this.state.isScrolled === true) {
      this.setState({
        isScrolled: false
      })
    }
  }

  render() {
    console.log("this.state", this.state)

    const navColor = this.state.isScrolled === false ? color.body : color.primary;

    const Nav = styled.div`
      width: 100%;
      position: fixed;
      height: ${size.navbar};
      top: 0;
      background-color: ${navColor};
      z-index: 1000;
      color: ${color.tertiary};
      a {
        font-size: 40px;
        color: white;
        font-family: ZCOOL KuaiLe;
      }
      a:hover {
        text-decoration: none;
      }
    `;
  
    return (
      <Nav className="container-fluid">
        <Link to="/"><i className="fas fa-pills"></i> TRIPPY</Link>
      </Nav>
    );
  }
}

export default Navigation;

