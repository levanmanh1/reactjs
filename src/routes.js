import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProductForm from "./pages/admin/product/add";
import Product from "./pages/admin/product";
import Signin from "./pages/website/signin";
import DashBoard from "./pages/admin/dashboard";
import NotFound from "./pages/404";
import Editproduct from "./pages/admin/product/edit";
import Signup from "./pages/website/signup";
import AdminLayout from "./layouts/adminLayout";
import WebsiteLayout from "./layouts/websiteLayout";
import Shop from "./pages/website/index";
import Detail from "./pages/website/detail";
import Contact from "./pages/website/contact";
import Category from "./pages/admin/category";
import AddCategory from "./pages/admin/category/add";
import EditCategory from "./pages/admin/category/edit";
const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin/:path?/:path?/:path?">
          <AdminLayout>
            <Switch>
              <Route exact path="/admin/product">
                <Product  />
              </Route>
              <Route exact path="/admin/product/add">
                <AddProductForm {...props} />
              </Route>
              <Route exact path="/admin/editproduct/:id/edit">
                <Editproduct {...props} />
              </Route>
              <Route exact path="/admin/category">
                <Category  />
              </Route>
              <Route exact path="/admin/addcategory/add">
                <AddCategory  />
              </Route>
              <Route exact path="/admin/editcategory/:id/edit">
                <EditCategory />
              </Route>
            </Switch>
          </AdminLayout>A
        </Route>

        <Route>
          <WebsiteLayout>
            <Switch>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/">
                <Shop />
              </Route>
              <Route exact path="/detail/:id">
                <Detail />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
             
            </Switch>
          </WebsiteLayout>
        </Route>
        
      </Switch>

      {/* <div className="App">
        <div>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Nav />
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Switch>
                  <Route exact path="/admin">
                    <DashBoard />
                  </Route>
                  <Route exact path="/product">
                    <Product {...props} />
                  </Route>
                  <Route exact path="/product/add">
                    <AddProductForm {...props} />
                  </Route>
                  <Route exact path="/product/:id/edit">
                    <EditProductForm {...props} />
                  </Route>
                  <Route exact path="/signup">
                    <Signup />
                  </Route>
                  <Route exact path="/signin">
                    <Signin />
                  </Route>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </main>
            </div>
          </div>
        </div>
      </div> */}
    </BrowserRouter>
  );
};
export default Routes;
