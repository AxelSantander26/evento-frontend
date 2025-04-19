import { FC } from "react";

const PaginaRelleno: FC = () => {
    return (
        <section style={{ minHeight: "100vh", padding: "4rem", background: "#f8f9fa" }}>
            <div className="container">
                <h2 className="text-center mb-4">Página de Relleno</h2>
                <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.7" }}>
                    Esta página sirve como contenido de prueba para verificar el comportamiento del diseño, la navegación,
                    y otros elementos visuales de tu aplicación.
                </p>
                <div style={{ marginTop: "3rem" }}>
                    {[...Array(15)].map((_, i) => (
                        <p key={i}>
                            ({i + 1}) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
                            Praesent libero. Sed cursus ante dapibus diam.
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PaginaRelleno;
