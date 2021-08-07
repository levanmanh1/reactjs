import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Shop = () => {
  const limit = 8;
  const pageInit = 1;
  const [page, setPage] = useState(pageInit);


  const url = 'https://5fbb24efcc6c9d001624a99e.mockapi.io/products?limit=' + limit +
    "&page=" + page;
  const [listSanPham, setlistSanPham] = useState([]);



  useEffect(function () {

    axios.get(url)
      .then(function (response) {
        const { data } = response;
        setlistSanPham(data);
      });
  }, [page
  ]);

  const urlxoa = 'https://5fbb24efcc6c9d001624a99e.mockapi.io/products/';
  const btnDeleteOnClick = function (event, value, index) {
    axios.delete(urlxoa + value.id)
      .then(function (response) {
        const list = listSanPham.filter(function (val, idx) {
          return idx == index ? false : true;
        }); setlistSanPham(list);

      });


  }
  const trangTruoc = function () {
    if (page == 1) {
      return;
    }

    setPage(page - 1);
  }

  const trangSau = function () {
    setPage(page + 1);
  }
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(() => {
    setFilteredCountries(
      listSanPham.filter((sanpham) =>
        sanpham.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, listSanPham]);


  // const acb = [];
  const btnAddtocart = function (event, value, index) {
    let products = [];
    if (localStorage.getItem('products')) {
      products = JSON.parse(localStorage.getItem('products'));
    }
    products.push(value);
    console.log(value);
    localStorage.setItem('products', JSON.stringify(products));


    // acb.push(value);
    // console.log(acb);
    // localStorage.setItem("item",JSON.stringify(acb));
  }










  return (
     

    <section className="product_hot">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-1 p-md-5 text-center">
          <h5 className="h5-bold">THỜI TRANG HÓT NHẤT</h5>
          <span className="span-bookmark"><i className="far fa-bookmark" /></span>
          <p className="product-hot-sub">Sản phảm thời trang nam được quan tâm nhiều nhất, trong bộ sưu tập thời trang tại shop 4MEN</p>
        </div>
        {
          
          filteredCountries.map(function (value, index) {
            return(
        <div  key={index} className="col-6 col-md-3 product-item text-center">
          <div className="item-thumb">
            
                  <img src={value.image} width="300" height="300"  className="img img-avatar"/>
               
          </div>
          <h4 className="product-title" className="text-danger" > <Link  to={`/detail/${value.id}`}> {value.name}</Link></h4>
                <span className="product-price"> {value.price} </span>
        </div>
          );
        })  
      }
      </div>
      <ul className="pagination mt-4 mb-4 cotphai">
          
          <li
            onClick={ trangTruoc }
            className="page-item">
            <a className="page-link">Trang trước</a>
          </li>

          <li className="page-item">
            <a className="page-link">{ page }</a>
          </li>

          <li
            onClick={ trangSau }
            className="page-item">
            <a className="page-link">Trang sau</a>
          </li>
        </ul>
    </div>

  </section>





       
  )
}
export default Shop;
