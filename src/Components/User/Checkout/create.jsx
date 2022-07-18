import axios from 'axios';
import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const CheckoutCreate = () =>{
    const config = {
        headers: { Authorization: `Bearer ${window.token}` }
    };
	const navigate = useNavigate()
	const [order, setOrder] = useState({
		'name':'',
		'email': '',
		'phone': '',
		'location' : '',
		'payment_type' : '',
		'payment_number' : ''
	})
    const handleInput = (e)=>{
        e.persist();
        setOrder({...order,[e.target.name]: e.target.value})
    }

    const Checkout  = (e) => {
        e.preventDefault();
		 axios.post('/order', {
			'name': order.name,
            'email': order.email,
            'phone': order.phone,
            'location': order.location,
            'payment_type': order.payment_type,
            'payment_number': order.payment_number,
		}, config).then(function (response) {
            Swal.fire({
                icon:"success",
            })
			navigate('/')
          })
          .catch(function (error) {
            Swal.fire({
                icon:"error"
            })
            console.log(error);
          });
    }


    return (
        <section className="my-5 container">
            <div className="card">
                <div className="card-header">
                    <h3>Checkout</h3>
                </div>
                <div className="card container">
                    <form action="" onSubmit={Checkout}>
                    <div className="row my-5">
                        <div className="col-md-8 my-2">
                            <div className="form-gorup">
                                <label htmlFor="">Enter Your Name</label>
                                <input onChange={handleInput} value={order.name} type="text" className="form-control" placeholder="name" name="name" id="" />
                            </div>
                        </div>

                        <div className="col-md-4 my-2">
                            <div className="form-gorup">
                                <label htmlFor="">Enter Your Email</label>
                                <input onChange={handleInput} value={order.email} type="email" className="form-control" placeholder="email" name="email" id="" />
                            </div>
                        </div>


                        <div className="col-md-5 my-2">
                            <div className="form-gorup">
                                <label htmlFor="">Enter Your Phone</label>
                                <input onChange={handleInput} value={order.phone} type="number" className="form-control" placeholder="phone" name="phone" id="" />
                            </div>
                        </div>


                        <div className="col-md-7 my-2">
                            <div className="form-gorup">
                                <label htmlFor="">Enter Your Location</label>
                                <input onChange={handleInput} value={order.location} type="text" className="form-control" placeholder="location" name="location" id="" />
                            </div>
                        </div>


                        <div className="col-md-4 my-2">
                            <div className="form-gorup">
                                <label htmlFor="">Enter Your Payment Number</label>
                                <input type="text" onChange={handleInput} value={order.payment_number} className="form-control" placeholder="Payment Number" name="payment_number" id="" />
                            </div>
                        </div>


                        <div className="col-md-8 my-2">
                            <div className="form-gorup">
                                <label htmlFor="">Enter Your Payment Type</label>
                                <input  onChange={handleInput} value={order.payment_type} type="text" className="form-control" placeholder="payment_type" name="payment_type" id="" />
                            </div>
                        </div>

                        <div className="text-center my-3">
                            <input type="submit" className="btn btn-success" value="Checkout" name="" id="" />
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default CheckoutCreate