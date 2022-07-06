import { Link } from "react-router-dom"

const AdminSidebar = () => {
    return (
        <div>
            <Link to="/admin/dashboard">Dashboard</Link> <br />
            <Link to="/admin/category">Category List</Link>
        </div>
    )
}
export default AdminSidebar