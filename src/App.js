import { useState, useEffect } from "react";
import { add, getAll, remove, update } from "./api/productAPI";
import Routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./dashboard.css";
export default function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    // Get danh sach
    const getProducts = async () => {
      try {
        const { data } = await getAll();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  // xoa
  const onHandleRemove = (id) => {
    try {
      remove(id); // xoa data tren API
      const newProduct = products.filter((item) => item.id !== id); // rerender
      setProducts(newProduct);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleEdit = async (item) => {
    try {
      const { data } = await update(item);
      console.log("app.js", data);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
 
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = products.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(products);
    }
  };

  return (
    <Routes products={searchTerm.length < 1 ? products : searchResults}
    term={searchTerm}
                searchKeyword={searchHandler}
    onRemove={onHandleRemove}
     onAdd={onHandleAdd}
     onEdit={onHandleEdit}

      />
  );
}
