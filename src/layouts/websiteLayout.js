import Header from "../components/website/header";
import Footer from "../components/website/footer";

const WebsiteLayout = (props) => {
  return (
    <>
    <div className="Client">
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
          
              {props.children}
           
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  </>
  );
};
export default WebsiteLayout;
