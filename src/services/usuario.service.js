import http from '../config/http';

const listUsers = () => http.get('/funcionario');
const createUsers = (data) => http.post('/funcionario', data);
const changeUsersById = (id, data) => http.put(`/funcionario/${id}`, data);
const deleteUsersById = (id) => http.delete(`/funcionario/${id}`);

export { listUsers, createUsers, changeUsersById, deleteUsersById };
