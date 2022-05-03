import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './Missions.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div className="card" data-testid="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

const { string } = PropTypes;

MissionCard.propTypes = {
  name: string.isRequired,
  year: string.isRequired,
  country: string.isRequired,
  destination: string.isRequired,
};

export default MissionCard;
