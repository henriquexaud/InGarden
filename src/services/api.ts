import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.0.170:3333', //psj
});

export default api;

// to active api: json-server ./src/services/server.json --host 192.168.1.21 --port 3333 --delay 500