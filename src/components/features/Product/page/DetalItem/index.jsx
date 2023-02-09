import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

function DetalItem(props) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const respose = await fetch(`http://localhost:3005/productItem/${id}`);
      setProduct(await respose.json());
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    getProduct();
  }, []);
  //loading
  const Loading = () => {
    return (
      <>
        <div className="col-md-6 ">
          <div className="skeleton" style={{ height: 500, width: 400 }} />
        </div>
        <div className="col-md-6 " style={{lineHeight:2}}>
          <div className="skeleton" style={{ height: 30, width: 150,marginBottom:5 }} />
          <div className="skeleton" style={{ height: 60, width: 400,marginBottom:5 }} />
          <div className="skeleton" style={{ height: 30, width: 130,marginBottom:5 }} />
          <div className="skeleton" style={{ height: 50, width: 150,marginBottom:5 }} />
          <div className="skeleton" style={{ height: 150, width: 500,marginBottom:5 }} />
          <div
            className=""
            style={{ display: "flex" }}
          >
            <div
              className="skeleton"
              style={{ height: 50, width: 100 }}
            />
            <div
              className="skeleton"
              style={{ height: 50, width: 100, marginLeft: 6 }}
            />
          </div>
          
        </div>
      </>
    );
  };
  //showproduct
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="500px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <div className="btn btn-outline-dark">Thêm Giỏ hàng</div>
          <div className="btn btn-outline-dark">Mua Ngay</div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
}

export default DetalItem;
