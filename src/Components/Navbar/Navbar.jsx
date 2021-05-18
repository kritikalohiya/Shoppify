import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStoreAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { totalQuantities } = useSelector(state => state.CartReducer)

    const hideCartFromNavbar = () =>{
        // console.log(hide)
        document.getElementById("cartId").style.display = "none";
    }

    const showCartInNavbar =()=>{
        document.getElementById("cartId").style.display = "block";
    }
    return (
        <>
            <div className="navCSS container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand text-center" to="/" onClick={()=>showCartInNavbar()}>
                                    <span className="icon"><FontAwesomeIcon icon={faStoreAlt} /></span>
                                    <span className="mx-2">Shopify</span>
                                </NavLink>
                                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item mx-2">
                                            <NavLink activeClassName='active_nav' className="nav-link" aria-current="page" to="/" exact onClick={()=>showCartInNavbar()}>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='active_nav' className="nav-link" to="/productslist" onClick={()=>showCartInNavbar()}>Shop</NavLink>
                                        </li>
                                        <li className="nav-item" id="cartId">
                                            <NavLink activeClassName='active_nav' className="nav-link" to="/cart" onClick={()=>hideCartFromNavbar()}>
                                                Cart
                                                <FontAwesomeIcon icon={faShoppingCart} />

                                                {
                                                    totalQuantities > 0 ? <span className="badge">{totalQuantities}</span> : null
                                                }
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;