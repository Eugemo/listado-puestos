import axios from 'axios';

export const getData = async () => {
    try {
        const res = await axios.get("https://api-fake-pilar-tecno.herokuapp.com/jobs")
        return res.data 
    } catch (err) {
        console.error(err)
    }
};

export const postData = async () => {
    const configRequest = {
        method: 'post',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/jobs',
        data: {
            puesto: "puesto con postData",
            empresa: "empresa postData",
            ciudad: 1,
            pais: 1
        }
    }
    try {
        const res = await axios(configRequest)
        return res.data
    } catch (err) {
        console.error(err)
    }
};

