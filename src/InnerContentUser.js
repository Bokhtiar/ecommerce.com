import { Outlet } from 'react-router-dom'
import Footer from './Components/User/Layouts/Footer';
import Navbar from './Components/User/Layouts/Navbar';


import('https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css')
import('../src/Components/User/assets/css/bootstrap.css')
import('https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap')
import('../src/Components/User/assets/css/style.css')
import('../src/Components/User/assets/css/responsive.css')



 


const InnerContentUser = () => {
  return <div className='inner-content'>
    <Navbar></Navbar>
    <Outlet />
    <Footer></Footer>
  </div>
}

export default InnerContentUser;