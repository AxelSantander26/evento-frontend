import { Link } from "react-router-dom";
import { Home, Building2, Users, CalendarDays, User as UserIcon } from 'lucide-react'; // Iconos modernos de lucide-react
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "/logo.png";
const AdminSidebar = () => {
    return (
        <div className="d-flex flex-column justify-content-between vh-100 shadow-sm admin-sidebar">
            <div>
                {/* Logo y Nombre de usuario */}
                <div className="p-4 text-center">
                    <Link to="/admin" className="navbar-brand d-flex flex-column align-items-center">
                        <img src={logo} alt="Logo" style={{ height: "40px", marginBottom: "5px" }} />
                    </Link>
                </div>

                {/* Información del Usuario con icono */}
                <div className="p-3 small text-muted text-center">
                    <UserIcon className="mb-3" size={24} color="#495057" /> {/* Aumento el margen para separar el icono */}
                    <div><strong>Usuario:</strong> Axel</div>
                    <div><strong>Rol:</strong> Admin</div>
                </div>

                {/* Navegación del Sidebar con íconos */}
                <nav className="nav flex-column p-3 gap-2">
                    <Link className="nav-link sidebar-link" to="/admin">
                        <Home className="me-2" size={16} /> Dashboard
                    </Link>
                    <Link className="nav-link sidebar-link" to="/admin/locales">
                        <Building2 className="me-2" size={16} /> Locales
                    </Link>
                    <Link className="nav-link sidebar-link" to="/admin/usuarios">
                        <Users className="me-2" size={16} /> Usuarios
                    </Link>
                    <Link className="nav-link sidebar-link" to="/admin/reservas">
                        <CalendarDays className="me-2" size={16} /> Reservas
                    </Link>
                </nav>
            </div>

            {/* Créditos */}
            <div className="p-3 border-top small text-muted text-center">
                <div><strong>Developed by</strong></div>
                <div><strong>Axel Santander</strong></div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

                .admin-sidebar {
                    width: 200px; /* Reducido el ancho del sidebar */
                    height: 100vh; /* Asegura que el sidebar tenga altura completa */
                    background-color: #ffffff;
                    font-family: 'Poppins', sans-serif;
                    position: fixed; /* Hace que el sidebar quede fijo */
                    top: 0;
                    left: 0;
                    z-index: 1000;
                    overflow-y: auto; /* Permite el desplazamiento solo dentro del sidebar */
                }

                .sidebar-link, .nav-link {
                    color: #495057; /* Coincide con el color de texto */
                    font-weight: 500;
                    transition: all 0.2s;
                    padding: 8px 12px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;  /* Alineación a la izquierda */
                }

                .sidebar-link:hover {
                    background-color: #f8f9fa;
                    color: #000;
                    text-decoration: none;
                }

                .sidebar-link.active {
                    background-color: #103359;
                    color: #fff !important;
                }

                /* Asegura que el contenido principal no quede debajo del sidebar */
                body {
                    margin-left: 200px; /* Desplaza el contenido hacia la derecha */
                }

                .nav-link .me-2 {
                    margin-right: 8px;
                }

                /* Mejoramos la visibilidad de la línea divisoria debajo del logo */
                .navbar-brand {
                    border-bottom: 1px solid #e1e1e1; /* Línea divisoria suave debajo del logo */
                    padding-bottom: 10px;
                }
            `}</style>
        </div>
    );
};

export default AdminSidebar;
