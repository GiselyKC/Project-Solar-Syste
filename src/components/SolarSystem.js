import React, { Component } from 'react';

import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

import './SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="solar-system">
          {
            planets
              .map(({ name, image }) => (
                <PlanetCard
                  key={ name } // exigencia do react, para diferenciar uma propriedade da outra.
                  planetName={ name }
                  planetImage={ image }
                />
              ))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
