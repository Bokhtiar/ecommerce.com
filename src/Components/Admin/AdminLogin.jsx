import React from 'react'
	import {useNavigate } from 'react-router-dom';
	

	const  AdminLogin=() =>{
	

	  const navigate=useNavigate()
	
 
	  const AdminLogin=()=>{
	    localStorage.setItem('admin','test')
	    navigate('/admin/dashboard')
	  }
	

	  return <div className='AdminLogin'>
	      <h2>Welcome to AdminLogin page! </h2>
	      <p>Please AdminLoging to continue</p>
	      <button onClick={AdminLogin}> AdminLogin</button>
	  </div>;
	}
	

	export default AdminLogin;