import React, {useState, useRef, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const AddRestaurant = () => {
  const dispatch = useDispatch();
  const loginData = useSelector(state => state.login);

  const navigate = useNavigate();

  useEffect(() => {
    if(!loginData.loginDataRedux) {
        // save current url
        // dispatch(setUrl(window.location.pathname));
        navigate('/login');
    }
},[loginData.loginDataRedux])

    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();
    const inputRef4 = useRef();
    const inputRef5 = useRef();
    const inputRef6 = useRef();
    const inputRef7 = useRef();
    const inputRef8 = useRef();
    const errorRef = useRef();
    const [submitStatus, setSubmitStatus] = useState(false);

    const addRestFn = async () => {
        let tempObj = {};
        tempObj.rest_id = parseInt(Math.random()* 1000000)
        tempObj.rest_name = inputRef1.current.value;
        tempObj.location = inputRef2.current.value;
        tempObj.category = inputRef3.current.value;
        tempObj.image = inputRef4.current.value;
        tempObj.image1 = inputRef5.current.value;
        tempObj.image2 = inputRef6.current.value;
        tempObj.image3 = inputRef7.current.value;
        tempObj.image4 = inputRef8.current.value;
        console.log(tempObj);
        if(tempObj.rest_name !== '' && tempObj.location !== '' && tempObj.category !== '') {
          try {
            const url = 'http://localhost:4000/restaurants';
            const response = await axios.post(url, tempObj);
            console.log(response);
            if(response.status === 201) {
              setSubmitStatus(true);
              errorRef.current.textContent = ''
            }
          }
          catch(err) {
            errorRef.current.textContent = 'Error. Plz try again.'
          }
        }
        else {
          errorRef.current.textContent = 'Plz fill all the values.'
        }
    }

  return (
    <>

        <section id="" className="">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-12">
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Restaurant</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef1} placeholder="Name of Restaurant"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Location</label>
                        <div className="col-sm-10">
                            {/* <input type="text" className="form-control" ref={inputRef2} placeholder="Location"/> */}
                            <select ref={inputRef2}>
                            <option value="-">Select City</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="chennai">Chennai</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="champaran">Champaran</option>
                            <option value="patna">Patna</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Category</label>
                        <div className="col-sm-10">
                            {/* <input type="text" className="form-control" ref={inputRef3} placeholder="category"/> */}
                            <select ref={inputRef3}>
                            <option value="-">Select Category</option>
                            <option value="Pizza">Pizza</option>
                            <option value="North-Indian">North-Indian</option>
                            <option value="South Indian">South Indian</option>
                            <option value="Biryani">Biryani</option>
                            <option value="Handi Mutton">Handi Mutton</option>
                            <option value="Litti Chokha">Litti Chokha</option>
                            <option value="Litti Chokha">Paneer</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Image</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef4} placeholder="url"/>
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Image1</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef5} placeholder="url"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Image2</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef6} placeholder="url"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">image3</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef7} placeholder="url"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">image4</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef8} placeholder="url"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button className="btn btn-warning" onClick={addRestFn}>Add Restaurant</button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <div className="text-danger" ref={errorRef}></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>

        {submitStatus && (<section id="" className="section-data">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="col-12">
                  <div className="alert alert-success" role="alert">
                    Successfully added Restaurant
                  </div> 
                </div>
            </div>
        </div>
    </section>)}
    </>
  )
}

export default AddRestaurant