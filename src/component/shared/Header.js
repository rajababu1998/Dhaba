import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import { setLogout, setUrl } from '../User/actonLogin';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginData = useSelector(state => state.login);
  console.log('Header---', loginData.loginDataRedux);
  
  const loginFn = () => {
    dispatch(setUrl(window.location.pathname));
    navigate('/login');
  }
  
  const logoutFn = () => {
    console.log('---logout---');
    // redux update loginData
    dispatch(setLogout());
  }

  return (
    <>
        <header className='head'>
          <div className='container '>
            <div className='row'>
              <div className='col'>
              
                {
                  loginData.loginDataRedux ? (
                    <>
                      <button onClick={logoutFn} className="btn-logout">LogOut</button>
                      <Link className='x' to="/cart" >Cart</Link>
                      <Link className='x' to="/addmenu" >Add Menu</Link>
                    </>
                  ): (
                    <>
                      <Link className='x' to="/signup" >Sign up</Link>
                      <button onClick={loginFn} className="btn-logout">Login</button>
                      {/* <Link className='x' to="/login" >Log in</Link> */}
                    </>
                  )
                }
                
                <Link className='x' to="/addrestaurant" >Add Restaurant</Link>
              </div>
            </div>
            <h2 className='text-center'>DHABA</h2>
            <h3 className='text-center'>Enjoy The Food</h3>
            <h2 className='text-center'>Discover the best food and drinks</h2>
          </div>
        </header> 
    </>
  )
}

export default Header