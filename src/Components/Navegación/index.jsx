import "./estilos.css";

function Navegacion() {
    return (
        <nav className="navegacion">
            <ul className="navegacion-lista">
                <li className="navegacion-elemento">
                    <a className="navegacion-enlace" href="">Colores</a>
                </li>
                <li className="navegacion-elemento">
                    <a className="navegacion-enlace" href="">Tipografia</a>
                </li>
                <li className="navegacion-elemento">
                    <a className="navegacion-enlace" href="">Espacios</a>
                </li>
                <li className="navegacion-elemento">
                    <a className="navegacion-enlace" href="">Botones</a>
                </li>
                <li className="navegacion-elemento">
                    <a className="navegacion-enlace" href="">Campos</a>
                </li>
                <li className="navegacion-elemento">
                    <a className="navegacion-enlace" href="">Grid</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navegacion;
