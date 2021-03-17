import React, {useCallback, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { getServiceAllDetalhes } from '../services/mesas.service';
import Pedido from '../components/cardapio/index'

const Detalhes =(props) => {
    const {id} = useParams();
    const {history} = props;
    const [detalhes, setDetalhes] = useState({});
    
    // useEffect (() => {
    //     const getDetalhes = async () =>{
    //         const res = await getServiceAllDetalhes(id);
    //         setDetalhes(res.data)
    //     };
    //     getDetalhes();
    // }, [id])

    const getDetalhes = useCallback( async() =>{
        try{
            const res = await getServiceAllDetalhes(id);
            setDetalhes(res.data)
        } catch (error){
            console.log(error)
            history.push('/')
        }
    }, [id]);

    useEffect(()=>{
        getDetalhes()
    }, [getDetalhes])

    
    const showDetalhes = detalhes =>(
        <div className="detalhes">
                <p><strong>Mesa: </strong>{`${detalhes.id} - ${detalhes.ambiente}`}</p>
            </div>
    )
    
    return (
        <div>
           <h3>Consumo detalhado</h3>
           {showDetalhes(detalhes)} 
           <Pedido />
        </div>
    )
}


export default Detalhes;