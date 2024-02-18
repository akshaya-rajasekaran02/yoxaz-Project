import './App.css';
import React, { useState } from 'react';
import Header from "./components/Header/Header"
import SearchAndFilters from "./components/Search/Search"
import ProductTable from "./components/ProductTable/ProductTable"
let data = [
  { id: 1077620, shipify: 17713, date: '22 Jan 2020', status: 'Dispatched', customer: 'Rohit', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077621, shipify: 17715, date: '22 Jan 2020', status: 'Pending', customer: 'Ahmed', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077622, shipify: 17716, date: '22 Jan 2020', status: 'Closed', customer: 'Ahmed', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077623, shipify: 17717, date: '11 Feb 2020', status: 'Dispatched', customer: 'Rishab', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077624, shipify: 17718, date: '14 Feb 2020', status: 'Dispatched', customer: 'Surya', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077625, shipify: 17719, date: '24 Feb 2020', status: 'Pending', customer: 'Aarya', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077626, shipify: 17723, date: '24 Feb 2020', status: 'Pending', customer: 'Vikram', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077627, shipify: 17724, date: '25 Feb 2020', status: 'Dispatched', customer: 'Vikram', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077628, shipify: 17725, date: '25 Feb 2020', status: 'Pending', customer: 'Siva', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077629, shipify: 17733, date: '03 Mar 2020', status: 'Closed', customer: 'Siva', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077630, shipify: 17736, date: '04 Mar 2020', status: 'Pending', customer: 'Ahmed', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077631, shipify: 17739, date: '04 Mar 2020', status: 'Pending', customer: 'Ahmed', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077632, shipify: 17737, date: '04 Mar 2020', status: 'Dispatched', customer: 'Joseph', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
  { id: 1077633, shipify: 17743, date: '06 Mar 2020', status: 'Closed', customer: 'Jeeva', email: 'ahmed.123@mail.com', country: 'Australia', shipping: 'Austrelian Post Api', source: 'ShopifyAU', type: 'Customer' },
];
function App() {
  const [products, setProducts] = useState(data);
  const [searchCriteria,setSearchCriteria] = useState({});
  const handleSubmit = (formData) => {
    // Handle the submitted data here
    // console.log(formData);
    // You can perform any actions with the submitted data here, such as sending it to an API, updating state, etc.
    setSearchCriteria(formData);
    //setProducts(filteringProducts);
    // console.log("FILERING PRODUCTS", filteringProducts);
  };
  function createProduct(product) {
    setProducts(oldValue => [...oldValue, product]);
  };
  return (
    <div className="App">
      <Header callBack={createProduct}></Header>
      <SearchAndFilters products={products} onSubmit={handleSubmit}></SearchAndFilters>
      <ProductTable products={products} search={searchCriteria}></ProductTable>
    </div>
  );
}

export default App;
