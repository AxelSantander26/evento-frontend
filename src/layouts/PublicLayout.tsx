import { FC } from "react";
import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/menus/PublicNavbar";

const PublicInfoComponent: FC = () => {
    return (
        <div>
            <PublicNavbar />
            <div className="container-fluid px-0">
                <Outlet />
            </div>

        </div>
    );
};

export default PublicInfoComponent;
