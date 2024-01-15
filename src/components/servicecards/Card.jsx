
import React from 'react';
import PropTypes from 'prop-types';
import './card.css'; 

const Card = ({ imageUrl, title }) => {
  return (
    <div className='card'>
      <div className="custom-card">
        <img src={imageUrl} alt="wedding photo" className="card-image" />
        <div className="card-content">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // description: PropTypes.string, // Uncomment if you want to pass and display a description
};

export default Card;
