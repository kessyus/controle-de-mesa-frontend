import http from '../config/http';

const changeItemCardapio = (id, data) => http.put(`/cardapio/${id}`, data);
const createItemCardapio = (data) => http.post('/cardapio', data);
const deleteItemCardapio = (id) => http.delete(`/cardapio/${id}`);

export { changeItemCardapio, createItemCardapio, deleteItemCardapio };
