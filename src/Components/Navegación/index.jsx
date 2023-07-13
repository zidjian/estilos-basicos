import { NavLink } from "react-router-dom";
import "./estilos.css";

function Navegacion() {
    return (
        <nav className="navegacion">
            <ul className="navegacion-lista">
                <li className="navegacion-elemento">
                    <NavLink className="navegacion-enlace" to="/colores">
                        Colores
                    </NavLink>
                </li>
                <li className="navegacion-elemento">
                    <NavLink className="navegacion-enlace" to="/tipografia">
                        Tipografia
                    </NavLink>
                </li>
                <li className="navegacion-elemento">
                    <NavLink className="navegacion-enlace" to="/espacios">
                        Espacios
                    </NavLink>
                </li>
                <li className="navegacion-elemento">
                    <NavLink className="navegacion-enlace" to="/">
                        Botones
                    </NavLink>
                </li>
                <li className="navegacion-elemento">
                    <NavLink className="navegacion-enlace" to="/campos">
                        Campos
                    </NavLink>
                </li>
                <li className="navegacion-elemento">
                    <NavLink className="navegacion-enlace" to="/grid">
                        Grid
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navegacion;
