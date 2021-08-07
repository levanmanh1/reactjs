import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const AddProduct = ()=>{
    const fomrDataInit = {
        name: '',
        price: '',
        image:'',
        detail: '',  
        categoryId:'' ,
    };
    let chuyentrang = useHistory();

    const [formData, setformData]= useState(fomrDataInit);
    const url = 'https://5fbb24efcc6c9d001624a99e.mockapi.io/products/';
    const [listSanPham, setlistSanPham]= useState([]);

    const onInputChange =function (event){
      const {name, value, id} = event.target;
      setformData({
          ...formData,
          [name]:value,
      });
    }

    const onSubmitHandler = function (e) {
      e.preventDefault();
      axios.post(url, formData, )
      .then(function (response) {
          const {data} = response;
         
          setlistSanPham([
              ...listSanPham,
              data,
           
          ]);
          chuyentrang.push("/admin/product");
      });
      
  }
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
            <h6 className="m-0 font-weight-bold text-primary">Bảng Thêm Mới Sản Phẩm</h6>
          </div>
          <div className="card-body">
            
        <form onSubmit={e=> onSubmitHandler(e)}>
                            {/* <select 
                            onChange={ danhMucOnChange }
                           className="form-control " >
                            {
                            listDanhMuc.map((value, index) => {
                                return (
                                <option
                                  
                                    name="category_id"
                                    
                                    
                                    value={value.id && formData.categoryId}
                                    onChange={e => onInputChange(e)}
                                    key={index}>
                                    { value.name }
                                    
                                </option>
                                );
                            })
                            }
                        </select> */}
            <label > Name: </label>
               
                <input type="text" className="form-control" name="name" value={formData.name}  onChange={e => onInputChange(e)} />
           
            <label>price:</label>
                
                <input type="number" className="form-control" name="price"  value={formData.price}  onChange={e => onInputChange(e)}/>
            
            <label>Anh: </label>
                
                <input type="text" className="form-control" name="image"  value={formData.image}  onChange={e => onInputChange(e)}/>
           
            <label> Detail: </label>
               
                <input type="text" className="form-control" name="detail" value={formData.detail}  onChange={e => onInputChange(e)}/>
            <br></br>
            <button className="btn btn-primary">Thêm Sản Phẩm</button>
            <button  className="btn btn-danger huy-edit" onClick={clickHuy}>Hủy</button>
            </form>
            
          </div>
        </div>
      </div>
        </div>

            )
}

   export default AddProduct;