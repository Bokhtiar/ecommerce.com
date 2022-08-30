import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const token = localStorage.getItem('token');


const CheckoutCreate = () =>{
    /**token store */
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
	const navigate = useNavigate()

    /**form filed set useState */
	const [order, setOrder] = useState({
        'email': '',
		'f_name':'',
		'l_name': '',
        'location': '',
        'location2': '',
        'postCode' : '',
		'phone': '',
        'transection_id' : '',
		'payment_type': '',
		'payment_number': '',
        'note' : '',
	})

    /**form handle */
    const handleInput = (e)=>{
        e.persist();
        setOrder({...order,[e.target.name]: e.target.value})
    }

    /**order form submit */
    const Checkout  = (e) => {
        e.preventDefault();
		 axios.post('/order', {
            'email': order.email,
			'f_name': order.f_name,
            'l_name': order.l_name,
            'location': order.location,
            'location2': order.location2,
            'phone': order.phone,
            'transection_id' : order.transection_id,
            'postCode' : order.postCode,
            'payment_type': order.payment_type,
            'payment_number': order.payment_number,
            'note' : order.note
		}, config).then(function (response) {
            Swal.fire({
                icon:"success",
                text: "Order Successfully Done."
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

   
 

    
    /**auth user cart list show */
    const [carts, setCart] = useState([])
    let total = 0
    const CartListItem = async() => {
        const api = '/cart'
        axios.get(api, {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res)=>{
            console.log(res.data.data);
            setCart(res.data.data)
        }).catch((error) => {
            console.log("e",error);
        })
    }

    /**auth user can cart remove */
    const removeCart = async(id) =>{
        axios.delete(`/cart/${id}`, {
        headers: { Authorization: `Bearer ${window.token}` }
    }).then((res) => {
            CartListItem()
        }).catch((error)=>{
            console.log(error)
        })
    }

    /**increment cart quantity*/
    const increment = (id) => {
        axios.get(`/cart/increment/${id}`,config).then((res) => {
            CartListItem()
        }).catch((error) => {
            console.log(error)
        })
    }

    /**decrement cart quantity*/
    const decrement = (id) => {
        axios.get(`/cart/decrement/${id}`,config ).then((res)=> {
            CartListItem()
        }).catch((error)=> {
            console.log(error)
        })
    }

    useEffect(()=>{
        CartListItem()
    },[])


    return (
        <section className="my-5 container">
            <div className="">
                <div className="">
                    
                </div>
                <div className="">
                    <div className="row">
                        <div className="col-md-8 col-lg-8 col-sm-12">
                        <h3>Checkout</h3>
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
                                                <input type="radio" name="payment_Type[]" value="bkash" id="" />
                                                &nbsp;<span>Bkash(0919278181)</span>
                                            </p>

                                            <p>
                                                <input type="radio" name="payment_Type[]" value="rocket" id="" />
                                                &nbsp;<span>Rocket(0919278181)</span>
                                            </p>

                                            <p>
                                                <input type="radio" name="payment_Type[]" value="nagud" id="" />
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
                        <h3>Cart Items</h3>
                                {   
                                    carts.map((cart, index) => 
                                    <div className='row my-4'>
                                        <div className="col-md-4 col-lg-4 col-sm-12">
                                        <img src={cart.product_id ?cart.product_id.image : ''} alt="image not found" />
                                        </div>

                                        <div className="col-md-8 col-lg-8 col-sm-12">
                                        <strong>Name: {cart.product_id ? cart.product_id.name : ''}</strong><br />
                                        <strong>Qty: {cart.product_id ? cart.product_id.price : ''}</strong><br />
                                        <span style={{ display: "none" }}>{ total += cart.product_id ? cart.product_id.price * cart.quantity : ''    }</span>
                                        <strong> <button onClick={()=>decrement(cart._id)}>-</button> <span>{cart.quantity}</span> <button onClick={()=>increment(cart._id)}>+</button></strong>
                                        </div>
                                    </div>
                                    )
                                }
                            
                            <div class="d-flex">
                                <div class="p-2 font-weight-bold">Sub Total</div>
                                <div class="ml-auto p-2 font-weight-bold">{total}Tk</div>
                            </div>

                            <div class="d-flex">
                                <div class="p-2 font-weight-bold"> Total</div>
                                <div class="ml-auto p-2 font-weight-bold">{total}Tk</div>
                            </div>


                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    ) 
}
export default CheckoutCreate