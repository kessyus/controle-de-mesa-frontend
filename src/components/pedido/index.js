import {deleteServicePedido} from '../../services/mesas.service'

const Pedido = ({lista, update}) => {
    
    const apagarPedido = (idPedido) => {
        deleteServicePedido(idPedido)
          .then(() => {
            alert('Produto excluido');
            update(true);
          })
          .catch(erro => console.log(erro))
      }
    
      return (
        <div>
          <h2>Pedidos realizados:</h2>
          {lista && lista.length ? (
            <table>
              <thead> 
                <tr>
                  <th>ID&nbsp;</th>
                  <th>Produto</th>
                  <th>Preço&nbsp;&nbsp;</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {lista && lista.map((v, i) => (
                  <tr key={i}>
                    <th>{v.id}&nbsp;&nbsp;</th>
                    <th>{v.cardapio.produto}&nbsp;&nbsp;</th>
                    <th>{v.cardapio.preco}</th>
                    <th><button onClick={() => apagarPedido(v.id)} >Excluir</button></th>
                  </tr>
                ))}
              </tbody>
            </table>
            ) : (
              <div>Não existem pedidos para esta mesa.</div>
          )}
        </div>
      )
    }
    
export default Pedido