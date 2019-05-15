import React from 'react'; 
import Gallery from '../city/Gallery'

class Home extends React.Component {

  render() {
    // console.log("this.props Home", this.props)
   
    const {
      cities
    } = this.props

    // console.log("cities sans props apres destructuration", cities)
    
    return(
      <div>
        <Gallery cities={cities}/>
      </div>
    )
  }
}

export default Home;