import React, {useState, useEffect, useCallback} from 'react'
import {getServiceAllMesas} from '../services/mesas.service'
import {Link} from 'react-router-dom'

const Mesas = () => {
    
    const [mesas, setMesa] = useState([]);
    const [hasError, setError] = useState(false)

    // useEffect(() => {
    //     const getMesas = async () => {
    //         const res = await getServiceAllMesas();
    //         setMesa(res.data)
    //     };
    //     getMesas();
    // }, [])
     const getMesas = useCallback (() => {
         getServiceAllMesas()
         .then(res => setMesa(res.data))
         .catch(err => setError(true))
     }, []);

     useEffect(() =>{
         getMesas()
     }, [getMesas])
    
    const mapDeMesas = (mesas) => mesas.map((item, i) => (
        <li key={i}>
            <Link to={`/mesa/${item.id}`}>
                {`Mesa ${item.id} - ${item.ambiente}`}
            </Link>
        </li>
        ))


    return (
    
            <div className="mesas">
                {
                    hasError
                    ? (<div>Aconteceu um erro, volte já!</div>)
                    : (
                        <ul>
                        {mapDeMesas(mesas)}
                        </ul>

                    )}
            </div>
            
    )
};

export default Mesas;