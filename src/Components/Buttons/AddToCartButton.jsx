import React from 'react'
import {NavLink} from 'react-router-dom'
import {useDispatch } from 'react-redux';

export default function AddToCartButton({ id, pname, rate, quantity,imgsrc ,desc , Quantity}) {
    const product = {id, pname, rate, quantity, imgsrc ,desc};
    const dispatch = useDispatch();
    // console.log(product.id)
    // console.log(product.pname)
    // console.log(product.rate)
   

    return (
        <div className="addToCart" >
            <NavLink to="window.location.pathname" 
            className="btn btn-dark" 
            onClick={() => {
                dispatch({type: 'ADD_TO_CART', payload:{product, Quantity} })} } >
                ADD TO CART
            </NavLink>
        </div>
    )
}
