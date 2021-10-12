import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button } from '../../styles/Button.styled'
import ProductCard from './productCard'
import { getProducts } from '../../../actions/product'


function Product() {

    const dispatch = useDispatch()

    const products = useSelector(state => state.productReducer.products)
        console.log(products)
    return (
            <div className="container">
                <div className="heading">
                <h1> منتوجات و بضائع </h1>
                </div>
                <div className="products">
                    {
                      products &&   products.map(product => <ProductCard product={product} key={product._id} />)
                    }
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <Button className="btn btn-light" onClick={() => dispatch(getProducts())}>
                        جميع المنتوجات
                    </Button>
                </div>

            </div>
    )
}

export default Product
