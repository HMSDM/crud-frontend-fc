import axios from "axios";


export async function login(email, password) {
    const config = {
        headers: {
            'x-apikey': '59a7ad19f5a9fa0808f11931',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'application/json'

        }
    };

    const body = { email: email, password: password };
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

export async function listAllUsers() {
    const config = {
        headers: {
            'x-apikey': '59a7ad19f5a9fa0808f11931',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'application/json'

        }
    };


    return await axios.get("http://localhost:3000/listAllUsers",
        config).then((response) => {
            return response.data;
        });
}

export async function remove(id) {
    const config = {
        headers: {
            'x-apikey': '59a7ad19f5a9fa0808f11931',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'application/json'

        }
    };

    const body = { id: id };
    return await axios.delete("http://localhost:3000/delete",
        body,
        config).then((response) => {
            return response.data;
        });
}