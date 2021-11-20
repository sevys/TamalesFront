import React from 'react';
import {Link} from "react-router-dom";
import Footer from "../components/Footer";

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
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total a pagar</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">Tamal1</th>
                            <td>2</td>
                            <td>120</td>
                            <td>pagado</td>
                            <td>pagado</td>
                            <td>pagado</td>
                        </tr>
                        <tr>
                            <th scope="row">tamal2</th>
                            <td>3</td>
                            <td>23</td>
                            <td>pagado</td>
                            <td>pagado</td>
                            <td>pagado</td>


                        </tr>
                        <tr>
                            <th scope="row">tamal3</th>
                            <td>9</td>
                            <td>69</td>
                            <td>por pagar</td>
                            <td>pagado</td>
                            <td>pagado</td>

                        </tr>
                        </tbody>
                    </table>
                </div>

                <Footer/>

            </div>
        )
    }

}

export default Pedidos;