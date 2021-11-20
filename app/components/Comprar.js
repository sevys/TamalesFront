import React from 'react';
import '../assets/css/Comprar.css';


class Comprar extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            modalControl:false
        }
    }
    handleModalClose(e){
        this.setState({
            modalControl : false
        })
    }
    handleModalOppen(){
        this.setState({
            modalControl : true
        })
    }
    render(){
        return(
            <>
                <div className="container">
                    <div hidden={!this.state.modalControl}>
                            <div className="modal-background" onClick={this.handleModalClose.bind(this)}>
                                <div className="modal-card">

                                </div>
                            </div>
                    </div>

                    <button className="button" onClick={this.handleModalOppen}>
                        Oppen Modal
                    </button>
                </div>
            </>
        )
    }
}
export default Comprar;