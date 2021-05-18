import React,{ useState } from 'react'
import AddToCartButton from '../../Buttons/AddToCartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function ({ id, pname, rate, quantity, imgsrc, desc }) {
    // console.log(pname)
    const[Quantity , setQuantity] = useState(1);
    const decQuantity = () => {
        if(Quantity > 1)
            setQuantity(Quantity-1)
    }
    return (
        <div className="ProductInfoDetail px-0 px-md-5">
            <h4><b>ProductInfo</b></h4>
            <p>Price: ${rate}</p>
            <p>Description: {desc}</p>

            <div className="details_info">
                <span className="dec border p-2" onClick={decQuantity} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faMinus} />
                </span>
                <span className="quantity border-top border-bottom p-2">{Quantity}</span>
                <span className="inc border p-2" onClick={() => setQuantity(Quantity + 1)} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faPlus} />
                </span>
            </div>
            <br />
            <AddToCartButton id={id} pname={pname} rate={rate} quantity={quantity} imgsrc={imgsrc} desc={desc} Quantity={Quantity}/>
        </div>
    )
}
