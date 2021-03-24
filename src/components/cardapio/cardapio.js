import React, {useState, } from 'react'
import {Button, Form, FormGroup, Input, Label, Col} from 'reactstrap';
import { createServicePedido, } from "../../services/mesas.service";

const Produtos = ({cardapio, idmesa, update}) => {
    
    const [produtos, setProdutos] = useState({});
   
    const handleChange = (e) => {
        setProdutos({
          ...produtos,
          [e.target.name]: e.target.value
        })
      }    

const fazerPedido = () =>{
    createServicePedido(idmesa, produtos)
    .then(()=>{
        alert('Produto adcionado');
        setProdutos({});
        update(true);

 
    })
    .catch(erro => console.log(erro));
}
       
    return (
        
        <Form>
            <Col xs="12" sm="12" md="8" lg="8">
            <p><strong>Incluir Produto:</strong></p>
            {cardapio && cardapio.length ? (
            <FormGroup>
                <Label for="select" >Selecionar:</Label>
                <Input type="select" name="idcardapio" value= {produtos.idcardapio || " "} onChange={handleChange}>
                {cardapio && cardapio.map((v, i) => (
                     <option key={i} value={v.id}> {v.produto} </option>
                    ))}
                </Input>
                <br/>
                <Button onClick={fazerPedido}> Incluir Pedido </Button>      
            </FormGroup>
            ) : (
                <div>Abrindo o cardápio...</div>
            )}
            </Col>
        </Form>
    
    );
  }        
export default Produtos;


