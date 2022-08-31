import React, { useState } from "react";
import "./styles.css";
import { create } from "./registrationService"
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask'
import validator from 'validator'



function UserRegistration() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailError, setEmailError] = useState('')


    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Insira um e-mail válido')
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        var {
            name, login, password, email, phone, cpf, birthday,
            motherName//active
        } = document.forms[0];

        const userData = await create(name.value, login.value, password.value, email.value,
            phone.value, cpf.value, birthday.value, motherName.value//, active.value
        );
        console.log(userData);


        if (userData) {
            setIsSubmitted(true);
        }
        else setErrorMessages({});

    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderRegistration = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Nome </label>
                    <input type="text" name="name" placeholder="Insera seu nome" required />
                    {renderErrorMessage("name")}
                </div>
                <div className="input-container">
                    <label>Login </label>
                    <input type="text" name="login" placeholder="Insira seu login" required />
                </div>
                <div className="input-container">
                    <label>Senha </label>
                    <input type="password" name="password" placeholder="Insira sua senha" required />
                </div>
                <div className="input-container">
                    <label>E-mail </label>
                    <input type="text" id="userEmail" onChange={(e) => validateEmail(e)} name="email" placeholder="Insira seu e-mail" required />
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{emailError}</span>
                </div>
                <div className="input-container">
                    <label>Telefone </label>
                    <InputMask mask="(99) 99999-9999" type="tel" name="phone" placeholder="(__) _____-____" required />
                </div>
                <div className="input-container">
                    <label>CPF </label>
                    <InputMask mask="999.999.999-99" type="text" name="cpf" placeholder="___.___.___-__" required />
                </div>
                <div className="input-container">
                    <label>Data de Aniversário </label>
                    <input type="date" name="birthday" required />
                </div>
                <div className="input-container">
                    <label>Nome da Mãe </label>
                    <input type="text" name="motherName" placeholder="Insira o nome da sua mãe" required />
                </div>
                {/* <div className="input-container">
                    <label>Active </label>
                    <input type="boolean" name="active" required />
                </div> */}
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div >
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Cadastre-se</div>
                {isSubmitted ? "Usuário cadastrado" : renderRegistration}
                <div className="button-container">
                    <Link to="/">Retornar a página inicial</Link>
                </div>
            </div>
        </div>
    );

}

export default UserRegistration