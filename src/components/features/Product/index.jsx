import React, { useEffect, useState } from "react";
// import Loading from "../../Loading/Loading";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ProductItem from "./component/ProductItem/ProductItem";
import "./style.css";

function Product(props) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loanding, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("http://localhost:3005/productItem");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setTimeout(() => {
        setLoading(false);
        // console.log(filter)
        }, "1000")
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  //loading
  const Loading = () => {
    
      return (
        <>
          <div className="col-md-3 " >
            <div className="skeleton" style={{height:350}} />
          </div>
          <div className="col-md-3 ">
            <div className="skeleton" style={{height:350}} />
          </div>
          <div className="col-md-3 ">
            <div className="skeleton" style={{height:350}} />
          </div>
          <div className="col-md-3 ">
            <div className="skeleton" style={{height:350}} />
          </div>
        </>
      );
    
  };
  //show button
  const onHandleClickFilter = (category) =>{
    const updateList = data.filter((x) => x.category === category);
    setFilter(updateList)

  }
  const onHandleClickAll = () =>{
    setFilter(data)
  }
  const ShowProduct = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>{onHandleClickAll()}}>Tất cả</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{onHandleClickFilter("nuoc mam")}}>Nước Mắm</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{onHandleClickFilter("mam ruoc")}}>Ruốc</button>
        </div>
            <ProductItem filter={filter} />      
      </>
    );
  };
  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Sản phẩm mới</h1>
          <hr />
        </div>
      </div>

      <div className="row justify-content-center">
        {loanding ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
}

export default Product;
