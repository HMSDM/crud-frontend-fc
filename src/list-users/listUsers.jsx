import React, { useState, useEffect } from 'react';
import { listAllUsers } from "../list-users/listUsersService";
import { Link } from 'react-router-dom';
import { remove } from '../list-users/listUsersService';

function ListUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const userData = await listAllUsers();
            setUsers(userData);
        }
        fetchData();
    });

    function submitDelete(id, index) {

        const userData = remove(id);
        console.log(userData)
        users.splice(index, 1);
        setUsers(users);

    };


    const listItems =
        users?.map((user, index) =>
            <tr key={index}>
                <th scope="row">{index}</th>
                <td>
                    {user.name}
                </td>
                <td>
                    {user.login}
                </td>
                <td>
                    {user.password}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    {user.phone}
                </td>
                <td>
                    {user.cpf}
                </td>
                <td>
                    {user.birthday}
                </td>
                <td>
                    {user.motherName}
                </td>
                {/* <td>
                    {user.active}
                </td> */}

                <td>
                    <ul className="list-inline m-0">
                        <li className="list-inline-item">
                            <button onClick={() => submitDelete(user.id, index)} className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                        </li>
                    </ul>
                </td>

            </tr>

        );
    return (
        < section className="pb-5 header text-center" >
            <div className="container py-5 text-white">
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="card border-0 shadow">
                            <div className="card-body p-5">
                                <div className="table-responsive">
                                    <table className="table m-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Nome</th>
                                                <th scope="col">Login</th>
                                                <th scope="col">Senha</th>
                                                <th scope="col">E-mail</th>
                                                <th scope="col">Telefone</th>
                                                <th scope="col">CPF</th>
                                                <th scope="col">Data de Nascimento</th>
                                                <th scope="col">Nome da Mãe</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listItems}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <Link to="/">Retornar a página inicial</Link>
            </div>
        </section >

    );

}

export default ListUsers