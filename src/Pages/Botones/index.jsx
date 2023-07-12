import { styled } from "styled-components";
import "./estilos.css";

const Button = styled.button`
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 2px 3px 0px rgba(51, 51, 51, 0.2);
    background-color: #e0e0e0;
    color: #3f3f3f;
    cursor: pointer;
    ${({ sin_sombra }) => sin_sombra && "box-shadow: none"};
    ${({ variant }) => {
        switch (variant) {
            case "outline":
                return `border: 1px solid #3D5AFE;
                    color: #3D5AFE;
                    background-color: white;
                    `;
            case "text":
                return `
                    background-color: white !important;
                    color: #3D5AFE;
                    `;
        }
    }};
    ${({ color }) => {
        switch (color) {
            case "primary":
                return `
                    background-color: #3D5AFE;
                    color: white;
                    `;
        }
    }};
    ${({ deshabilitado }) =>
        deshabilitado && "background-color: #E0E0E0; color: #9E9E9E; cursor: not-allowed;"};
    &:hover,
    &:active {
        background-color: #aeaeae;
        ${({ sin_sombra }) => sin_sombra && "box-shadow: none"};
        ${({ variant }) => {
            switch (variant) {
                case "outline":
                    return `background-color: rgba(41, 98, 255, 0.10);`;
                case "text":
                    return `background-color: rgba(41, 98, 255, 0.10) !important;`;
            }
        }};
        ${({ color }) => {
            switch (color) {
                case "primary":
                    return `
                    background-color: #3D5AFE;
                    color: white;
                    `;
            }
        }};
        ${({ deshabilitado }) =>
            deshabilitado && "background-color: #E0E0E0; color: #9E9E9E;"};
    }
`;

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
                        <span>{"<Boton variant='outline' />"}</span>
                        <Button variant="outline">Default</Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"&:hover, &:active"}</span>
                        <Button variant="outline">Default</Button>
                    </div>
                </div>
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton variant='text'/>"}</span>
                        <Button variant="text">Default</Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"&:hover, &:active"}</span>
                        <Button variant="text">Default</Button>
                    </div>
                </div>
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton sin-sombra />"}</span>
                        <Button sin-sombra color="primary">
                            Default
                        </Button>
                    </div>
                </div>
                <div className="grupo-elementos">
                    <div className="grupo-boton">
                        <span>{"<Boton deshabilitado />"}</span>
                        <Button deshabilitado>
                            Default
                        </Button>
                    </div>
                    <div className="grupo-boton">
                        <span>{"<Boton deshabilitado variant='text' />"}</span>
                        <Button deshabilitado variant="text">
                            Default
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Botones;
