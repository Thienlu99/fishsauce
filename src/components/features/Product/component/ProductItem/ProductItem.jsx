import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

ProductItem.propTypes = {
  filter : PropTypes.array.isRequired,
};
function ProductItem(props) {
    const {filter} = props;

  return (
    <>
    {filter.map((product) => {
      return (
        <div className="col-md-3 mb-4" key={product.id}>
          <div className="card h-100 text-center p-4">
            <img
              height="300px"
              src={product.image}
              className="card-img-top"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title mb-0">
                {product.title.substring(0, 12)}...
              </h5>
              <p className="card-text lead fw-bold">{product.price} VNĐ</p>
              <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">
                Xem chi tiết
              </NavLink>
            </div>
          </div>
        </div>
        
      );
    })}
    </>
  );
}

export default ProductItem;
