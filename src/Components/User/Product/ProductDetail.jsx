import axios from "axios"
import { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    console.log('pras',product)
    
    useEffect(()=>{
        SingleProduct()
      },[])
      
    const SingleProduct = async()=>{
        await axios.get(`/product/${id}`).then((res) => {
            console.log('name', res.data.data[0])
            setProduct(res.data.data[0])
        }).catch((error) =>{
            console.log(error);
        })
    }


    return (
        <section className="my-5 container">
            <div className="row ">
                {/* <div className="col-md-4 col-lg-4 col-sm-12">
                    
                </div>
                <div className="col-md-8 col-lg-8 col-sm-12">
                    <p><strong>Product Name: </strong> {product.name}</p>
                    <p><strong>Product Price: </strong> {product.price}</p>
                    <p><strong>Product Category: </strong> {product.category_id}</p>
                    <p><strong>Product Description: </strong> {product.description}</p>
                    <a href="">Add-to-card</a>
                </div> */}
                <div className="col-md-4 col-lg-4">
                <img src={product.image} style={{height: "350px", width:"100%"}} alt="" />
                </div>
                <div className="col-md-8 col-lg-8">
                    <p><strong>Product Name: </strong> {product.name}</p>
                    <p><strong>Product Price: </strong> {product.price}</p>
                    <p><strong>Product Category: </strong> {product.category_id}</p>
                    <p><strong>Product Description: </strong> {product.description}</p>
                    <Link href="">Add-to-card</Link>            
                </div>
            </div>
        </section>
    )
}
export default ProductDetail