import React from 'react'
import ShoppingCart from './ShoppingCart';
// import ShoppingDetails from './ShoppingCart';


const Cart = () => {
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-md-10 mx-auto my-5 d-flex justify-content-center">
                    <ShoppingCart />
                </div>
            </div>
        </div>
    );
}
export default Cart;