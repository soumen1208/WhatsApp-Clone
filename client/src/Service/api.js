import axios from 'axios';

// const url = 'http://localhost:8000';
const url = '';
export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data)
    } catch (error) {
        console.log('error while addUser API' + error.message)
    }
}

export const getUsers = async () => {
    try {
        let response = await axios.get(`${url}/users`);
        return response.data
    } catch (error) {
        console.log('error while calling getUsers API' + error.message);
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log('error while calling setConversation API' + error.message);
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data)
        return response.data;
    } catch (error) {
        console.log('error while calling getConversation API' + error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data)
    } catch (error) {
        console.log('error while calling newMessage' + error.message);
    }
}

export const getMessage = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`)
        return response.data
    } catch (error) {
        console.log('error while calling getMessage api' + error.message);
    }
}

export const uploadFile = async (data) => {
    try {
        await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ' + error.message);
    }
}






