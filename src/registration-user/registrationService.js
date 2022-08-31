import axios from "axios";

export async function create(name, login, password,
    email, phone, cpf, birthday, motherName//, active
) {
    const config = {
        headers: {
            'x-apikey': '59a7ad19f5a9fa0808f11931',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'application/json'

        }
    };

    const body = {
        name: name.toLowerCase(), login: login.toLowerCase(), password: password, email: email.toLowerCase(),
        phone: phone, cpf: cpf, birthday: birthday,
        motherName: motherName.toLowerCase()//, active: active
    };
    console.log(body)
    return await axios.post("http://localhost:3000/create",
        body,
        config).then((response) => {
            return response.data;
        });
}

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