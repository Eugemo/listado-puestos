import axios from 'axios';
import { data } from 'jquery';

export const getData = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/jobs?_expand=organization")
        return res.data 
    } catch (err) {
        console.error(err)
    }
};

export const postData = async (data) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/jobs',
        data: data
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.error(err)
        
    }
};

export const deleteData = async (id) => {
    const configRequest = {
        method: 'delete',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/jobs',
        data: id
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.error(err)
        
    }
};

export const getPais = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/countries")
        return res.data 
    } catch (err) {
        console.error(err)
    }
};



export const getCiudadPais = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/places?_expand=countrie")
        return res.data 
    } catch (err) {
        console.error(err)
    }
};

export const getCiudad = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/places")
        return res.data 
    } catch (err) {
        console.error(err)
    }
};

export const postCiudad = async (data) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/places',
        data: data
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.error(err)
        
    }
};

export const postPais = async (countrie) => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/countries',
        data: {name: countrie}
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.error(err)
        
    }
}    