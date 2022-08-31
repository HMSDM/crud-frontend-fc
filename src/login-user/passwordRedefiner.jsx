import React, { useState } from "react";
import "./styles.css";
import { emailVerify } from "./loginService"
import { Link } from 'react-router-dom';


function RedefinePassword() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        email: "invalid e-mail",
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        var { email } = document.forms[0];

        const userData = await emailVerify(email.value);
        console.log(userData);

        if (userData) {
            setIsSubmitted(true);
        }
        else setErrorMessages({ name: "email", message: errors.email });

    };


    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderPassword = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="email" placeholder="Insira seu e-mail" required />
                    {renderErrorMessage("email")}
                </div>

                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div >
    );


    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Redefine Password</div>
                {isSubmitted ? "E-mail enviado" : renderPassword}
                <div className="button-container">
                    <Link to="/">Retornar a página inicial</Link>
                </div>
            </div>

        </div>
    );
}

export default RedefinePassword