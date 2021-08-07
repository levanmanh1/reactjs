const Contact = ()=>{
    return(
        <section id="contact-shop">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <h5 className="heading space40">
                <span>GỬI LIÊN HỆ VỀ SHOP MEN</span>
              </h5>
              <form method="#" action>
                <div className="form-group">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6 ">
                      <input className="form-control" name="name" placeholder="Nhập họ và tên" type="text" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <input className="form-control" name="email" placeholder="Email của bạn" type="text" />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <input className="form-control" name="phonenumber" placeholder="Số điện thoại" type="text" />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <input className="form-control" name="address" placeholder="Địa chỉ" type="text" />
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <textarea className="form-control" placeholder="Nội dung liên hệ" rows={6} name="content" defaultValue={""} />
                    </div>
                  </div>
                  <button type="submit" className="btn-black">Gửi Liên Hệ</button>
                </div></form>
            </div>
            <div className="col-sm-6 col-md-6">
              <h5 className="heading space40">
                <span>THÔNG TIN LIÊN HỆ</span>
              </h5>
              <div className="media-list">
                <div className="media">
                  <div className="media-left">
                    <i className="pull-left fa fa-home" />
                  </div>
                  <div className="media-body">
                    <strong>Trụ sở chính:</strong><br />
                    <p> Cầu Giấy - Hà Nội</p>
                  </div>
                </div>
                <div className="media-list">
                  <div className="media">
                    <div className="media-left">
                      <i className="pull-left fa fa-phone" />
                    </div>
                    <div className="media-body">
                      <strong>Điện thoại:</strong><br />
                      <p>123456789</p>
                    </div>
                  </div>
                  <div className="media-list">
                    <div className="media">
                      <div className="media-left">
                        <i className="fas fa-envelope-square" />
                      </div>
                      <div className="media-body">
                        <strong>Email:</strong><br />
                        <p>info@shopmen.com</p>
                      </div>
                    </div>
                    <p> Website www.shopmen.com là website chuyên bán các dòng sản phẩm thời trang nam: Quần jean nam, quần tây, quần kaki, áo sơ mi, áo khoác, áo vest, áo thun, phụ kiện nam, giày dép nam...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <h5 className="heading space40">
                <span>BẢN ĐỒ ĐẾN CÁC SHOWROOM CỦA SHOP MEN</span>
              </h5>
              {/*Google map*/}
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" width="100%" height={320} frameBorder={0} style={{border: 0}} allowFullScreen />
              {/*Google Maps*/}
            </div>
          </div>
        </div>
      </section>
    )
}
export default Contact;