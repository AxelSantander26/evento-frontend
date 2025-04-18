import { FC } from "react";

const HomeComponent: FC = () => {
    return (
        <>
            {/* banner luego lo cambio  */}
            <section id="inicio" style={{ overflow: "hidden" }}>
                <img
                    src="https://picsum.photos/1920/700?random=1"
                    alt="Banner de evento"
                    className="w-100"
                    style={{
                        objectFit: "cover",
                        height: "auto",
                        display: "block",
                        maxHeight: "700px",
                    }}
                />
            </section>

            {/* Locales */}
            <section
                id="locales"
                className="py-5 d-flex align-items-center"
                style={{ minHeight: "600px", backgroundColor: "#f8f9fa" }}
            >
                <div className="container">
                    <h2 className="mb-4 text-center" style={{ color: "#343a40" }}>
                        Nuestros Locales
                    </h2>
                    <div className="row g-4">
                        {["Miraflores", "San Isidro", "La Molina"].map((local, i) => (
                            <div className="col-md-4" key={local}>
                                <div className="card h-100 shadow-lg border-0 rounded-3">
                                    <img
                                        src={`https://picsum.photos/400/250?random=${i + 2}`}
                                        className="card-img-top rounded-3"
                                        alt={`Local en ${local}`}
                                        style={{ objectFit: "cover", height: "250px" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "#343a40" }}>
                                            {local}
                                        </h5>
                                        <p className="card-text">
                                            Espacio moderno y versátil para eventos sociales y corporativos. Capacidad hasta 200 personas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Precios */}
            <section
                id="precios"
                className="py-5 d-flex align-items-center"
                style={{ minHeight: "600px", backgroundColor: "#f1f3f5" }}
            >
                <div className="container">
                    <h2 className="mb-4 text-center" style={{ color: "#343a40" }}>
                        Planes de Evento
                    </h2>
                    <div className="row justify-content-center g-4">
                        {[
                            {
                                plan: "Estándar",
                                price: 800,
                                features: ["Hasta 80 personas", "Mobiliario básico", "4 horas de uso"],
                                bgColor: "#e9ecef",
                            },
                            {
                                plan: "Premium",
                                price: 1200,
                                features: ["Hasta 150 personas", "Decoración incluida", "6 horas de uso", "Sonido profesional"],
                                bgColor: "#dbe2e6",
                            },
                            {
                                plan: "VIP",
                                price: 1800,
                                features: ["Hasta 200 personas", "Catering y DJ", "8 horas de uso", "Servicio personalizado"],
                                bgColor: "#c8d6e5",
                            },
                        ].map((pkg) => (
                            <div className="col-md-4" key={pkg.plan}>
                                <div className="card h-100 shadow-lg rounded-3" style={{ backgroundColor: pkg.bgColor }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center" style={{ color: "#495057" }}>
                                            {pkg.plan}
                                        </h5>
                                        <h6 className="text-center text-primary display-6">${pkg.price}</h6>
                                        <ul className="list-unstyled mt-3" style={{ fontSize: "1rem", color: "#495057" }}>
                                            {pkg.features.map((f, i) => (
                                                <li key={i} className="mb-2">
                                                    ✔️ {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* nosotros */}
            <section id="nosotros" className="py-5" style={{ minHeight: "600px" }}>
                <div className="container">
                    <h2 className="mb-4 text-center" style={{ color: "#343a40" }}>
                        Sobre Nosotros
                    </h2>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="https://picsum.photos/600/400?random=5"
                                className="img-fluid rounded shadow"
                                alt="Nosotros"
                            />
                        </div>
                        <div className="col-md-6">
                            <p style={{ fontSize: "1.2rem", color: "#495057" }}>
                                En VirellaRent contamos con más de 10 años brindando espacios para eventos inolvidables. Nuestro equipo se enfoca en ofrecer un servicio personalizado que se ajusta a tus necesidades.
                            </p>
                            <p style={{ fontSize: "1.2rem", color: "#495057" }}>
                                Nos apasiona ayudarte a crear momentos únicos. Desde celebraciones íntimas hasta grandes eventos corporativos, tenemos el lugar ideal para ti.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeComponent;
