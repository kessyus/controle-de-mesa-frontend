import React, {useCallback, useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { getServiceAllDetalhes, getServiceAllCardapio } from '../services/mesas.service';
import Produtos from '../components/cardapio/cardapio';
import Pedido from '../components/pedido/index';
import { Button, Jumbotron, Navbar } from 'reactstrap';
import {GiKnifeFork} from 'react-icons/gi'
import {BsCardChecklist} from 'react-icons/bs'
import styled from 'styled-components';

const Detalhes =(props) => {
    const {id} = useParams();
    const {history} = props;
    const [detalhes, setDetalhes] = useState({});
    const [cardapio, setCardapio] = useState({});
    const [update, setUpdate] = useState(false);
    const [isPed, setPed] = useState(false)
    
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
        <SJumbotron>
            <div className="lead"> <strong>Mesa {`${detalhes.numero}`} </strong></div>
                <p>{`${detalhes.ambiente}`}</p>   
        </SJumbotron>
         
    )

    const Menu = () => (
        <SNavbar expand="md mb-4">
            <div className="info">
                {isPed ? "Consumo Detalhado" : "Fazer Pedido"}
            </div>
            <div>
                <Button onClick={() => setPed(!isPed)} color={!isPed ? "primary" : "secondary"} size="sm">
                    {isPed ? (<> <GiKnifeFork /> Incluir Produto</>) : (<><BsCardChecklist /> Consumo Detalhado</>) }
                </Button>
            </div>
        </SNavbar>
    )
    
    const mudarTela = (detalhes) => (
        <div>
            {showDetalhes(detalhes)}
            {Menu()}
            {
                isPed
                    ?(<Pedido lista={detalhes.mesaCardapios} update={setUpdate} /> )
                    :(<Produtos cardapio={cardapio} idmesa={id} update={setUpdate} />)
            }
        </div>
    )
    
    return (
           
        mudarTela(detalhes)
    )
}


export default Detalhes;

const SJumbotron = styled(Jumbotron)`
    height: 10vh;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    background-color: rgb(43, 46, 74, 0.6);
    border-radius: 0px;
    color: #53354A;
    
`

const SNavbar = styled(Navbar)`
    background-color:none !important;
    margin: 10px 0 20px;
    padding: 10px 0;
    border-bottom: thin dotted #4446;
    display:flex;
    
    .info {
        flex:1;
        font-weight: bold;
        }
`