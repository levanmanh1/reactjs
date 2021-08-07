import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory,useParams } from "react-router-dom";
const Editproduct = ()=>{
    let chuyentrang = useHistory();

    const { id } = useParams();
    const fomrDataInit = {
        name: '',
        price: '',
        image:'',
        detail: '',  
        cate_id: '',
    };

  
    const [formData, setformData]= useState(fomrDataInit);

    const history = useHistory();
    const url = 'https://5fbb24efcc6c9d001624a99e.mockapi.io/products/';
    const [listSanPham, setlistSanPham]= useState([]);

  
    


    const onInputChange =function (event){
        const {name, value} = event.target;
        setformData({
            ...formData,
            [name]:value,
        });
      }
      const geturlIdProduct = url + id;

      const onSubmitHandler = function (e) {
        e.preventDefault();
        axios.put(geturlIdProduct, formData, )
        .then(function (response) {
            const {data} = response;
            setlistSanPham([
                ...listSanPham,
                data,
            ]);
            chuyentrang.push("/admin/product");
        });
        
    }
     
        useEffect(function () {
            axios.get(geturlIdProduct)
        .then(function (response) {
            const {data} = response;
            setformData(data);

        });
        
        },[]);            
    
        function  clickHuy() {
            chuyentrang.push("/admin/product");
        }
    return(
        <div id="content-wrapper" className="d-flex flex-column">
        <div className="container-fluid">
        {/* Page Heading */}
        {/* DataTales Example */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Bảng Sửa Sản Phẩm</h6>
          </div>
          <div className="card-body">
            
        <form onSubmit={e=> onSubmitHandler(e)}>
                            
            <label > Name: </label>
               
                <input type="text" className="form-control" name="name" value={formData.name}  onChange={e => onInputChange(e)} />
           
            <label>price:</label>
                
                <input type="number" className="form-control" name="price"  value={formData.price}  onChange={e => onInputChange(e)}/>
            
            <label>Anh: </label>
                
                <input type="text" className="form-control" name="image"  value={formData.image}  onChange={e => onInputChange(e)}/>
           
            <label> Detail: </label>
               
                <input type="text" className="form-control" name="detail" value={formData.detail}  onChange={e => onInputChange(e)}/>
            <br></br>
            <button  className="btn btn-primary">Sửa Sản Phẩm</button> 
            <button  className="btn btn-danger huy-edit" onClick={clickHuy}>Hủy</button>
            </form>
            
          </div>
        </div>
      </div>
        </div>

            )
}

   export default Editproduct;