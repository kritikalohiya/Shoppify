import React from 'react'
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const Detail = ({ id, pname, rate, quantity, imgsrc ,desc}) => {
    return (
        <div className="mt-5" id={id}>
            <h1 className="my-5 text-center">{pname} Details</h1>
            <div className="row">
                <div className="col col-md-4 d-flex justify-content-center">
                    <ProductImage imgsrc={imgsrc} />
                </div>
                <div className="col col-md-8 my-4 my-md-0">
                    <ProductInfo id={id} pname={pname} rate={rate} quantity={quantity} imgsrc={imgsrc} desc={desc} />
                </div>
            </div>
        </div>
    )
}

export default Detail;
