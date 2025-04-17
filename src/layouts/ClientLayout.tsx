import { FC } from "react";
import { Outlet } from "react-router-dom";
import PublicMenu from "../components/menus/PublicMenu";

const ClientPanelComponent: FC = () => {
    return (
        <div>
            <PublicMenu />
            <div className="container mt-4">
                <Outlet />
            </div>
        </div>
    );
};

export default ClientPanelComponent;
