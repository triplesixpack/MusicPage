import React, { useState } from "react";

function FigurasRitmicas() {

    const [expanded, setExpanded] = useState(false);

    const toggleExpandable = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='fig-container'>
            <h3 className='fig-titulo'>Figuras Rítmicas</h3>
            <button className='btn-figurasRythm' onClick={toggleExpandable}>
                {expanded ? 'Ocultar Cuadro' : 'Mostrar Cuadro'}
            </button>
            {expanded && <img className='img-figRitmicas' src="public/Equivalencias_nota_silencio.jpg" alt="Figuras Rítmicas" />}   
        </div>
    )

}
export default FigurasRitmicas;