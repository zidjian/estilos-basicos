import PropTypes from "prop-types";
import "./estilos.css";

function Layout({children}) {
    Layout.propTypes = {
        children: PropTypes.object.isRequired,
    };
    return <div className="principal">{children}</div>;
}

export default Layout;
