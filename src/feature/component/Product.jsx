import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


import StarBorderIcon from '@mui/icons-material/StarBorder';

function Product(props) {

  const {item}= props
  return (
    <div className="card">
      <Link to={`/product/${item.id}`}>
      <img src={item.image} alt={item.title} className="card__img" />
      <h2 className="card__title">
        {item.title}
      </h2>
      <div className="card__price">
        {item.price}$
      </div>
      <div className="card__rating">
        {item.rating.rate}<StarBorderIcon/>
      </div>
      </Link>

    </div>
  )
}

Product.propTypes = {
  item:PropTypes.object.isRequired
}

export default Product

