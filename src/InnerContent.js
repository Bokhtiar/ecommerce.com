import { Outlet } from 'react-router-dom'
import AdminFooter from './Components/Admin/Layouts/Footer';
import AdminNavbar from './Components/Admin/Layouts/Navbar';
import AdminSidebar from './Components/Admin/Layouts/Sidebar';

const InnerContent = () => {
  return <div className='inner-content'>
    <AdminNavbar></AdminNavbar>
    <div className='row'>
      <div className='col-md-3 col-lg-3'>
        <AdminSidebar></AdminSidebar>
      </div>
      <div className='col-md-9 col-lg-9'>
        <Outlet />
      </div>
    </div>
    <AdminFooter></AdminFooter>
  </div>
}

export default InnerContent;