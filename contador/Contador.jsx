import React, {Component} from "react";
import "./Contador.css"
 
class Contador extends Component {
    state = {
        numero: this.props.initalNumber || 0,
        steps: this.props.initalSteps || 5,

    };
    /*
    construtor(props){
        super(props)
        this.inc = this.inc.bind(this)
    }
    */

    inc = () => {
        this.setState({
            numero: this.state.numero + 1,
        });

    }

    dec = () => {
        this.setState({
            numero: this.state.numero - 1,
        });

    }
    setSteps = (event) => {
        this.setState({
              steps: +e.target.value,
        });
    }

    render(){
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                   <label htmlFor="stepsInput">Passo:</label>
                    <input id="stepsInput" typo="number"
                    value={this.state.steps} onChange ={this.setSteps}/>
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        );
    }
}

export default Contador;