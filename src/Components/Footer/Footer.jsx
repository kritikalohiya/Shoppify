import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStoreAlt} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="container-fluid">
            {/* <div className="row d-flex justify-content-center">
                <div className="col-10 d-flex justify-content-center align-items-center">
                    <NavLink activeClassName='active_nav' className="nav-link" aria-current="page" to="/" exact >Home</NavLink>

                    <NavLink activeClassName='active_nav' className="nav-link" to="/productslist" >Shop</NavLink>
                </div>
            </div> */}

            <div className="footerClass row d-flex justify-content-center">
                <div className="col-10 d-flex justify-content-center align-items-center">
                    <NavLink className="text-center" to="/">
                        <span className="icon"><FontAwesomeIcon icon={faStoreAlt} /></span>
                        <span className="mx-2">Shopify</span>
                    </NavLink>
                </div>
            </div>

        </footer>
    )
}
