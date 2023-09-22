import React, { useState } from 'react';
import { escalasMusicales } from '../constants/TiposEscalas';

function EscalasExpandible() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpandable = () => {
        setExpanded(!expanded);
    };

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpandables = (index) => {
        if (index === expandedIndex) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    const escalas = [
        { escalasMusicales }
    ]

    return (
        <div>
            <h3 className='scale-titulo'>Tipos de escalas</h3>
        <button className='btn-escalas' onClick={toggleExpandable}>
            {expanded ? 'Ocultar Escalas' : 'Mostrar Escalas'}
        </button>

        {expanded && (
            <ul>
                {escalasMusicales.map((escala, index) => (
                    <li key={index}>
                        <button
                            className='btn-escalas'
                            onClick={() => toggleExpandables(index)}
                        >
                            {escala.nombre}
                        </button>
                        {expandedIndex === index && (
                            <div className='escalas-intervalos'>
                                <ul>
                                    {escala.intervalos.map((intervalo, i) => (
                                        <li key={i}>{intervalo}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
}

export default EscalasExpandible;