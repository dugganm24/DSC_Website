import React from 'react';
import './Cards.css';
import ServiceCardItem from './ServiceCardItem';

function ServiceCard() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <ServiceCardItem
              src='images/img7.jpeg'
              text='Custom Homes'
              label='New Construction'
              path='./services'
            />
          </div>
          <div className="cards__items">
            <ServiceCardItem
              src='images/img8.jpeg'
              text='Custom Homes'
              label='New Construction'
              path='./services'
            />
          </div>
          <div className="cards__items">
            <ServiceCardItem
              src='images/img6.jpeg'
              text='Additions and Renovations'
              label='Existing Construction'
              path='./services'
            />
          </div>
          <div className="cards__items">
            <ServiceCardItem
              src='images/img4.jpeg'
              text='Kitchens and Baths'
              label='Existing Construction'
              path='./services'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;
