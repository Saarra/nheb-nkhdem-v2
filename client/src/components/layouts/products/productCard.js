import React from 'react'
import "./product.css"

function ProductCard({product}) {
  console.log(product)
  return (
    <>
    <div class="card" >
      {/* <img src={product.imageURL} class="card-img-top" alt="..." /> */}
      <div class="card-body">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">
          {product.description}
        </p>
      </div>
    </div>
    </>
  )}
export default ProductCard
