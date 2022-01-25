import React, { Component } from 'react';

import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name" key={ planetName }>{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } key={ planetName } />
      </div>
    );
  }
}

const { string } = PropTypes;

PlanetCard.propTypes = {
  planetName: string.isRequired,
  planetImage: string.isRequired,
};

export default PlanetCard;
