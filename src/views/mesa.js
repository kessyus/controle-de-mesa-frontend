import React, {useState, useEffect} from 'react'
import {getServiceAllMesas} from '../services/mesas.service'
import {Link} from 'react-router-dom'

const Mesas = () => {
    
    const [mesas, setMesa] = useState([]);

    useEffect(() => {
        const getMesas = async () => {
            const res = await getServiceAllMesas();
            setMesa(res.data)
        };
        getMesas();
    }, [])
    
    
    return (
    
            <div className = "mesas">
                <ul>
                    {mesas.map((item, i) => (
                    <li key={i}>
                        <Link to={`/mesa/${item.id}`}>
                            {`Mesa ${item.id} - ${item.ambiente}`}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
            
    )
};

export default Mesas;