import { useState } from "react";


function Intermedios() {

    const [expanded, setExpandable] = useState(false);

    const toggleExpandable = () => {
        setExpandable(!expanded);
    };

    return (

        <div className='niveles-aprendizaje'>
            <h2 className='titulo-nivel'>Nivel Intermedio</h2>

            <button className='btn-intermedios' onClick={toggleExpandable}>
                {expanded ? 'Ocultar contenido' : 'Mostrar contenido'}
            </button>
            {expanded && <div>

                <p>
                    Contenedor del material para alumnos de nivel intermedio
                </p>

            </div>}
        </div>

    )

}

export default Intermedios;