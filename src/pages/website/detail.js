
  import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory,useParams } from "react-router-dom";
const Detail = ()=>{
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

  
    


      const geturlIdProduct = url + id;

 
     
        useEffect(function () {
            axios.get(geturlIdProduct)
        .then(function (response) {
            const {data} = response;
            setformData(data);

        });
        
        },[]);            
    
        function  clickHuy() {
            chuyentrang.push("/product");
        }
        const btnAddtocart = function(event, value, index){
          let products = [];
          if(localStorage.getItem('products')){
              products = JSON.parse(localStorage.getItem('products'));
          }
          products.push(value);
          console.log(value);
          localStorage.setItem('products', JSON.stringify(products));
  
  
          // acb.push(value);
          // console.log(acb);
          // localStorage.setItem("item",JSON.stringify(acb));
        }
  
    return(
      <section id="summary-product">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="slide-top ">
              <div className="product-img-item bg-light">
               <img src={formData.image}  className="img img-avatar"/>
              </div>
            
              <div className="owl-controls">
                <i className="fa fa-chevron-left" />
                <i className="fa fa-chevron-right" />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <h5 className="product-single-title">
            {formData.name}
            </h5>
            <p className="product-single-price">
              <span className="span-underline">
                Giá bán: 
              </span>
              <span className="span-price-red">
              {formData.price}
              </span>
            </p>
            <p className="product-single-stock">
              <span className="span-underline">
                Tình trạng: 
              </span>
              <span>
                Còn hàng
              </span>
            </p>
           
            <form action>
              <div className="row row-add-cart">
                <div className="col-6 col-md-4">
                  <span>
                    Size*
                  </span>
                  <select name id>
                    <option value>
                      M
                    </option>
                    <option value>
                      L
                    </option>
                    <option value>
                      XL
                    </option>
                    <option value>
                      XXL
                    </option>
                  </select>
                </div>
                <div className="col-6 col-md-4">
                  <span>
                    Số lượng *
                  </span>
                  <select name id>
                    <option value>
                      1
                    </option>
                    <option value>
                      2
                    </option>
                    <option value>
                      3
                    </option>
                    <option value>
                      4
                    </option>
                  </select>
                </div>
              </div>
              <div className="row row-submit">
                <div className="col-12 border-ccc">
                  <hr />
                </div>
                <div className="col-12 col-md-3">
                  <button className="button-buy">
                    <i className="fas fa-shopping-cart" />
                    ĐĂNG KÝ MUA
                  </button>
                </div>
         
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>
            )
}

   export default Detail;