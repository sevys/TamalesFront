import React from 'react'
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Pedidos from '../pages/Pedidos';
import Maps from '../components/Maps';
import {BrowserRouter, Switch, Route} from "react-router-dom";


class App extends React.Component{
    render() {
        return(
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/Login" component={Login}/>
                        <Route exact path="/ProductDetails" component={ProductDetails}/>
                        <Route exact path="/Pedidos" component={Pedidos}/>
                        <Route exact path="/Mapa" component={Maps}/>
                    </Switch>
                </BrowserRouter>

        )
    }
}



export default App;
