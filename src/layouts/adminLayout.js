
import Nav from "../components/admin/nav";
import Header from "../components/admin/header";
const AdminLayout = (props) => {
  return (
    <>
      <div className="App">
        <div>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Nav />
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                {props.children}
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminLayout;
