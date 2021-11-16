import React from 'react';
import '../assets/css/Login.css';
import vector from "../assets/img/vector.svg";

class Login extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
        <section>
            <div className="container justify-content-center align-items-center mt-5 mb-5">
                <div className="login-container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-sm-6 col-lg-5 mt-4 mb-4">
                            <div className=" container_left ">
                                <h5>Entra con su cuenta de administrador</h5>
                                <div className="mt-4">
                                    <span >Usuario</span>
                                    <input type="text"/>
                                </div>
                                <div className="mt-4">
                                    <span>Contraseña</span>
                                    <input type="password"/>
                                </div>
                                <button className=" button_login btn btn-primary mt-5" type="submit">Iniciar sesión</button>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-5 mt-4 mb-4">
                            <div className="container_rith">
                                <h5>Tamales <p>FC</p></h5>
                                <div className="logo mt-5 mb-5">

                                </div>
                                <h5>Bievenido eres el admi</h5>
                                <p>esta empresa es tuyo,
                                    solo tu tienes el control</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        )
    }
}
export default Login;