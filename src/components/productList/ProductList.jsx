 import React from 'react'
 import "./ProductList.css"
 import Product from "../product/Product"
 import {products} from "../../services/data.js"
 
const ProductList = () => {
   return (
     <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">A few projects that got done. Always a work in progress...</h1>
            <p className="pl-desc">
                Utilizing tech stacks like NEM and MERN - always having fun with JavaScript and React, but I don't mind dabbling in Python and mySQL. 
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