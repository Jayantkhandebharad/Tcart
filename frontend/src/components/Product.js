import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';
export default function product(props) {

    const { product } = props;
    return (
        <div key={product._id} className="card">
            <Link to={`product/${product._id}`}>

                <img className="medium" src={product.image} alt={product.name} style={{height:'300px',width:400}} />
            </Link>
            <div className="card-body">
                <Link to={`product/${product._id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <Rating rating={product.rating}
                    numReviews={product.numReviews} />
                <div className="price"><i class="fa fa-inr">{product.price}</i></div>
            </div>
        </div>
    )
}
