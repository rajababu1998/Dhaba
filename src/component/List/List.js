import React, {useEffect, useState} from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import axios from 'axios';

const List = () => {
  const [list, setList] = useState([]);

    // const tempdata = useLocation();    // data is coming through navigate command.
    // console.log(tempdata.state.city);
    // console.log(tempdata.state);

    // const tempdata = window.location.pathname;
    // console.log(tempdata.split('/')[2]);

    const tempdata2 = useParams();        // data is coming through url.
    console.log(tempdata2.city);

    const apiCall = async () => {
        const url = 'http://localhost:4000/restaurants/' + tempdata2.city;
        const responseApi = await axios.get(url);
        console.log(responseApi);
        setList(responseApi.data)
    }

    useEffect(() => {
        // api call
        apiCall();
    }, [])
    
    useEffect(() => {
      console.log(list);
    })

  return (
    <>
      <h2 className='text-center mb-4'>List Of Restaurant </h2>
      <section>
        <div className="container">
          <div className='row'>
            {
              list && list.map((item) => (
                <div className='col-4 border bg-secondary bg-opacity-10'>
                  <Link to={`/restaurant/${item.rest_id}`} class="glightbox">
                        <h4 className='text-center mb-3'>{item.rest_name}</h4>
                        <img src={item.image} class="menu-img img-fluid image-max-height mb-2" alt=""/>
                        <h6>{item.category}</h6>
                  </Link>
                </div>
              ))
            }

            {
              list.length === 0 && (
                <div>
                  <h3 className='text-center'>No Restaurant is available in this area</h3> 
                </div>
              )
            }
          </div>
        </div>
      </section>
      
    </>
  )
}

export default List