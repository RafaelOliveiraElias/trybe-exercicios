import React from 'react';
import Image from './Image';

class Pkmninfos extends React.Component {
  render() {
    const { each: { name, type, image , averageWeight }} = this.props
    return (
      <div>
        <div>
            <p>Name: {name} </p>
            <p>Type: {type} </p>
            <p>Weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <Image source={image} alternativeText="User avatar" />
      </div>
    );
  }
}

export default Pkmninfos;