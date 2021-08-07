
import React from 'react';
import './client.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

  const Header = () => (
    
    <header className>
            <div id="top-bar" className="container-fluid">
        <div className="row">
          <div className="col-6 top-bar-left">
            <ul className="list-inline ">
              <li className>
                <i className="fas fa-phone text-light" />
                Hotline:
                <a href="tel:0868676687">0868676687</a>
              </li>
            </ul>
          </div>
          <div className="col-6 top-bar-right ">
            <ul className="list-inline  float-right">
              <li className="list-inline-item">
              <Link to="/signup">Đăng ký</Link>
              </li>
              <li className="list-inline-item ">
              <Link to="/signin">Đăng nhập</Link>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    <div id="menu" className="container-fluid ">
      <div className="row">
        <div className="col-5 col-md-2 logo">
          <a href="index.html"><img src="./img/logo.png" alt="" /></a>
        </div>
        <div className="col-md-8 menu-shop">
          <nav>
            <ul className="list-inline ul-parent">
              <li className="list-inline-item li-category-parent">
              <Link to="/">TRANG CHỦ</Link>
                <i className="fas fa-angle-down" />
                
              </li>
              <li className="list-inline-item li-category-parent">
              <Link to="/contact">LIÊN HÊ</Link>
                <i className="fas fa-angle-down" />
               
              </li>
              <li className="list-inline-item li-category-parent">
                <a href="#">GIẦY DÉP</a>
                <i className="fas fa-angle-down" />
                <ul className="menu-ul-child">
                  <li>
                    <a href>GIẦY MỌI</a>
                  </li>
                  <li>
                    <a href>GIẦY TÂY NAM</a>
                  </li>
                  <li>
                    <a href>GIẦY BOOT NAM</a>
                  </li>
                  <li>
                    <a href>ÁO THỜI TRANG</a>
                  </li>
                  <li>
                    <a href>GIẦY THỂ THAO</a>
                  </li>
                  <li>
                    <a href>GIẦY TĂNG CHIỀU CAO</a>
                  </li>
                </ul>
              </li>
              <li className="list-inline-item li-category-parent">
                <a href="#">PHỤ KIỆN</a>
                <i className="fas fa-angle-down" />
                <ul className="menu-ul-child">
                  <li>
                    <a href>VÍ NAM</a>
                  </li>
                  <li>
                    <a href>MŨ NÁO</a>
                  </li>
                  <li>
                    <a href>TÚI SACH NAM</a>
                  </li>
                  <li>
                    <a href>BALO NAM</a>
                  </li>
                  <li>
                    <a href>THẮT LƯNG NAM</a>
                  </li>
                  <li>
                    <a href>CÀ VẠT &amp; NƠ</a>
                  </li>
                </ul>
              </li>
              <li className="list-inline-item li-category-parent ">
                <a href="#">KHUYẾN MẠI</a>
                <i className="fas fa-angle-down" />
                <span className="sale-hot">Hot</span>
                <ul className="menu-ul-child">
                  <li>
                    <a href>Saleoff 70%</a>
                  </li>
                  <li>
                    <a href>Saleoff 50%</a>
                  </li>
                  <li>
                    <a href>Saleoff 40%</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      
      </div>
    </div>
  </header>
  );
  
  export default Header;