import { Button } from "@mui/material";
import "./estilos.css";
import { styled } from "@mui/material/styles";

const Boton = styled(Button)`
box-shadow: ${({ sin_sombra }) => sin_sombra && "none"};
    color: ${({ rojo }) => rojo && "red"};
    &:hover,
    &:active {
        box-shadow: ${({ sin_sombra }) => sin_sombra && "none"};
    }
`;

function Botones() {
    return (
        <main>
            <h1>Botones</h1>
            <div className="grupo">
                <div className="grupo-botones">
                    <Boton sin_sombra variant="contained">
                        Contained
                    </Boton>
                    <Boton rojo variant="contained">
                        Normal
                    </Boton>
                </div>
            </div>
        </main>
    );
}

export default Botones;
