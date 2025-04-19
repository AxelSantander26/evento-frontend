import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "/logo.png";
import { FC } from "react";
import { Link } from "react-router-dom";

const PublicNavbar: FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow fixed-top custom-font">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ height: '40px', marginRight: '10px' }}
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div id="navbarNav" className="collapse navbar-collapse justify-content-end">
                    <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                        {[
                            { name: 'Inicio', href: '#inicio' },
                            { name: 'Locales', href: '#locales' },
                            { name: 'Precios', href: '#precios' },
                            { name: 'Nosotros', href: '#nosotros' },
                        ].map((item, idx) => (
                            <li className="nav-item d-flex align-items-center" key={idx}>
                                <a className="nav-link custom-link" href={item.href}>
                                    {item.name}
                                </a>
                                <div className="vr custom-vr d-none d-lg-block" />
                            </li>
                        ))}
                        <li className="nav-item d-flex align-items-center">
                            <Link className="nav-link custom-link" to="/prueba">
                                ErrorTest
                            </Link>
                        </li>
                    </ul>

                    {/* Botón "Reserva Ahora" centrado en pantallas pequeñas */}
                    <div className="d-flex justify-content-center ms-3">
                        <Link className="btn custom-btn" to="/login">
                            Reserva Ahora
                        </Link>
                    </div>
                </div>
            </div>

            {/* Custom Styles */}
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

                    .custom-font {
                        font-family: 'Poppins', sans-serif;
                        letter-spacing: 0.5px;
                    }

                    .custom-link {
                        color: #6c757d !important;
                        transition: color 0.3s;
                        font-size: 1rem;
                        font-weight: 500;
                    }

                    .custom-link:hover {
                        color: #000 !important;
                    }

                    .custom-btn {
                        background: linear-gradient(to bottom, #155090, #103359);
                        color: white !important;
                        border: none;
                        padding: 0.3rem 1rem;
                        font-size: 0.875rem;
                        font-weight: 500;
                        border-radius: 0;
                        text-decoration: none;
                    }

                    .custom-btn:hover {
                        opacity: 0.9;
                        color: white !important; /* ← Mantenemos el texto blanco en hover */
                    }

                    .custom-vr {
                        width: 1px;
                        height: 40px;
                        background-color: #dee2e6;
                    }
                `}
            </style>
        </nav>
    );
};

export default PublicNavbar;
