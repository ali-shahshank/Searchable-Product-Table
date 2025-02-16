import React from "react";
import { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import Footer from "./Footer";

const FilterableProductTable = ({products}) => {
  
  // UseState
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12  p-5 d-flex flex-column justify-content-center align-items-center" id="main">
          <div className="container p-4 text-center">          <h3 className="fs-3 fw-light text-dark">Searchable Product Table</h3></div>

          <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={setFilterText} onInStockOnlyChange={setInStockOnly} />
          <ProductTable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly}/></div>
          <Footer />
        
      </div>
    </div>
    
    </>
  )
}

export default FilterableProductTable;

// Products data
  const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

