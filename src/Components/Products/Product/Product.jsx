import React from 'react';
// import Details from '../ProductDetails/Details'
import AddToCartButton from '../../Buttons/AddToCartButton';
import { NavLink } from 'react-router-dom'


const Product = ({ id, imgsrc, pname, rate, quantity, desc }, item) => {
  item = { id, imgsrc, pname, rate };
  
  return (
    <div className="col-md-4 col-10 mx-auto" id={id}>
      <div className="card">
        <div className="imgsection">

          <NavLink to={`productdescription/${id}`}>
            <img src={imgsrc} className="card-img-top" alt="prodimg" />
          </NavLink>

          <AddToCartButton id={id} pname={pname} rate={rate} quantity={quantity} imgsrc={imgsrc} desc={desc} Quantity={1}/>

          <div className="card-body">
            <h5 className="card-title">{pname}</h5>
            <span className="card-text">$ {rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// });

// export default connect(null, mapDispatchToProps)(Product);
export default Product;
