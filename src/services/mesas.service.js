import http from '../config/http'

const getServiceAllMesas = () => http.get('/mesa');

const getServiseAllDetalhes = (id) => http.get (`/mesa/${id}`);

export{
    getServiceAllMesas,
    getServiseAllDetalhes
}