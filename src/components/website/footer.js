export default function Footer() {
    return (<footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 widget-footer">
            <img src="./img/logo-footer.png" alt="" />
            <p>THƯƠNG HIỆU THỜI TRANG VIỆT NAM</p>
            <ul className="list-footer-contact">
              <li>
                <i className="far fa-envelope" />
                Email :
                <a href>shop@gmail.com</a>
              </li>
              <li>
                <i className="fa fa-phone" />
                Hotline :
                <a href>0868676687</a>
              </li>
            </ul>  
            <a href className="contact-mail"><i className="fab fa-facebook-f" /></a>
            <a href className="contact-mail"><i className="fas fa-envelope" /></a>
          </div>
          <div className="col-md-3 widget-footer">
            <h5>TRỢ GIÚP &amp; TƯ VẤN</h5>
            <ul className="menu-footer">
              <li className>
                <a href><i className="fas fa-angle-double-right" /> Liên hệ</a>
              </li>
              <li className>
                <a href><i className="fas fa-angle-double-right" /> Bản đồ</a>
              </li>
              <li className>
                <a href><i className="fas fa-angle-double-right" /> Cách chọn size quần áo</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 widget-footer">
            <h5>THƯ BÁO</h5>
            <p>Đăng ký nhận email khuyến mãi</p>
            <form action>
              <input type="text" placeholder="Email của bạn" />
              <button>ĐĂNG KÝ</button>
            </form>
          </div>
          <div className="col-md-3 widget-footer">
            <h5>FACEBOOK</h5>
          </div>
        </div>
      </div>
    </footer>)
  }
  