import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ProductList = () => {

    const [Products, SetProduct] = useState([''])
    const AllProduct = () =>{
        axios.get('/product').then((response)=>{
            SetProduct(response.data.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        AllProduct()
    })

    return (
        <section>
            <div className="card">
                <div className="card-header">
                    Product List <Link to="/admin/product/create" className="btn btn-sm btn-success">Create Product</Link>
                </div>
                <div className="card-body">
                <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map((p, index) =>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{p.name}</td>
                            <td><img style={{height:"60px", width:"60px"}} src={p.image} alt="" /> </td>
                            <td><button className="btn btn-sm btn-danger">Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
                </div>
            </div>
        </section>
    )
}
export default ProductList