import http from '../config/http';

const getServiceAllMesas = () => http.get('/mesa');

const getServiceAllDetalhes = (id) => http.get(`/mesa/${id}`);

const getServiceAllCardapio = () => http.get('/cardapio');

const createServicePedido = (id, data) => http.post(`mesa/${id}/insert`, data);

const deleteServicePedido = (id) => http.delete(`mesa/delete/${id}`);

export {
  getServiceAllMesas,
  getServiceAllDetalhes,
  getServiceAllCardapio,
  createServicePedido,
  deleteServicePedido,
};
