import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { vanishCart } from '../features/ecomSlice';
import '../style/Showbox.css'
import { Link } from 'react-router-dom';

function Showbox() {
    const dispatch = useDispatch();
    const carts = useSelector((val) => val.showbox);

    return (
        <div className="payment-page">
            <div className="product-list">
                {carts.map((val) => {
                    return (
                        <div key={val.id} className="product-card">
                            <div className='imgbox'>
                                <img src={val.imageLink} alt={val.name} className="product-image" />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{val.name}</h3>
                                <h2 className='price'>{val.price} $</h2>
                                <p className="product-description">{val.description}
                                </p>
                                <button className="buy-now-btn">Buy Now</button>
                                <Link to='/products'  ><button
                                    className="remove-cart-btn"
                                    onClick={() => dispatch(vanishCart())}
                                >
                                    Goback to List
                                </button></Link>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Showbox;
