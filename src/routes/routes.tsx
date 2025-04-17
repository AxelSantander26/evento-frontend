import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import HomeComponent from "../pages/public/HomeComponent";
import AboutComponent from "../pages/public/AboutComponent";
import Services from "../pages/Services";
import FetchService from "../pages/FetchService";

// Componentes de auth
import Login from "../auth/Login";
import Register from "../auth/Register";
import AuthLayout from "../auth/AuthLayout";
import ErrorPage from "../pages/public/ErrorPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Ruta de error - Página no encontrada */}
            <Route path="*" element={<ErrorPage />} />

            {/* Layout Publico */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<HomeComponent />} />
                <Route path="about" element={<AboutComponent />} />
                <Route path="services" element={<Services />}>
                    <Route path="fetch" element={<FetchService />} />
                </Route>
            </Route>

            {/* Layout Auth */}
            <Route path="/login" element={<AuthLayout />}>
                <Route
                    index
                    element={<Login onLogin={(u, p) => console.log("Login:", u, p)} />}
                />
                <Route
                    path="register"
                    element={<Register onRegister={(u, e, p) => console.log("Register:", u, e, p)} />}
                />
            </Route>
            {/* Layout Cliente */}

            {/* Layout Admin */}
        </>
    )
);

export default router;
