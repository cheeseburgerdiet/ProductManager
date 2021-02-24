import React from 'react';
import {navigate} from "@reach/router";
const ProductList = (props) => {
    return (
        <div>
            {props.product.map((product, idx)=>{
                return <div key={idx}>
                    <button onClick= {() => navigate( `/products/${product._id}`)} > {product.type} </button>
                </div>
            })}
        </div>
    )
}
export default ProductList;