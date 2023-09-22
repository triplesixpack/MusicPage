import EscalasExpandible from './components/escalasExpandible';
import NotasExpandible from './components/notasExpandible';
import FigurasRitmicas from './components/figurasRitmicasExpandible';
import { useState } from 'react';

function Principiantes() {

    const [expanded, setExpanded] = useState(false);

    const toggleExpandable = () => {
        setExpanded(!expanded);
    };

    return(
        <div className="principiantes">
            <h2 className='principiantes-titulo'>Nivel Principiante</h2>

            <button className='btn-principiantes' onClick={toggleExpandable}>
                {expanded ? 'Ocultar Contenido' : 'Mostrar Contenido'}
            </button>
            {expanded && <div>
                <FigurasRitmicas/>
                <NotasExpandible/>
                <EscalasExpandible/>
            </div>}
        </div>

    )
}

export default Principiantes;