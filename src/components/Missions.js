import React, { Component } from 'react';

import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

import './Missions.css';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missoes-card">
          {
            missions.map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
