import EscalasExpandible from './components/escalasExpandible';
import NotasExpandible from './components/notasExpandible';
import FigurasRitmicas from './components/figurasRitmicasExpandible';
import { useState } from 'react';

function Principiantes() {

    const [expanded, setExpanded] = useState(false);

    const toggleExpandable = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="niveles-aprendizaje">
            <h2 className='titulo-nivel'>Nivel Principiante</h2>

            <button className='btn-principiantes' onClick={toggleExpandable}>
                {expanded ? 'Ocultar Contenido' : 'Mostrar Contenido'}
            </button>
            {expanded && <div>
                <h4>PULSO Y MÉTRICA</h4>
                <p>
                    'Un pulso regular (tiempo) (beat) es fundamental en la música. Este establece la velocidad
                    (cuan rápida o lenta) es ejecutada la música. <br />
                    El pulso es usualmente dividido en grupos de tiempos. Cada grupo de tiempos es denominado compás (bar). <br />
                    En el pentagrama musical, las barras (bar lines) separan los compases.
                    Al final de la composición se coloca una barra de final.'
                </p>
                <br />
                <h4>EL PENTAGRAMA</h4>
                <p>
                    El pentagrama (staff) es el sitio donde se escribe la notación musical. Incluye cinco líneas
                    paralelas y cuatro espacios entre ellas. <br />
                    Las líneas y espacios del pentagrama son nombrados
                    por números, los cuales se cuentan de abajo hacia arriba. <br />
                    El pentagrama de percusión aparece al comienzo del pentagrama y es usualmente escrito para notación rítmica.
                    <br /><br />
                    Cuando los tiempos están agrupados en compases se ubica en cada uno de ellos la métrica del
                    compás. <br />
                    La métrica del compás tiene dos números, uno sobre el otro y aparece al comienzo del primer compás del tema. <br />
                    El número superior indica la cantidad de figuras y el número inferior de que figura se trata
                </p>
                <FigurasRitmicas />
                <NotasExpandible />
                <EscalasExpandible />
            </div>}
        </div>

    )
}

export default Principiantes;