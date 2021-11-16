import React from 'react';
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import '../assets/css/ProductDetails.css';

class ProductDetails extends React.Component{
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
                                    Compra el producto
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
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">

                                <br/>
                                <div className="border border-1">
                                    <h6>Entrega Gratis</h6>
                                    <hr/>
                                    <h6> Servicio 25/7</h6>
                                    <hr/>
                                    <h6>  Oferta</h6>
                                    <hr/>
                                    <h6>12 MSI</h6>
                                    <hr/>
                                    <h6>  Pagos en Efectivo</h6>
                                </div>
                            </div>
                            <div className="col-lg-5" >
                                <p>no se como poner la foto</p>
                            </div>
                            <div className="col-lg-4">
                                <h6 className="fw-bold text-black">Nombre del Producto</h6>
                                <p>$15MX</p>
                                <br/>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-outline-dark ">Cantidad</button>
                                    <input type="number"/>
                                </div>
                                <br/>
                                <br/>
                                <button type="button" className="btn btn-dark" id="buttons-align" >Añadir al carrito</button>
                                <Link className=" text-white text-center " to="#" >
                                    <button type="button" className="btn btn-dark"  id="buttons-align">Comprar</button>
                                </Link>
                                <br/>
                                <br/>
                                <p>Detalles del producto</p>
                                <p>este producto es 100% chiapaneco, echo por
                                la gente de este hermoso pueblo con mucho amor</p>
                            </div>
                        </div>
                    </div>
                </section>
                <br/>
                <Footer/>
            </div>
        )
    }

}
export default ProductDetails;