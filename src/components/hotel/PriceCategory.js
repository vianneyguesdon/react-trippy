import React from 'react';

class PriceCategory extends React.Component {
  
  render() {
    const {priceCategory} = this.props;

    let euroCat = "";
    for (let i=0; i < priceCategory; i++){
      euroCat += "€"
    }
    
    return (
      <div>
      <p>Price Category: {euroCat}</p>
      </div>
    );
  }
}

export default PriceCategory;