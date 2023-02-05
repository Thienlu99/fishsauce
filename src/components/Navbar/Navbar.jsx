import React from 'react';
import "./style.scss"


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <a className="navbar-brand fw-bold fs-4" href='#'>Nước Mắm Tùng Vân</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sản phấm</a>
        </li>
        {/* <li c="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a className="nav-link ">Giới thiệu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Liên Hệ</a>
        </li>
      </ul>
      <div className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <a className="btn btn-outline-dark" ><i class="fa fa-sign-in me-1" ></i> Login</a>
        <a className="btn btn-outline-dark ms-2" ><i class="fa fa-user-plus me-1" ></i> Register</a>
        <a className="btn btn-outline-success ms-2" ><i class="fa fa-shopping-cart me-1" ></i> Cart (0)</a>

      </div>
    </div>
  </div>
</nav>
    );
}

export default Navbar;