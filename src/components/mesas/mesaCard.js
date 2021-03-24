import React from 'react'
import {Link} from 'react-router-dom'
import { Card, CardTitle, CardSubtitle,  CardBody, Button } from 'reactstrap';
import styled from 'styled-components'

const CardItem = ({item: {numero, ambiente, id} })=> {
    return (
    <SCard>
        <SCardBody>
            <CardTitle tag="h5">{`Mesa ${numero}`}</CardTitle>
            <SCardSubtitle tag="h6" className="mb-2 text-muted">{ambiente}</SCardSubtitle>
            <SButton size='sm' tag={Link} to={`/mesa/${id}`}>Pedido</SButton>
        </SCardBody>
    </SCard>
    )
}

export default CardItem;

const SCard = styled(Card)`
    height: 120px;
    width: 160px;
    margin: 10px;
`

const SCardBody = styled(CardBody)`
    display:flex;
    flex-direction: column;  
`

const SCardSubtitle = styled(CardSubtitle)`
    font-size: 12px;
`

const SButton = styled(Button)`
    background-color: #903749;
   
    
    

    :hover{
         background-color: #e84545;
        }
 `