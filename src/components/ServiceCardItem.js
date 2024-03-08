import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCardItem.css'; // Assuming you have a separate CSS file for ServiceCardItem styling

function ServiceCardItem(props) {
  return (
    <div className="service__card__item">
      <div className="service__card__item__text">
        <h2>{props.text}</h2>
        <p>{props.label}</p>
      </div>
      <div className="service__card__item__image">
        <img src={props.src} alt="Service" className="service__card__item__img" />
      </div>
    </div>
  );
}

export default ServiceCardItem;
