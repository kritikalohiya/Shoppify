import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function IncDecButtons() {
    const[quantity , setQuantity] = useState(1);
    const decQuantity = () => {
        if(quantity > 1)
            setQuantity(quantity-1)
    }
    return (
        <div className="details_info">
            <span className="dec border p-2" onClick={decQuantity} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faMinus} />
            </span>
            <span className="quantity border-top border-bottom p-2">{quantity}</span>
            <span className="inc border p-2" onClick={() => setQuantity(quantity+1)} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faPlus} />
            </span>
        </div>
    )
}
