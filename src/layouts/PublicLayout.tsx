import { FC } from "react";
import { Outlet } from "react-router-dom";
import PublicMenu from "../components/menus/PublicMenu";

const PublicInfoComponent: FC = () => {
    return (
        <div>
            <PublicMenu />
            <div className="container-fluid mt-4 px-0">
                <Outlet />
            </div>

        </div>
    );
};

export default PublicInfoComponent;
