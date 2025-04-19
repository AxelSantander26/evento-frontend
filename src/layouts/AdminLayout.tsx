import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/menus/AdminSidebar";

const AdminLayout = () => {
    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            <AdminSidebar />
            <div className="container-fluid px-0">
                <Outlet />
            </div>

        </div>
    );
};

export default AdminLayout;
