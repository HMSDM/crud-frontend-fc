import React, { useState } from "react";
import "./styles.css";
import { login } from "./loginService"
import { Link } from 'react-router-dom';

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "invalid username",
        pass: "e-mail e/ou senha inválidos"
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        const userData = await login(uname.value, pass.value);
        console.log(userData);

        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Usuário </label>
                    <input type="text" name="uname" placeholder="Insira seu usuário" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Senha </label>
                    <input type="password" name="pass" placeholder="Insira sua senha" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
                <nav>
                    <div className="button-container">
                        <Link to="/passwordRedefiner">Recuperar Senha</Link>
                    </div>
                </nav>
                <nav>
                    <div className="button-container">
                        <Link to="/registration">Cadastrar-se</Link>
                    </div>
                </nav>

            </form>
        </div >
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? window.location.href = 'http://localhost:3001/list' : renderForm}
            </div>
        </div>
    );
}

export default Login;