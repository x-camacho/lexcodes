 import React from 'react'
 import "./ProductList.css"
 import Product from "../product/Product"
 import {products} from "../../services/data.js"
 
const ProductList = () => {
   return (
     <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">Make and Do. Its X</h1>
            <p className="pl-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            </p>
        </div>
        <div className="pl-list">
            {products.map((item) => (
                <Product 
                key={item.id} 
                img={item.img} 
                link={item.link}
                />
            ))}
        </div>
    </div>
   )
 }
 
 export default ProductList