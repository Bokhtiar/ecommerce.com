import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const AdminDashboard = () => {
    const [orders, setOrder] = useState([''])
    const AllOrder = () => {
        axios.get('/admin/order').then((res) => {
            console.log(res.data.data)
            setOrder(res.data.data)
        })
    }

    /**delete order  */
    const deleteCategory  = (id) => {
        axios.delete(`/admin/order/${id}`).then((res)=> {
            console.log(res)
            AllOrder()
        }).catch((error)=> {
            console.log(error)
        })
    }

    /**useEffect call api */
    useEffect(() => {
        AllOrder()
    }, [])
    return (
        <section>
            <h3>Admin Dashboard</h3>
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
                                    <td>{order.f_name + order.l_name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>
                                        status
                                    </td>
                                    <td>
                                        <Link to={`/admin/order/show/${order._id}`} className="btn btn-sm btn-success">Details</Link>
                                        <button className="btn btn-sm btn-danger"  onClick={()=>deleteCategory(order._id)}>Delete</button>
                                    </td>
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
export default AdminDashboard
