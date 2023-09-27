import { useState } from "react";


function Expertos() {

    const [expanded, setExpandable] = useState(false);

    const toggleExpandable = () => {
        setExpandable(!expanded);
    };

    return (

        <div className='niveles-aprendizaje'>
            <h2 className='titulo-nivel'>Nivel Experto</h2>

            <button className='btn-expertos' onClick={toggleExpandable}>
                {expanded ? 'Ocultar contenido' : 'Mostrar contenido'}
            </button>
            {expanded && <div>

                <p>
                    Contenedor del material para alumnos expertos
                </p>

            </div>}
        </div>

    )

}

export default Expertos;