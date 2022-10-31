import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setUrl } from './actonLogin';

const Cart = () => {
    const dispatch = useDispatch();
    const loginData = useSelector(state => state.login);
    console.log('----login data---', loginData.loginDataRedux);

    const navigate = useNavigate();

    const cartData = useSelector(state => state.cart);
    console.log('----cartData---', cartData);

    const placeOrderFn = async () => {
        console.log('Placing Order');
        try {
            const url = 'http://localhost:4000/orders/placeorder'
            const tempObj = {
                username: loginData.loginDataRedux.username,
                rest_id: cartData.restDetails.rest_id,
                rest_name: cartData.restDetails.rest_name,
                city: cartData.restDetails.city,
                amount: 500,
                foodItems: cartData.foodCart
            }
            // headers i am using here because i am securing the cart api.
            const response = await axios.post(url, tempObj, {
                headers: {
                    "x-access-token": loginData.loginDataRedux.token
                }
            });
            if(response.status === 201) {
                console.log('Order Placed');
                navigate('/order', {state: response.data})
            }
        }
        catch(err) {
            console.log('Order failed. try again');
        }
    }
    useEffect(() => {
        if(!loginData.loginDataRedux) {
            // save current url
            dispatch(setUrl(window.location.pathname));
            navigate('/login');
        }
    },[loginData.loginDataRedux])
  return (
    <>
        <section>
            <div className='row'>
                <div className='col'>
                    <h2>Cart</h2>
                </div>
            </div>
        </section>

        <section>
            <div className='container'>
                <div className='row justify-content-between'>
                    <table className='table'>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                        {
                            cartData.foodCart && cartData.foodCart.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.food_name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))
                        }
                    </table>

                    <br></br>
                    {
                        cartData.foodCart.length > 0 && (
                            <button className='btn btn-warning' onClick={placeOrderFn}>Place Order</button>
                        )
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart