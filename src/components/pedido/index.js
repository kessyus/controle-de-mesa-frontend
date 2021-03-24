import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import {deleteServicePedido} from '../../services/mesas.service'

const Pedido = ({lista, update}) => {
  const [modal, setModal] = useState({
    isOpen: false,
    data: null
  })
    
    const apagarPedido = () => {
      if (modal.data) { 
      deleteServicePedido(modal.data.id)
          .then(() => {
            alert('Produto excluido');
            update(true);
            setModal({
              isOpen: !modal.isOpen
            })
          })
          .catch(erro => console.log(erro))     
        }
    }

      const toggleModal = (data = null) => {
        setModal({
          isOpen: !modal.isOpen,
          data
        })
      }
    
      return (
        <div>
          <h2>Pedidos realizados:</h2>
          {lista && lista.length ? (
            <div>
              <Table>
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
                    <th><Button onClick={() => toggleModal(v)}>Excluir</Button></th>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Modal isOpen={modal.isOpen} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}> Excluir Produto</ModalHeader>
              <ModalBody>
                Deseja Excluir o Produto {modal?.data?.id} ?
              </ModalBody>
              <ModalFooter>
                <Button onClick={apagarPedido}>Sim</Button>
                <Button onClick={toggleModal}>Não</Button>
              </ModalFooter>
            </Modal>
            </div>

            ) : (
              <div>Não existem pedidos para esta mesa.</div>
          )}
        </div>
      )
    }
    
export default Pedido