import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style/Cart.css';
import { showBox } from '../features/ecomSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { removeCart1 } from '../features/ecomSlice';

function Cart() {
    const loginData = useSelector((data) => data.login);
    const dispatch = useDispatch();
    const [favs, setfavs] = useState([]);

    useEffect(() => {
        if (loginData.length > 0) {
            getCarts();
        }
    }, [loginData]);

    const getCarts = async () => {
        const { email } = loginData[0];
        try {
            const response = await axios.post('https://e-combackend-xa5s.onrender.com/user/showcart', { email });
            const { data } = response;
            setfavs(data);

        } catch (error) {
            console.log(error);
        }
    };

    const removeCart = async (e) => {
        try {
            const { id } = e;
            const { email } = loginData[0];
            await axios.post('https://e-combackend-xa5s.onrender.com/user/removecart', { id: id, email: email });
            dispatch(removeCart1({ id: e.id }));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {loginData.length === 0 ? (
                <div className="container1">
                    <h1>No carts are here!</h1>
                </div>
            ) : (
                <>
                    <div className="product1">
                        <button onClick={getCarts}>Refresh Carts</button>
                        {favs.length === 0 ? (
                            <p>No items in cart</p>
                        ) : (
                            <p>Click to refresh</p>
                        )}
                    </div>
                    <div className="product">
                        {favs.map((val) => (
                            <div key={val.id}>
                                <img src={val.imageLink} alt={val.name} />
                                <h3>{val.name}</h3>
                                <p>{val.description}</p>
                                <h2 className='price'>{val.price} $</h2>
                                <Link to='/showbox'>
                                    <button
                                        onClick={() => dispatch(showBox({
                                            id: val.id,
                                            name: val.name,
                                            description: val.description,
                                            imageLink: val.imageLink,
                                            price: val.price
                                        }))}
                                    >Buy now</button>
                                </Link>
                                <button
                                    className='removecart'
                                    onClick={() => removeCart({ id: val.id })}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
