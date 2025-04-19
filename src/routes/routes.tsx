import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import HomeComponent from "../pages/public/HomeComponent";
import Services from "../pages/Services";
import FetchService from "../pages/FetchService";

// Componentes de auth
import Login from "../auth/Login";
import Register from "../auth/Register";
import AuthLayout from "../auth/AuthLayout";
import ErrorPage from "../pages/public/ErrorPage";
import ClientLayout from "../layouts/ClientLayout";
import AdminLayout from "../layouts/AdminLayout";
import PaginaRelleno from "../pages/public/PaginaRelleno";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Ruta de error - Página no encontrada */}
            <Route path="*" element={<ErrorPage />} />

            {/* Layout Publico */}
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<HomeComponent />} />
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
            <Route path="/cliente" element={<ClientLayout />}>
                <Route index element={<PaginaRelleno />} />
            </Route>

            {/* Layout Admin */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<PaginaRelleno />} />
            </Route>
        </>
    ),
    {
        basename: "/evento-frontend",
    }
);

export default router;
