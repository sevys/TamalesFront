import React from 'react';
import {Link} from "react-router-dom";
import '../assets/css/Compra.css'



class Comprar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render(){
        return(
            <>
                <div className="container compra">
                    <div className="row justify-content-md-center ">
                        <div className="col-lg-5" >
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label  className="form-label">Nombre</label>
                                    <input type="text" className="form-control" id="inputEmail4"/>
                                </div>
                                <div className="col-md-6">
                                    <label  className="form-label">Apellidos</label>
                                    <input type="text" className="form-control" id="inputPassword4"/>
                                </div>
                                <div className="col-12">
                                    <label  className="form-label">Numero de telefono</label>
                                    <input type="text" className="form-control" id="inputAddress"
                                           placeholder="765 356 4545"/>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-4">
                            <h6 className="fw-bold text-black">Nombre del Producto</h6>
                            <p>$15MX</p>
                            <br/>
                            <div className="btn-group">
                                <label className="label_cantidad" >Cantidad  </label>
                                <label>2</label>
                            </div>
                            <br/>
                            <div className="btn-group">
                                <label className="label_cantidad" >Total a pagar   </label>
                                <label>2</label>
                            </div>
                            <br/>
                            <br/>
                            <Link to="/Modal">
                                <button type="button" className="btn btn-dark" id="buttons-align" >TerminarCompra</button>
                            </Link>
                            <Link className=" text-white text-center " to="/ProductDetails" >
                                <button type="button" className="btn btn-dark"  id="buttons-align">Cancelar</button>
                            </Link>
                            <br/>
                            <br/>
                            <p>Detalles del producto</p>
                            <p>este producto es 100% chiapaneco, echo por
                                la gente de este hermoso pueblo con mucho amor</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Comprar;