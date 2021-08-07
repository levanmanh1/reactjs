
import axios from 'axios';
import { useState, useEffect } from 'react';
import AddProduct from './add';
import Editproduct from './edit';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Product(){
  
  const limit = 10;
  const pageInit = 1;
  const [page, setPage] = useState(pageInit);

 
  const url = 'https://5fbb24efcc6c9d001624a99e.mockapi.io/products?limit=' + limit +
  "&page=" + page;
    const [listSanPham, setlistSanPham]= useState([]);
    
   
   
    useEffect(function () {
     
      axios.get(url)
        .then(function (response) {
            const {data} = response;
            setlistSanPham(data);
        });
    },[page
    ]);

    const urlxoa = 'https://5fbb24efcc6c9d001624a99e.mockapi.io/products/';
    const btnDeleteOnClick = function (event, value, index) {
        axios.delete(urlxoa + value.id)
        .then(function (response) {
          const list= listSanPham.filter(function (val, idx) {
            return idx ==index ? false : true;
        });            setlistSanPham(list);

            });
            
        
    }
    const trangTruoc = function () {
      if (page == 1) {
        return ;
      }
  
      setPage(page - 1);
    }
  
    const trangSau = function () {
      setPage(page + 1);
    }
    const [search, setSearch] = useState("");
    const [filteredSanPham, setFilteredSanPham] = useState([]);
    useEffect(() => {
      setFilteredSanPham(
        listSanPham.filter((sanpham) =>
        sanpham.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search, listSanPham]);

   

    return(
        <div id="content-wrapper" className="d-flex flex-column">
     
        <div className="container-fluid">
        {/* Page Heading */}
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 id="cottrai" className="m-0 font-weight-bold text-primary"> Sản Phẩm</h6>
            <Link  className="btn btn-primary" to="/admin/product/add">+Thêm Mới Sản Phẩm</Link> 
            <input
        type="text" 
        id="cotphai"
        className="form-control rounded"
        placeholder="Search "
        onChange={(e) => setSearch(e.target.value)}
      />
          </div>
          {/* <div className="card-header py-3">
          <input type="text" placeholder="Search" onChange={(event)=>{
            searchSanPham(event.target.value);
          }} />
            
          </div> */}
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tên</th>
                    
                    <th>Giá</th>
                    <th>Ảnh</th>
                    <th>Detail</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                
                {
                  
                  filteredSanPham.map(function (value, index) {
                    return(
                      <tr key={index}>
                         <td>{value.id}</td>
                         <td>{value.name}</td>
                           
                         <td>{value.price}</td>
                         <td><img src={value.image} width="100px"  className="img img-avatar"/>  </td>
                                 
                         <td>{value.detail}</td>
                         
                         <td>     
                             <Link className="btn btn-primary"  to={`/admin/editproduct/${value.id}/edit`} >Edit</Link>
                          </td>
                          <td>
                             <button className="btn btn-danger" onClick={function (event) {
                               window.confirm("Bạn Có Muốn Xóa Sản Phẩm Này Không?") &&
                               btnDeleteOnClick(event,value, index )
                             }} >Delete</button>
                         </td>  
                        
                      </tr>
                    );
                  })  
                }
       
                </tbody>
              
              </table>
              <ul className="pagination mt-4 mb-4">
          
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
          </div>
        </div>
      </div>
      </div>
       )
}
 export default Product;