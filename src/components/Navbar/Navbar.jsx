import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.scss"


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" href='#'>Nước Mắm Tùng Vân</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Trang chủ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Sản phấm</NavLink>
        </li>
        {/* <li c="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" href="#">Action</NavLink></li>
            <li><NavLink className="dropdown-item" href="#">Another action</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" href="#">Something else here</NavLink></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link " to="/gioithieu">Giới thiệu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/lienhe">Liên Hệ</NavLink>
        </li>
      </ul>
      <div className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <NavLink className="btn btn-outline-dark" to="/dangnhap"><i className="fa fa-sign-in me-1" ></i> Login</NavLink>
        <NavLink className="btn btn-outline-dark ms-2" to="/dangxuat" ><i className="fa fa-user-plus me-1" ></i> Register</NavLink>
        <NavLink className="btn btn-outline-success ms-2" to="/giohang"  ><i className="fa fa-shopping-cart me-1" ></i> Cart (0)</NavLink>

      </div>
    </div>
  </div>
</nav>
    );
}

export default Navbar;