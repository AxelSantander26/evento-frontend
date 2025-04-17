import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
const Services: FC = () => {
    return (<>
        <h3>Consumir un api con react</h3>
        <div className="d-flex justify-content-around">
            <Link className="btn btn-sm btn-outline-primary" to={"fetch"}>Fecht</Link>
            <Link className="btn btn-sm btn-outline-primary" to={"axios"}>Axios</Link>
            <Link className="btn btn-sm btn-outline-primary" to={"alova"}>Aloba</Link>
            <Link className="btn btn-sm btn-outline-primary" to={"prueba"}>prueba</Link>
        </div>
        <hr />
        <Outlet />
    </>)
}
export default Services;