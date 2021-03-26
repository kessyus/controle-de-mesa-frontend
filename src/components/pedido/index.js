import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import {deleteServicePedido} from '../../services/mesas.service'
import ReactSwal from '../../plugins/swal'
import { BiTrash } from 'react-icons/bi'
import styled from 'styled-components';

const Pedido = ({lista, update}) => {
  const [modal, setModal] = useState({
    isOpen: false,
    data: null
  })
    
    const apagarPedido = () => {
      if (modal.data) { 
      deleteServicePedido(modal.data.id)
          .then(() => {
            ReactSwal.fire({
              icon: 'success',
              title: `Produto excluído com sucesso!`,
              showConfirmButton: false,
              showCloseButton: false,
              timer: 2500,
  
          })
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
          <h3>Pedidos realizados:</h3>
          {lista && lista.length ? (
            <div>
              <STable responsive striped size='sm'>
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
                    <th><SButton color='link' onClick={() => toggleModal(v)}><BiTrash size="20" /></SButton></th>
                  </tr>
                ))}
              </tbody>
            </STable>

            <Modal isOpen={modal.isOpen} toggle={toggleModal}>
              <ModalHeader toggle={toggleModal}> Excluir Produto</ModalHeader>
              <ModalBody>
                Deseja Excluir o Produto {modal?.data?.id} ?
              </ModalBody>
              <ModalFooter>
                <SButton2 onClick={apagarPedido}>Sim</SButton2>
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

const STable = styled(Table)`
    overflow:hidden;
    border-radius: 4px;
    font-size:14\6px;
`

const SButton = styled(Button)`
  color: #903749;
`
const SButton2 = styled(Button)`
  background-color: #903749;
`