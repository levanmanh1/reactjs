import axios from 'axios';
import { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Category =()=>{
    const limit = 6;
  const pageInit = 1;
  const [page, setPage] = useState(pageInit);
    const urldanhmuc = 'https://5fbb24efcc6c9d001624a99e.mockapi.io/category?limit=' + limit +
    "&page=" + page;
    const [listDanhMuc, setlistDanhMuc]= useState([]);
    
   
   
    useEffect(function () {
      axios({
        method: 'GET',
        url: urldanhmuc,
      })
        .then(function (response) {
            const {data} = response;
            setlistDanhMuc(data);
        });
    },[page
    ]);
    
    const btnDeleteOnClick = function (event, value, index) {
      const apiXoaUrl = 'https://5fbb24efcc6c9d001624a99e.mockapi.io/category/';
      event.stopPropagation();
        axios.delete(apiXoaUrl+ value.id)
        .then(function (response) {
           const list= listDanhMuc.filter(function (val, idx) {
                return idx ==index ? false : true;
            });
            setlistDanhMuc(list);
            
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
    return(
        <div id="content-wrapper" className="d-flex flex-column">
     
        <div className="container-fluid">
        {/* Page Heading */}
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 id="cottrai" className="m-0 font-weight-bold text-primary"> Danh Mục</h6>
            <Link  className="btn btn-primary" to="/admin/addcategory/add">+Thêm Mới Danh Mục</Link>

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
                    
                    <th>Sửa</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>


                {
                  listDanhMuc.map(function (value, index) {
                    return(
                      
                      <tr key={index}>
                         <td>{value.id}</td>
                         <td>{value.name}</td>
                           
                         
                         
                         <td>     
                             <Link  className="btn btn-primary"to={`/admin/editcategory/${value.id}/edit`} >Edit</Link>
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
            {/*
              mt: margin-top
              mb: margin-bottom
            */}
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
 export default Category;