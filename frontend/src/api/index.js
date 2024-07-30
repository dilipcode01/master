import axios from 'axios';

const api = (method, url, data) => {
    return axios({
        method: method, url: `http://localhost:8000${url}`, data, headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE,UPDATE",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
    })
        .then((res) => { return res; })
        .catch((err) => { throw err.response && err.response.data ? err.response.data.error : err; });
}

export const createTask = (data) => {
    return api('post', '/task', data)
        .then((res) => { return res })
        .catch((err) => { throw err; });
}

export const getTasks = (data) => {
    return api('get', '/task', data)
        .then((res) => { return res })
        .catch((err) => { throw err; });
}

export const updateTask = (data) => {
    return api('patch', `/task`, data)
        .then((res) => { return res })
        .catch((err) => { throw err; });
}

export const createSubtask = (data) => {
    return api('post', '/subtask', data)
        .then((res) => { return res })
        .catch((err) => { throw err; });
}

export const updateSubTask = (data) => {
    return api('patch', `/subtask`, data)
        .then((res) => { return res })
        .catch((err) => { throw err; });
}
