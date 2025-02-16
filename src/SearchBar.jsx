import React from 'react'
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

function SearchBar({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) {
  return (
    <>
      <div className="col-sm-12 col-md-6 p-2 bg-light text-light">
        <form action="" method="get" className='form-group p-2'>
          <div className="container p-2"></div>


      <div className="container p-2 ">
        <input 
        type="text" 
        className='form-control form-control-lg'
        value={filterText} 
        placeholder= "Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}/>  
        </div>

        <div className="container p-2 ">
        <label>
        <input 
          type="checkbox" 
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />
        {' '}
        Only show products in stock
      </label>
         </div>


    </form>
    </div>

    </>
  )
};

export default SearchBar;