import http from '../config/http';

const getServiceAllMesas = () => http.get('/mesa');

const getServiceAllDetalhes = (id) => http.get(`/mesa/${id}`);

const getServiceAllCardapio = () => http.get('/cardapio');

const createServicePedido = (id, data) => http.post(`mesa/${id}/insert`, data);

const deleteServicePedido = (id) => http.delete(`mesa/delete/${id}`);

const createMesa = (data) => http.post('/mesa', data);

const changeMesaById = (id, data) => http.put(`/mesa/${id}`, data);

const deleteMesaById = (id) => http.delete(`/mesa/${id}`);

export {
  getServiceAllMesas,
  getServiceAllDetalhes,
  getServiceAllCardapio,
  createServicePedido,
  deleteServicePedido,
  createMesa,
  changeMesaById,
  deleteMesaById,
};
