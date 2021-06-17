import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.100:3333' //casa
});

export default api;

// to active api: json-server ./src/services/server.json --host 192.168.1.100 --port 3333 --delay 800