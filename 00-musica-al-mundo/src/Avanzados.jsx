import { useState } from "react";


function Avanzados() {

    const [expanded, setExpandable] = useState(false);

    const toggleExpandable = () => {
        setExpandable(!expanded);
    };

    return (

        <div className='niveles-aprendizaje'>
            <h2 className='titulo-nivel'>Nivel Avanzado</h2>

            <button className='btn-avanzados' onClick={toggleExpandable}>
                {expanded ? 'Ocultar contenido' : 'Mostrar contenido'}
            </button>
            {expanded && <div>

                <p>
                    Contenedor del material para alumnos avanzados
                </p>

            </div>}
        </div>

    )

}

export default Avanzados;