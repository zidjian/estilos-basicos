import { BrowserRouter, useRoutes } from "react-router-dom";
import Navegacion from "./Components/Navegación";
import Botones from "./Pages/Botones";
import Layout from "./Components/Layout";

function AppRutas() {
    const Rutas = useRoutes([
        {
            path: "/",
            element: <Botones />,
        },
    ]);

    return Rutas;
}

function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Navegacion />
                <AppRutas />
            </BrowserRouter>
        </Layout>
    );
}

export default App;
