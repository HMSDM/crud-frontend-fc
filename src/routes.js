import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./login-user/login";
import RedefinePassword from "./login-user/passwordRedefiner";
import UserRegistration from "./registration-user/registration"
import ListUser from "./list-users/listUsers";

const RoutesAplication = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login></Login>} path="/" exact />
                <Route element={<RedefinePassword></RedefinePassword>} path="/passwordRedefiner" />
                <Route element={<UserRegistration></UserRegistration>} path="/registration" />
                <Route element={<ListUser></ListUser>} path="/list" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesAplication;