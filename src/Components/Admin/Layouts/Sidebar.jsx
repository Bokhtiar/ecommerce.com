import { Link } from "react-router-dom"

const AdminSidebar = () => {
    return (
        <div>
            
  {/*  ======= Sidebar ======= */}
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <Link class="nav-link " to="/admin/dashboard">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </Link>
      </li>{/*  End Dashboard Nav */}

      <li class="nav-item">
        <Link class="nav-link " to="/admin/category">
          <i class="bi bi-grid"></i>
          <span>Category</span>
        </Link>
      </li>{/*  End Category Nav */}

    </ul>

  </aside>

        </div>
    )
}
export default AdminSidebar