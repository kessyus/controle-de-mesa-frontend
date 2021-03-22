import React, {useState, } from 'react'
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
        <div id="pedido">
            {cardapio && cardapio.length ? (
                <div>
                    <select name="idcardapio" value= {produtos.idcardapio || " "} onChange={handleChange}>
                        {cardapio && cardapio.map((v, i) => (
                            <option key={i} value={v.id}> {v.produto} </option>
                        ))}
                    </select>
                    <br />
                    <button onClick={fazerPedido}> Incluir Produto </button>
                </div>
            ) : (
                <div> Abrindo o cardápio...</div>
            )}

        </div>
    )
};
export default Produtos;


