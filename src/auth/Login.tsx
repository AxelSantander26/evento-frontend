import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
/** Importaciones */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaArrowLeft } from 'react-icons/fa';
/** Imágenes */
import LoginImg from '/necoArcBase.svg';

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (username === '' || password === '') {
            setError('Por favor, ingresa ambos campos.');
        } else {
            setError('');
            onLogin(username, password);
        }
    };

    const handleGoHome = () => {
        navigate("/");  // Redirige al Home
    };

    return (
        <>
            {/* Estilo para aplicar el verde exacto */}
            <style>
                {`
                    /* Estilo para cambiar el color del texto en el link */
                    .link-verde {
                        color: #198754; /* Verde exacto */
                        text-decoration: none; /* Sin subrayado */
                        font-weight: bold; /* Negrita */
                    }

                    .link-verde:hover {
                        text-decoration: underline; /* Agrega subrayado al pasar el mouse */
                    }
                `}
            </style>

            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div
                    className="card p-4 shadow"
                    style={{ width: '400px', minHeight: '450px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                    {/* Flecha para regresar al Home */}
                    <div className="d-flex justify-content-start align-items-center mb-3">
                        <button
                            onClick={handleGoHome}
                            className="btn d-flex align-items-center p-0"
                            style={{
                                fontSize: '1.1rem',
                                color: '#198754', // Color verde exacto
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                backgroundColor: 'transparent', // Sin fondo
                            }}
                        >
                            <FaArrowLeft style={{ fontSize: '1.3rem', marginRight: '6px' }} />
                            INICIO
                        </button>
                    </div>

                    {/* Logo debajo del título */}
                    <div className="text-center mb-4">
                        <img
                            src={LoginImg}
                            alt="Logo"
                            style={{ width: '120px', height: 'auto' }}
                        />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Usuario</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="Ingresa tu usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {error && <div className="text-danger mb-3">{error}</div>}

                        {/* Contenedor para centrar el botón */}
                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn"
                                style={{ backgroundColor: '#198754', color: 'white', width: '40%' }}
                            >
                                Iniciar sesión
                            </button>
                        </div>


                    </form>

                    <div className="text-center mt-3">
                    ¿No tienes cuenta? <Link to="/login/register" className="text-success">Regístrate aquí</Link>
                </div>
                </div>
            </div>
        </>
    );
};

export default Login;
