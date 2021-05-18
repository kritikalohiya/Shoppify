import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


export default function ShoppingCart() {
    const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    // console.log(products);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="shoppingCart col col-md-12 mx-auto my-5">
                {/* <div className="shoppingCart mx-auto my-5"> */}
                    <h1 className="my-2">Your Cart</h1>
                    {
                        products.length > 0 ?
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <div className="cartHeading row">
                                        <div className="col-2">Picture</div>
                                        <div className="col-2">Name</div>
                                        <div className="col-2">Price</div>
                                        <div className="col-2">Inc/Dec</div>
                                        <div className="col-2">Total Price</div>
                                        <div className="col-2">Remove</div>
                                    </div>
                                    {
                                        products.map(p => (
                                            <div className="row mb-2 text-center d-flex align-items-center " key={p.id}>
                                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                                    <div className="cart_image">
                                                        <img src={p.imgsrc} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                                    <div className="cart_name">{p.pname}</div>
                                                </div>
                                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                                    <div className="cart_price">$ {p.rate}</div>
                                                </div>
                                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                                    <div className="details_info">
                                                        <span className="dec border p-sm-2 p-lg-2 p-md-0 " onClick={() => dispatch({ type: 'DEC', payload: p.id })} style={{ cursor: 'pointer' }}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </span>
                                                        <span className="quantity border-top border-bottom p-sm-2 p-lg-2 p-md-0 ">{p.quantity}</span>
                                                        <span className="inc border p-sm-2 p-lg-2 p-md-0 " onClick={() => dispatch({ type: 'INC', payload: p.id })} style={{ cursor: 'pointer' }}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                                    <div className="cart_price">
                                                        $ {p.rate * p.quantity}
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-2 mb-3 mb-md-0">
                                                    <div className="cart_remove" onClick={() => dispatch({ type: 'REMOVE', payload: p.id })} style={{ cursor: 'pointer' }}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div className="col col-md-3">
                                    <div className="cart_summary_heading">
                                        Summary
                                    </div>
                                    <div className="summary_details">
                                        <div className="row">
                                            <div className="col-8">Total Items:</div>
                                            <div className="col-4">{totalQuantities}</div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-8">Total Amount:</div>
                                            <div className="col-4">{totalPrice}</div>
                                        </div>
                                        <NavLink to='/shippingdetails'>
                                        <div className="row checkout_btn mt-3">
                                            <button type="button" className="btn">CHECKOUT</button>
                                        </div>
                                        </NavLink>

                                    </div>
                                </div>
                            </div>
                            : <h1> - is empty</h1>
                    }
                </div>
            </div>
        </div>
    );
}
