import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>What We Do</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src='images/img7.jpeg'
                text='We Buy Properties '
                label='New Construction'
                path='./services'
                />
                <CardItem 
                src='images/custom_homes_home_page.JPG'
                text='Custom Homes '
                label='New Construction'
                path='./services'
                />
            </ul>
            <ul className="cards__items">
                <CardItem 
                src='images/additions_and_renovations_home.jpeg'
                text='Additions and Renovations '
                label='Existing Construction'
                path='./services'
                />
                <CardItem 
                src='images/kitchens_and_baths.jpeg'
                text='Kitchens and Baths '
                label='Existing Construction'
                path='./services'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
