import React, { useRef, useState } from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom';

const Homepage = () => { 
  const [city, setCity] = useState('');

  // const inputref1 = useRef();
  // const navigate = useNavigate();

//   const search_rest = () => {
//       const temp = inputref1.current.value;
//       navigate('/list', {state: {city: temp}});
//       navigate('/list', {state: temp});
//   }

  return (
    <>         
          <section className='hero-banner'>
                <div className='container'>
                    <div className='row'> 
                        <div className='col text-center city-btn'>
                            <select onChange={(e) => setCity(e.target.value)}>
                            <option value="-">Select City</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="chennai">Chennai</option>
                            <option value="kolkata">Kolkata</option>
                            </select>

                            <br></br><br></br>

                            {/* <input type='text' ref={inputref1} />
                            <button className='btn btn-primary' onClick={search_rest}>Search</button> */}

                            <input type='text' onChange={(e) => setCity(e.target.value)} value={city} />
                            <Link className='btn btn-dark' to={`/list/${city}`}>Search</Link>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Homepage