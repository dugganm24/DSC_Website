import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
      <li className="cards__item__">
        <Link className="cards__item__link" to={props.path}>

          <div className="cards__item__info">
            <h5 className="cards__item__text" >{props.text}</h5>
          </div>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="DSC Image"
              className="cards__item__img" />
          </figure>
        </Link>
      </li>
    </>
  )
}

export default CardItem
