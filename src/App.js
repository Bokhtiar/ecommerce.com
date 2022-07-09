
import React from 'react';

import Login from './Components/Login';
import Dashboard from './Components/Admin/Dashboard';
import Settings from './Components/Settings';
import ProtectedRoutes from './ProtectedRoute';
import ProtectedRoutesUser from './ProtectedRoutesUser';
import InnerContent from './InnerContent';
import InnerContentUser from './InnerContentUser';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminLogin from './Components/Admin/AdminLogin';
import Setting from './Components/Settings';
import About from './Components/User/About';
import AdminCategoryList from './Components/Admin/Modules/Category/List';
import Home from './Components/User/Home';
import CategoryList from './Components/Admin/Modules/Category/List';



const App = () => {

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>

          {/* no protected route */}

          <Route path="/" element={<InnerContentUser />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* login admin and user */}
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />


          {/** admin Routes */}


          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/" element={<InnerContent />}>
              <Route path="/" element={<Navigate replace to="admin/dashboard" />} />
              <Route path="admin/dashboard" element={<Dashboard />} />
              {/* category start */}
              <Route path="admin/category" element={<CategoryList />} />
              {/* category end  */}
              
              <Route path="admin/settings" element={<Settings />} />

              {/* category list */}
              <Route path="/admin/category" element={<AdminCategoryList />} />

            </Route>
          </Route>




          {/** Public Routes */}
          <Route path="/" element={<ProtectedRoutesUser />}>
            <Route path="/" element={<InnerContentUser />}>
              <Route path="/" element={<Navigate replace to="user/dashboard" />} />
              <Route path="/user/dashboard" element={<Dashboard />} />
              <Route path="/user/settings" element={<Settings />} />
            </Route>
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App