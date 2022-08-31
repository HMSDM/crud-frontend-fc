import axios from "axios";


export async function login(login, password) {
    const config = {
        headers: {
            'x-apikey': '59a7ad19f5a9fa0808f11931',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'application/json'

        }
    };

    const body = { email: login.toLowerCase(), password: password };
    return await axios.post("http://localhost:3000/login",
        body,
        config).then((response) => {
            return response.data;
        });
}

export async function emailVerify(email) {
    const config = {
        headers: {
            'x-apikey': '59a7ad19f5a9fa0808f11931',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'application/json'

        }
    };

    const body = { email: email };
    return await axios.post("http://localhost:3000/emailVerify",
        body,
        config).then((response) => {
            return response.data;
        });
}

