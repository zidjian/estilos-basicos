import "./estilos.css";
import Button from "../../Components/Button";

// const Button = styled.button`
//     padding: 8px 16px;
//     border: none;
//     border-radius: 8px;
//     box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.2);
//     background-color: #e0e0e0;
//     color: #3f3f3f;
//     cursor: pointer;
//     ${({ sin_sombra }) => sin_sombra && "box-shadow: none"};
//     ${({ deshabilitado }) =>
//         deshabilitado &&
//         "background-color: #E0E0E0; color: #9E9E9E !important; cursor: not-allowed;"};
//     ${({ variante }) => {
//         switch (variante) {
//             case "lineas":
//                 return `border: 1px solid #3D5AFE;
//                     color: #3D5AFE;
//                     background-color: white;
//                     `;
//             case "texto":
//                 return `
//                     background-color: white;
//                     color: #3D5AFE;
//                     `;
//         }
//     }};
//     ${({ color }) => {
//         switch (color) {
//             case "primario":
//                 return `
//                     background-color: #3D5AFE;
//                     color: white;
//                     `;
//         }
//     }};
//     &:before {
//         content: ${ShoppingCart};
//     }

//     &:hover,
//     &:active {
//         ${({ sin_sombra }) => sin_sombra && "box-shadow: none"};
//         ${({ variante }) => {
//             switch (variante) {
//                 case "lineas":
//                     return `background-color: rgba(41, 98, 255, 0.10);`;
//                 case "texto":
//                     return `background-color: rgba(41, 98, 255, 0.10);`;
//                 default:
//                     return `background-color: #aeaeae;`;
//             }
//         }};
//         ${({ color }) => {
//             switch (color) {
//                 case "primario":
//                     return `
//                     background-color: #3D5AFE;
//                     color: white;
//                     `;
//             }
//         }};
//         ${({ deshabilitado }) =>
//             deshabilitado && "background-color: #E0E0E0; color: #9E9E9E;"};
//     }
// `;

function Botones() {
    return (
        <main>
            <h1>Botones</h1>
            <div className="grupo">
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton />"}</span>
                        <Button>Default</Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"&:hover, &:active"}</span>
                        <Button>Default</Button>
                    </div>
                </div>
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton variante='lineas' />"}</span>
                        <Button sin_sombra="true" variante="lineas">
                            Default
                        </Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"&:hover, &:active"}</span>
                        <Button sin_sombra="true" variante="lineas">
                            Default
                        </Button>
                    </div>
                </div>
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton variante='texto'/>"}</span>
                        <Button sin_sombra="true" variante="texto">
                            Default
                        </Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"&:hover, &:active"}</span>
                        <Button sin_sombra="true" variante="texto">
                            Default
                        </Button>
                    </div>
                </div>
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton sin-sombra />"}</span>
                        <Button sin_sombra="true" color="primario">
                            Default
                        </Button>
                    </div>
                </div>
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton deshabilitado />"}</span>
                        <Button sin_sombra="true" deshabilitado>
                            Default
                        </Button>
                    </div>
                    <div className="grupo-boton">
                        <span>
                            {"<Boton deshabilitado variante='texto' />"}
                        </span>
                        <Button
                            sin_sombra="true"
                            deshabilitado
                            variante="texto"
                        >
                            Default
                        </Button>
                    </div>
                </div>
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton inicioIcono='carrito' />"}</span>
                        <Button
                            color="primario"
                            sin_sombra="true"
                            inicio_icono={"carrito"}
                        >
                            Default
                        </Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"<Boton finIcono='carrito' />"}</span>
                        <Button
                            color="primario"
                            sin_sombra="true"
                            fin_icono={"carrito"}
                        >
                            Default
                        </Button>
                    </div>
                </div>
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton escala='sm' />"}</span>
                        <Button color="primario" escala="sm">Default</Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"<Boton escala='md' />"}</span>
                        <Button color="primario" escala="md">Default</Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"<Boton escala='lg' />"}</span>
                        <Button color="primario" escala="lg">Default</Button>
                    </div>
                </div>
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton color='predeterminado' />"}</span>
                        <Button color="predeterminado">Default</Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"<Boton color='primario' />"}</span>
                        <Button color="primario">Default</Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"<Boton color='secundario' />"}</span>
                        <Button color="secundario">Default</Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"<Boton color='peligro' />"}</span>
                        <Button color="peligro">Default</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Botones;
