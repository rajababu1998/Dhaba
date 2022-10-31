import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { setUrl } from './actonLogin';

const Order = () => {
    const dispatch = useDispatch();
    const loginData = useSelector(state => state.login);

    const navigate = useNavigate();
    const {state: orderData} = useLocation()
    
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
                    <h4>Your Order has been placed Successfully</h4>
                </div>
            </div>
        </section>

        <section>
            <div className='container'>
                <div className='row justify-content-between'>
                    <h4>Order ID:- {orderData.orderid}</h4>
                    <h4>Restaurant:- {orderData.rest_name}</h4>
                </div>
            </div>
        </section>
    </>
  )
}

export default Order