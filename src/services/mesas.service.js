import http from '../config/http'

const getServiceAllMesas = () => http.get('/mesa');

const getServiceAllDetalhes = (id) => http.get (`/mesa/${id}`);

export{
    getServiceAllMesas,
    getServiceAllDetalhes
}