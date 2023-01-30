// import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";


function ProductList({products}) {
  
  return (
    <div className="product-list">
      <div className="heading">
        <input type='search' placeholder="search for item"></input>
      </div>

      <div className="catalogue">
        {
          products.map(item => {
            return (
              <ItemCard
                itemName={item.name}
                /* itemPrice={item.price}
                key={item.id} */
              />
            )
          })
        }
      </div>
      
    </div>
  );
}
  
  export default ProductList;
  