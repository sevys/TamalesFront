import React from 'react';
import {Link} from "react-router-dom";

class Pedidos extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">LOGO</a>

                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Ubicación</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Pedidos</a>
                            </li>

                        </ul>
                    </nav>
                </div>
                <br/>
                <div className=" bg-light">
                    <div className="container ">
                        <div className="row">
                            <div className="col">
                                <h6>
                                    Lista de Pedidos 
                                </h6>
                            </div>
                            <div className="col">

                            </div>
                            <div className="col">
                                <Link className="dropdown-item" to='/'><h5>Regresar</h5></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>

            </div>
        )
    }

}
export default Pedidos;