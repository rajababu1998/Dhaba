import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addFoodToCart, addRestDetails, emptyFoodFromCart } from './actionFood';

const Restaurant = () => {
    const [rest_data, setRestData] = useState({});
    const [menu, setMenu] = useState([]);

    const tempId = useParams();
    console.log(tempId);

    const loginData = useSelector(state => state.login);

    const dispatch = useDispatch();
    const vegIcon = 'https://banner2.cleanpng.com/20180601/at/kisspng-vegetarian-cuisine-biryani-indian-cuisine-vegetabl-vegetarian-5b11c235a92d48.569689881527890485693.jpg';
    const nonvegIcon = 'https://spng.pinpng.com/pngs/s/45-459786_non-veg-icon-circle-hd-png-download.png';

    const cartData = useSelector(state => state.cart);
    console.log('cartData --------', cartData.restDetails);

    // const veg = () => {
    //     console.log('veg')
    //     return(
    //         <img src={vegIcon}/>
    //     )
    // }
    // const nonveg = () => {
    //     console.log('non-veg')
    //     return(
    //         <img src={nonvegIcon}/>
    //     )
    // }

    // api call for restaurant details 
    const callApi = async () => {
        const url = 'https://khana45.herokuapp.com/restaurants/search/' + tempId.id;
        const response = await axios.get(url);
        setRestData(response.data);
    }

    // api call for restaurant menu items.
    const callApiMenu = async () => {
        const url = 'https://khana45.herokuapp.com/menu/' + tempId.id;
        const response = await axios.get(url);
        setMenu(response.data)
    }

    const addCartFn = (foodItem) => {
        console.log(foodItem);
        let restDetails = {};
        restDetails.rest_id = rest_data.rest_id;
        restDetails.rest_name = rest_data.rest_name;
        restDetails.city = rest_data.location;

        if(restDetails.rest_id === cartData.restDetails.rest_id) {
            dispatch(addFoodToCart(foodItem));
            dispatch(addRestDetails(restDetails))
        }
        else {
            // empty foodcart
            dispatch(emptyFoodFromCart());
            // empty restDetails - no separate action required as addRestDetails will overwrite
            dispatch(addFoodToCart(foodItem));
            dispatch(addRestDetails(restDetails))
        }
    }

    useEffect(() => {
        callApi();
        callApiMenu();
    },[])

    useEffect(() => {
        console.log(rest_data);
        console.log(menu);
    })
  return (
    <>
        <section className='section-header'>
            <div className='container'>
            <h3>{rest_data.rest_name}</h3>
                <div className='row'>
                    <div className='col-6 '>
                        <img src={rest_data.image || 'https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg'} className="img-fluid food-image-large"/>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-6'>
                                <img src={rest_data.image2 || "https://b.zmtcdn.com/data/pictures/0/19566510/7adbeb07936c0e2e9559c684b04475bd.jpeg?output-format=webp&fit=around|300:273&crop=300:273;*,*"} className="img-fluid food-image-small" />
                            </div>
                            <div className='col-6'>
                                <img src={rest_data.image3 || 'https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg'} className="img-fluid food-image-small" />
                            </div>
                            <div className='col-6 mt-4'>
                                <img src={rest_data.image4 || 'https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg'} className="img-fluid food-image-small" />
                            </div>
                            <div className='col-6 mt-4'>
                                <a href='/gallery'><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhrjpExOUBSDAUVsfDB1jKCDxwj9JqNSX99Q&usqp=CAU' || 'https://i.ytimg.com/vi/BEyloCJlpm0/maxresdefault.jpg'} className="img-fluid food-image-small" />Gallery</a>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>{rest_data.category}</h2>
            </div>
        </section>
        
        <section className='section-data '>
            <div className='container'>
                <div>
                    {/* <h2>{rest_data.category}</h2> */}
                    {/* <h2>{rest_data.location}</h2> */}
                    <span>{rest_data.price}</span>

                    {
                        loginData.loginDataRedux && (
                            <>
                                <button className='btn btn-success'>Add Reviews</button>
                                <button className='btn btn-warning'>Mark Favourite</button>
                            </>
                        )
                    }
                </div>
                
            </div>
        </section>
        
        <section className='section-header'>
            <div className='container'>
            <table className='table table-responsive'>
                    {
                        menu && menu.map((temp) => (
                            <tr>
                                <td><img src={temp.food_type === 'veg' ? vegIcon : nonvegIcon} className="veg-nonveg-icon"/></td>
                                
                                <td>{temp.image}</td>
                                <td>{temp.food_name}</td>
                                <td>&#8377;{temp.price}</td>
                                <td>{temp.description}</td>
                                {
                                    loginData.loginDataRedux && (
                                        <>
                                            <td><button className='btn btn-sm btn-warning' onClick={() => addCartFn(temp)}>Add to cart</button></td>
                                            
                                        </>
                                    )
                                }
                                
                            </tr>
                        ))
                    }
                </table>
            </div>
        </section>
    </>
  )
}

export default Restaurant