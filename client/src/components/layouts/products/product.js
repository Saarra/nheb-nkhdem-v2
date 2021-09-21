import React from 'react'
import "./product.css"
import { Link } from "react-router-dom";

function Product() {
  return (
    <>
     <div id="container">
      <div className="product-details">
        <h6><Link to="/profile">Hâj Êr</Link></h6>
        <span className="hint-star star">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-half-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
        {/* The most important information about the product */}
        <p className="information">
          كسكسي دياري
        </p>
        {/* 		Control */}
        <div className="control">
          {/* Start Button buying */}
          <button className="btn">
            {/* 		the Price */}
            <span className="price">30د</span>
            {/* 		shopping cart icon*/}
            <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
            {/* 		Buy Now / ADD to Cart*/}
            <span className="buy">
            <Link to="/profile">اتصل بنا</Link>
            </span>
          </button>
          {/* End Button buying */}
        </div>
      </div>
      {/* 	End	Product details   */}
      {/* 	Start product image & Information */}
      <div className="product-image">
        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/242173461_4187598181367315_5698862309634864331_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=825194&_nc_ohc=k-8pGukte0UAX-bULwl&_nc_ht=scontent.ftun1-2.fna&oh=daf9d1d9719b762384a734e652b41585&oe=616CF6A7" alt="Omar Dsoky" />
        {/* 	product Information*/}
        <div className="info">
          <h2>The Description</h2>
          <ul>
            <li><strong>Sun Needs: </strong>Full Sun</li>
            <li><strong>Soil Needs: </strong>Damp</li>
            <li><strong>Zones: </strong>9 - 11</li>
            <li><strong>Height: </strong>2 - 3 feet</li>
            <li><strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall</li>
            <li><strong>Features: </strong>Tolerates heat</li>
          </ul>
        </div>
      </div>
      {/*  End product image  */}
      {/* -----------------      */}

      <div id="container">
      <div className="product-details">
        <h6><Link to="/profile">Hâj Êr</Link></h6>
        <span className="hint-star star">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-half-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
        {/* The most important information about the product */}
        <p className="information">
          كسكسي دياري
        </p>
        {/* 		Control */}
        <div className="control">
          {/* Start Button buying */}
          <button className="btn">
            {/* 		the Price */}
            <span className="price">30د</span>
            {/* 		shopping cart icon*/}
            <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
            {/* 		Buy Now / ADD to Cart*/}
            <span className="buy">
            <Link to="/profile">اتصل بنا</Link>
            </span>
          </button>
          {/* End Button buying */}
        </div>
      </div>
      {/* 	End	Product details   */}
      {/* 	Start product image & Information */}
      <div className="product-image">
        <img src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/242173461_4187598181367315_5698862309634864331_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=825194&_nc_ohc=k-8pGukte0UAX-bULwl&_nc_ht=scontent.ftun1-2.fna&oh=daf9d1d9719b762384a734e652b41585&oe=616CF6A7" alt="Omar Dsoky" />
        {/* 	product Information*/}
        <div className="info">
          <h2>The Description</h2>
          <ul>
            <li><strong>Sun Needs: </strong>Full Sun</li>
            <li><strong>Soil Needs: </strong>Damp</li>
            <li><strong>Zones: </strong>9 - 11</li>
            <li><strong>Height: </strong>2 - 3 feet</li>
            <li><strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall</li>
            <li><strong>Features: </strong>Tolerates heat</li>
          </ul>
        </div>
      </div>
      {/*  End product image  */}
    </div>
     </div>
    </>
  );
}

export default Product
