import React, {useCallback, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { getServiceAllDetalhes, getServiceAllCardapio } from '../services/mesas.service';
import Produtos from '../components/cardapio/cardapio';
import Pedido from '../components/pedido/index';


const Detalhes =(props) => {
    const {id} = useParams();
    const {history} = props;
    const [detalhes, setDetalhes] = useState({});
    const [cardapio, setCardapio] = useState({});
    const [update, setUpdate] = useState(false)
    
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
    }, [id, history]);

    const getCardapio = useCallback(async () => {
        try {
            const res = await getServiceAllCardapio();
            setCardapio(res.data)
        } catch (error) {
            console.log(error);
        }
      }, []);


    useEffect(()=>{
        getDetalhes()
        getCardapio()
        setUpdate(false)
    }, [getDetalhes, getCardapio, update])

    
    const showDetalhes = detalhes =>(
        <div className="detalhes">
                <p><strong>Mesa: </strong>{`${detalhes.numero} - ${detalhes.ambiente}`}</p>
        </div>
    )
    
    return (
        <div>
           {showDetalhes(detalhes)} 
           <p><strong>Pedido:</strong></p>
            <Produtos cardapio={cardapio} idmesa={id} update={setUpdate} />
            <Pedido lista={detalhes.mesaCardapios} update={setUpdate} />     
        </div>
    )
}


export default Detalhes;