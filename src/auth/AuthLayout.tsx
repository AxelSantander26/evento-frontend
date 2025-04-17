import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthLayout = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <div className="w-100" style={{ maxWidth: 400 }}>
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;