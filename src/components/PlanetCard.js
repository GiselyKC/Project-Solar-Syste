import React, { Component } from 'react';

import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

const { string } = PropTypes;

PlanetCard.propTypes = {
  planetName: string.isRequired,
  planetImage: img.isRequired,
};

export default PlanetCard;
