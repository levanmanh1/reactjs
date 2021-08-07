import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory,useParams } from "react-router-dom";



const EditCategory = ()=>{
  const { id } = useParams();
  let chuyentrang = useHistory();
    const fomrDataInit = {
        name: '',
       
    };
    const [formData, setformData]= useState(fomrDataInit);
    const url = 'https://5fbb24efcc6c9d001624a99e.mockapi.io/category/';
    const [listDanhMuc, setlistDanhMuc]= useState([]);
   

    const onInputChange =function (event){
        const {name, value} = event.target;
        setformData({
            ...formData,
            [name]:value,
        });
      }
      const geturlIdDanhMuct = url + id;

      useEffect(function () {
        axios.get(geturlIdDanhMuct)
    .then(function (response) {
        const {data} = response;
        setformData(data);

    });
    
    },[]);            
   

      
      const onSubmitHandler = function (e) {
        e.preventDefault();
        axios.put(geturlIdDanhMuct, formData, )
        .then(function (response) {
            const {data} = response;
           
            setlistDanhMuc([
                ...listDanhMuc,
                data,
             
            ]);
            chuyentrang.push("/admin/category");

        });
        
    }
    function  clickHuy() {
      chuyentrang.push("/admin/category");
  }


    return(
        <div id="content-wrapper" className="d-flex flex-column">
        <div className="container-fluid">
        {/* Page Heading */}
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Bảng Sửa  Danh Mục</h6>
          </div>
          <div className="card-body">
            
        <form onSubmit={e=> onSubmitHandler(e)}>
                           
        <label > Name: </label>
               
               <input type="text" className="form-control" name="name" value={formData.name}  onChange={e => onInputChange(e)} />
          
          
            <br></br>
            <button className="btn btn-primary">Sửa Danh  Mục</button>
            <button  className="btn btn-danger huy-edit" onClick={clickHuy}>Hủy</button>
            </form>
            
          </div>
        </div>
      </div>
        </div>
    )
}
export default EditCategory;