import { FC, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

interface RegisterProps {
    onRegister: (username: string, email: string, password: string) => void;
}

const Register: FC<RegisterProps> = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        setError('');
        onRegister(username, email, password);
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card p-4 shadow-sm" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Ingresa tu usuario"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu email"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>

                    {error && <div className="text-danger mb-3">{error}</div>}

                    <button
                        type="submit"
                        className="btn w-100"
                        style={{ backgroundColor: '#198754', color: 'white' }}
                    >
                        Registrarse
                    </button>
                </form>

                <div className="text-center mt-3">
                    ¿Ya tienes una cuenta? <Link to="/login" className="text-success">Inicia sesión</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
