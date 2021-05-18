import React, { useState, useEffect } from 'react'
import { end } from '@popperjs/core';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function ShippingDetails() {
    const { products, totalPrice, shippingAmnt } = useSelector(state => state.CartReducer);
    const [inputs, setInputs] = useState({
        fname: '', lname: '', address: '', address2: '', country: '', city: '', code: '', number: ''
    });
    const [errors, setErrors] = useState({});
    const [disabled, setDisabled] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = (event) => {
        if (event) { event.preventDefault(); }
        const validationErrors = validate(inputs);
        setErrors(validationErrors);
        setIsSubmitting(true);

        const noErrors = Object.keys(validationErrors).length === 0;
        if (noErrors) {
            setDisabled(false);
            //   console.log("Authenticated",inputs);
        } else {
            setDisabled(true);
            //   console.log("errors try again",validationErrors);
        }

        axios.post('https://609a4d0a0f5a13001721a8c6.mockapi.io/form' , {inputs , finalTotal})
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    const validate = (inputs) => {
        const errors = {};
        if (!inputs.fname) {
            errors.fname = 'Required';
        }
        if (!inputs.lname) {
            errors.lname = 'Required'
        }
        if (!inputs.address) {
            errors.address = 'Required'
        }
        if (!inputs.country) {
            errors.country = 'Required'
        }
        if (!inputs.city) {
            errors.city = 'Required'
        }
        if (!inputs.code) {
            errors.code = 'Invalid Code'
        }
        if (!inputs.number) {
            errors.number = 'Required'
        }else if (inputs.number.length > 10){
            errors.number = 'Required 10 digit number'
        }
        return errors;
    }

    const dispatch = useDispatch();
    // console.log(products);
    const finalTotal = totalPrice + shippingAmnt + 13;

    return (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="shippingDetails col col-md-10 mx-auto my-5">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <h1 className="mt-5 mb-2">Shipping Details</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 d-flex flex-column flex-md-row">
                                    <div className="col-12 col-md-6 d-flex flex-column">
                                        <input type="text"
                                            className="form-control mr-2"
                                            name="fname"
                                            placeholder="First Name"
                                            required=""
                                            defaultValue={inputs.fname}
                                            onChange={handleInputChange} />
                                        {errors.fname && (
                                            <p className="text-danger"> {errors.fname}</p>
                                        )}
                                    </div>

                                    <div className="col-12 col-md-6 d-flex flex-column mt-3 mt-md-0">
                                        <input type="text"
                                            className="form-control"
                                            name="lname"
                                            placeholder="Last Name"
                                            required=""
                                            defaultValue={inputs.lname}
                                            onChange={handleInputChange} />
                                        {errors.lname && (
                                            <p className="text-danger"> {errors.lname}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" name="address" placeholder="Address" required="" defaultValue={inputs.address} onChange={handleInputChange} />
                                    {errors.address && (
                                        <p className="text-danger"> {errors.address}</p>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" name="address2" placeholder="Address2" defaultValue={inputs.address2} onChange={handleInputChange} />
                                </div>
                                <div className="mb-3 d-flex flex-column flex-md-row">
                                    <div className="col-12 col-md-6 d-flex flex-column">
                                        <input type="text" className="form-control mr-2" name="country" placeholder="Country" required="" defaultValue={inputs.country} onChange={handleInputChange} />
                                        {errors.country && (
                                            <p className="text-danger"> {errors.country}</p>
                                        )}
                                    </div>

                                    <div className="col-12 col-md-6 d-flex flex-column mt-3 mt-md-0">
                                        <input type="text" className="form-control" name="city" placeholder="City" required="" defaultValue={inputs.city} onChange={handleInputChange} />
                                        {errors.city && (
                                            <p className="text-danger"> {errors.city}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-3 d-flex flex-column flex-md-row">
                                    <div className="col-12 col-md-6 d-flex flex-column">
                                        <input type="text" className="form-control" name="code" placeholder="Zip/Postal Code" required="" defaultValue={inputs.code}
                                            onChange={handleInputChange} />
                                        {errors.code && (
                                            <p className="text-danger"> {errors.code}</p>
                                        )}
                                    </div>

                                    <div className="col-12 col-md-6 d-flex flex-column mt-3 mt-md-0">
                                        <input type="text" className="form-control" name="number" placeholder="Phone Number" required="" defaultValue={inputs.number}
                                            onChange={handleInputChange} />
                                        {errors.number && (
                                            <p className="text-danger"> {errors.number}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="submitBtn">
                                    <button type="submit" className="btn">Submit</button>
                                </div>
                                <hr />
                            </form>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="checkBoxes form-check" onClick={() => dispatch({ type: 'FREE_SHIPPING' })}>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="R1" defaultChecked />
                                        <label className="form-check-label" htmlFor="R1">
                                            Free Shipping
                                            <br />
                                            between 2-3 working days
                                        </label>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="checkBoxes form-check" onClick={() => dispatch({ type: 'FAST_SHIPPING' })}>
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="R2" />
                                        <label className="form-check-label" htmlFor="R2">
                                            Next Day Delivery - $20
                                            <br />
                                            24hrs from checkout
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col col-6">
                                    <NavLink to="/paymentDetails">
                                        <div className="next_back_Button">
                                            <button type="button" className="btn" disabled={disabled}>NEXT</button>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="col col-6">
                                    <NavLink to="/cart">
                                        <div className="next_back_Button">
                                            <button type="button" className="btn">BACK</button>
                                        </div>
                                    </NavLink>
                                </div>

                            </div>

                        </div>
                        <div className="col-12 col-md-3">
                            <h1 className="mt-5 mb-2">Summary</h1>
                            {
                                products.map(p => (
                                    <div className="row mb-2 d-flex justify-content-center" key={p.id}>
                                        <div className="summaryDetails row">
                                            <div className="col-4 p-0">
                                                <div className="image">
                                                    <img src={p.imgsrc} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-8 pr-0">
                                                <div className="name">{p.pname}</div>
                                                {/* {console.log(p.pname)} */}
                                                <div className="rate">
                                                    $ {p.rate * p.quantity}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <hr />
                            <div className="row d-flex">
                                <div className="col col-6">SUBTOTAL</div>
                                <div className="col col-6" style={{ textAlign: end }}>${totalPrice}</div>
                            </div>
                            <div className="row d-flex">
                                <div className="col col-6">SHIPPING</div>
                                <div className="col col-6" style={{ textAlign: end }}>
                                    {
                                        shippingAmnt === 0 ?
                                            <div>FREE</div> :
                                            <div><span>$</span> {shippingAmnt}</div>
                                    }
                                </div>
                            </div>
                            <div className="row d-flex">
                                <div className="col col-6">TAXES</div>
                                <div className="col col-6" style={{ textAlign: end }}>$13</div>
                            </div>
                            <hr />
                            <div className="row d-flex">
                                <div className="col col-6">TOTAL</div>
                                <div className="col col-6" style={{ textAlign: end }}>${finalTotal}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
