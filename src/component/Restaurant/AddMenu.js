import React, {useState, useRef, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const AddMenu = () => {
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

    const addMenuFn = async () => {
        let tempObj = {};
        tempObj.rest_id = inputRef1.current.value;
        tempObj.food_id = parseInt(Math.random()* 1000000)
        tempObj.food_name = inputRef3.current.value;
        tempObj.food_type = inputRef4.current.value;
        tempObj.food_category = inputRef5.current.value;
        tempObj.price = inputRef6.current.value;
        tempObj.description = inputRef7.current.value;
        tempObj.image = inputRef8.current.value;
        console.log(tempObj);
        if(tempObj.rest_name !== '' && tempObj.location !== '' && tempObj.category !== '') {
          try {
            const url = 'https://khana45.herokuapp.com/menu';
            const response = await axios.post(url, tempObj);
            // console.log(response);
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
                        <label  className="col-sm-2 col-form-label">Restaurant ID</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef1} placeholder="Restaurant ID"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Food ID</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef2} placeholder="Food ID"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Food Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef3} placeholder="Food Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Food Type</label>
                        <div className="col-sm-10">
                            {/* <input type="text" className="form-control" ref={inputRef2} placeholder="Location"/> */}
                            <select ref={inputRef4}>
                            <option value="-">Select Food-Type</option>
                            <option value="delhi">Veg</option>
                            <option value="mumbai">Non-veg</option>
                            <option value="mumbai">Vegan</option>
                            </select>
                        </div>
                    </div>    

                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">Food Category</label>
                        <div className="col-sm-10">
                            {/* <input type="text" className="form-control" ref={inputRef3} placeholder="category"/> */}
                            <select ref={inputRef5}>
                            <option value="-">Select Category</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Break-Fast">Break-Fast</option>
                            <option value="South Indian">Dinner</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Price</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef6} placeholder="price"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef7} placeholder="Description"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Image</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" ref={inputRef8} placeholder="url"/>
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button className="btn btn-warning" onClick={addMenuFn}>Add Menu</button>
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
                    Successfully added Menu...
                  </div> 
                </div>
            </div>
        </div>
    </section>)}
    </>
  )
}

export default AddMenu