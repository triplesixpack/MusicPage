import React, { useState } from 'react';
import { notasMusicales } from '../constants/NotasMusicales';

function NotasExpandible() {
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
        { notasMusicales }
    ]

    return (
        <div>
            <h3 className='notas-titulo'>Notas existentes</h3>
        <button className='btn-notas' onClick={toggleExpandable}>
            {expanded ? 'Ocultar Notas' : 'Mostrar Notas'}
        </button>

        {expanded && (
            <ul>
                {notasMusicales.map((nota, index) => (
                    <li key={index}>
                        <button
                            className='btn-notas'
                            onClick={() => toggleExpandables(index)}
                        >
                            {nota.nombre}
                        </button>
                        {expandedIndex === index && (
                            <div className='notas'>
                                <ul>
                                    {nota.notas.map((notas, i) => (
                                        <li key={i}>{notas}</li>
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

export default NotasExpandible;