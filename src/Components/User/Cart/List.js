import axios from "axios";
import { useEffect, useState } from "react";

const CartList = () => {
    const config = {
        headers: { Authorization: `Bearer ${window.token}` }
    };


    const [carts, setCart] = useState([])
    useEffect(()=>{
        CartListItem()
    },[])

    const CartListItem = async() => {
        axios.get('cart', config).then((res)=>{
            console.log(res.data.data);
            setCart(res.data.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    const removeCart = async(id) =>{
        axios.delete(`/cart/${id}`, config).then((res) => {
            CartListItem()
        }).catch((error)=>{
            console.log(error)
        })
    }
    let total = 0;
    return (
        <section className="container my-5">
            <div className="card">
                <div className="card-header">
                    <h2>Carts List</h2>
                </div>
                <div className="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                carts.map((cart, index) =>
                                
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{cart.product_id ? cart.product_id.name : ''}</td>
                                    <td> { cart.product_id ? cart.product_id.price : ''} Taka</td>
                                    <td>{cart.quantity}</td>
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={()=>removeCart(cart._id)}>Remove</button>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                    {total}
                </div>
            </div>
        </section>
    )
}
export default CartList