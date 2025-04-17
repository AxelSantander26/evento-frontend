import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FC } from "react";
import { Link } from "react-router-dom";

const PublicMenu: FC = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">VirellaRent</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#publicMenu"
                    aria-controls="publicMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="publicMenu">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Servicios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/prueba">ErrorTest</Link>
                        </li>
                    </ul>

                    <div className="d-flex">
                        <Link className="btn btn-outline-primary" to="/login">Has tu reservacion</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default PublicMenu;
