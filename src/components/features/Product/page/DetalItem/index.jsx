import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet, useParams } from 'react-router-dom';

DetalItem.propTypes = {
    
};

function DetalItem(props) {
    const {id} = useParams();
    const [product,setProduct] = useState([]);
    const [loading,setLoading] =useState(false);
   
    useEffect(() =>{
       const getProduct = async () =>{
           setLoading(true);
           const respose = await fetch(`http://localhost:3005/productItem/${id}`);
           setProduct(await respose.json());
           setTimeout(()=>{
            setLoading(false);
           },1000)
           
       }
       getProduct();
    },[])
    //loading
    const Loading = () =>{
        return(
            <>
                 <div className="col-md-3 " >
            <div className="skeleton" style={{height:350}} />
          </div>
            </>
        )
    }
    //showproduct
    const ShowProduct = () =>{
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="500px" width="400px"/>
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
                <p className='lead'>{product.description}</p>
                <div className="btn btn-outline-dark">Thêm Giỏ hàng</div>
                <div className="btn btn-outline-dark">Mua Ngay</div>

            </div>
            
            </>
        )
    }
    return (
      
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
                
            </div>
            
        </div>
       
       
    );
}

export default DetalItem;