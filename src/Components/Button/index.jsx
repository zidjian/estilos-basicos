import PropTypes from "prop-types";
import "./estilos.css";
import { ShoppingCart } from "@mui/icons-material";

function Button({ color, inicio_icono, fin_icono, deshabilitado, variante, sin_sombra, escala }) {
    Button.propTypes = {
        color: PropTypes.object.isRequired,
        inicio_icono: PropTypes.object.isRequired,
        fin_icono: PropTypes.object.isRequired,
        deshabilitado: PropTypes.object.isRequired,
        variante: PropTypes.object.isRequired,
        sin_sombra: PropTypes.object.isRequired,
        escala: PropTypes.object.isRequired,
    };

    function inicioIcono(icono) {
        switch (icono) {
            case "carrito":
                return <ShoppingCart className="icono" />;
        }
    }

    function finIcono(icono) {
        switch (icono) {
            case "carrito":
                return <ShoppingCart  className="icono" />;
        }
    }

    return (
        <button className={`btn ${color} ${variante} ${escala} ${deshabilitado && 'deshabilitado'} ${sin_sombra && 'sin_sombra'}`}>
            {inicio_icono && inicioIcono(inicio_icono)}
            Button
            {fin_icono && finIcono(fin_icono)}
        </button>
    );
}

export default Button;
