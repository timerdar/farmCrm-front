import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm';

export function api(){

    const config = {
        baseURL: 'http://localhost:8080',
        timeout: 7000,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return axios.create(config);
};