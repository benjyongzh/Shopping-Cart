// import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import "../styles/ProductList.css";


function ProductList({products, addItemToCart}) {

  const addItem = item => {
    addItemToCart(item);
  };
  
  return (
    <div className="product-list">
      <div className="heading">
        <input type='text' placeholder="search for item"></input>
      </div>

      <div className="catalogue">
        {
          products.map(item => {
            return (
              <ItemCard
                itemName={item.name}
                key={item.name}
                itemURL={item.url}
                addItemToCart={addItem}
              />
            )
          })
        }
      </div>
      
    </div>
  );
}
  
  export default ProductList;
  