import { FC } from "react";
import errorImage from "../../assets/necoArcError.svg";

const ErrorPage: FC = () => {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{ height: "100vh" }}
        >
            <div className="text-center mb-4">
                <img
                    src={errorImage}
                    alt="Logo"
                    style={{ width: '200px', height: 'auto' }}
                />
            </div>
            <h2 className="mb-3">¡Vaya! Página no encontrada.</h2>
            <p className="mb-4" style={{ maxWidth: "400px" }}>
                La página que buscas no existe. Es posible que haya sido eliminada o que hayas escrito mal la dirección.
            </p>
            <button
                onClick={() => (window.location.href = "/")}
                className="btn btn-outline-primary"
            >
                Volver al inicio
            </button>
        </div>
    );
};

export default ErrorPage;
