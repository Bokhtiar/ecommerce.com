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
            'email': order.email,
			'f_name': order.f_name,
            'l_name': order.l_name,
            
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
            <div className="">
                <div className="">
                    <h3>Checkout</h3>
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-sm-12">
                            <form action="" onSubmit={Checkout}>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 col-ms-12 my-2">
                            <div className="form-gorup">
                                <input onChange={handleInput} value={order.email} type="text" className="form-control" placeholder="E-mail" name="email" id="" />
                            </div>
                        </div>

                        <div className="col-md-6 my-2">
                            <div className="form-gorup">
                                <input onChange={handleInput} value={order.f_name} type="text" className="form-control" placeholder="First Name" name="f_name" id="" />
                            </div>
                        </div>


                        <div className="col-md-6 my-2">
                            <div className="form-gorup">
                                <input onChange={handleInput} value={order.l_name} type="text" className="form-control" placeholder="Last Name" name="l_name" id="" />
                            </div>
                        </div>


                        <div className="col-md-12 my-2">
                            <div className="form-gorup">
                                <input onChange={handleInput} value={order.location} type="text" className="form-control" placeholder="Address" name="location" id="" />
                            </div>
                        </div>

                        <div className="col-md-6 my-2">
                            <div className="form-gorup">
                                <input onChange={handleInput} value={order.location2} type="text" className="form-control" placeholder="Address 2 (option)" name="location2" id="" />
                            </div>
                        </div>

                        <div className="col-md-6 my-2">
                            <div className="form-gorup">
                                <input onChange={handleInput} value={order.postCode} type="text" className="form-control" placeholder="Post Code" name="postCode" id="" />
                            </div>
                        </div>
                        


                        <div className="col-md-12 my-2">
                            <div className="form-gorup">
                                <input type="text" onChange={handleInput} value={order.phone} className="form-control" placeholder="Phone Number" name="phone" id="" />
                            </div>
                        </div>


                        <div className="col-md-12 my-2">
                            <div className="form-group">
                                <p>
                                    <input type="radio" name="payment_Type[]" id="" />
                                    &nbsp;<span>Bkash(0919278181)</span>
                                </p>

                                <p>
                                    <input type="radio" name="payment_Type[]" id="" />
                                    &nbsp;<span>Rocket(0919278181)</span>
                                </p>

                                <p>
                                    <input type="radio" name="payment_Type[]" id="" />
                                    &nbsp;<span>nagud(0919278181)</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 my-2">
                            <div className="form-gorup">
                                <input type="text" onChange={handleInput} value={order.transection_id} className="form-control" placeholder="Transection ID" name="transection_id" id="" />
                            </div>
                        </div>

                        <div className="col-md-6 my-2">
                            <div className="form-gorup">
                                <input type="number" onChange={handleInput} value={order.payment_number} className="form-control" placeholder="Payment Number" name="payment_number" id="" />
                            </div>
                        </div>


                        <div className="col-md-12 my-2">
                            <div className="form-gorup">
                                <textarea name="note" placeholder='Note' onChange={handleInput} value={order.note} id="" className='form-control' cols="8" rows="4"></textarea>
                            </div>
                        </div>
                        

                        <div className="text-center my-3">
                            <input type="submit" className="btn btn-success" value="Checkout" name="" id="" />
                        </div>
                    </div>
                            </form>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CheckoutCreate