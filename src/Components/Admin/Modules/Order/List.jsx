import axios from "axios"
import { useEffect, useState } from "react"

const OrderList = () => {
    const [orders, setOrder] = useState([''])
    const AllOrder = () => {
        axios.get('/admin/order').then((res) => {
            console.log(res.data.data)
            setOrder(res.data.data)
        })
    }
    useEffect(() => {
        AllOrder()
    }, [])
    return (
        <section>
            <div className="card">
                <div className="card-header">
                    <h2>All Order List</h2>
                </div>
                <div className="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Index</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index)=>
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>
                                        status
                                    </td>
                                    <td>
                                        <a href="">Details</a>
                                    </td>
                                </tr>
                                )
                            }
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
export default OrderList