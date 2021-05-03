import http from '../config/http';

const listTopRequests = () => http.get('/relatorio');

export { listTopRequests };
