import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { getServiseAllDetalhes } from '../services/mesas.service';

const Detalhes =() => {
    const {id} = useParams();
    const [detalhes, setDetalhes] = useState({});
    
    useEffect (() => {
        const getDetalhes = async () =>{
            const res = await getServiseAllDetalhes();
            setDetalhes(res.data)
        };
        getDetalhes();
    }, [id])

    return (
        <div>
            <h3> Consumo </h3>
            <div className="detalhes">
            <p> <strong>Mesa: </strong>{detalhes.ambiente}</p>
                {/* <p><strong>Mesa: </strong>{`${detalhes.id} - ${detalhes.ambiente}`}</p> */}
            </div>
            
        </div>
    )
}

export default Detalhes;