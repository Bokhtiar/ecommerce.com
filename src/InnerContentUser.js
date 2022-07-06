import {Outlet} from 'react-router-dom'
import Footer from './Components/User/Layouts/Footer';
import Navbar from './Components/User/Layouts/Navbar';

const  InnerContentUser=() =>{
  return <div className='inner-content'>
    <Navbar></Navbar>
      <Outlet/>
    <Footer></Footer>
  </div>;
} 

export default InnerContentUser;