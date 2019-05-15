import React from "react";
import Config from "../../Config";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Rating from "./Rating";
import PriceCategory from "./PriceCategory";
import Map from "../map/Map";
import styled from "styled-components";

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      name,
      address,
      pictures,
      stars,
      priceCategory,
      location,
      tripAdvisorId
    } = this.props.hotel;
    const { center } = this.props;

    const images = [];
    for (var i = 0; i < pictures.length; i++) {
      const picture = {
        original: `${Config.host}${pictures[i]}`,
        thumbnail: `${Config.host}${pictures[i]}`
      };
      images.push(picture);
    }
    console.log("images", images);
    console.log("@hotel this.props", this.props.hotel.location);

    console.log("@Hotel center", center);
    return (
      <div>
        <h2>{name}</h2>
        <h2>{address}</h2>
        <Rating stars={stars} />
        <PriceCategory priceCategory={priceCategory} />
        <ImageGallery items={images} />
      </div>
    );
  }
}

export default Hotel;
