
import './Calc.css';
import React from 'react';

class Calc extends React.Component {
        constructor(props) {
            super(props);
            this.state={
                result:0,
            }
           
        }
static getDerivedStateFromProps(props,state){
    return{rate:props.rate};

}
      Calculate=(e)=>{
          e.preventDefault();
          console.log(1);
          let elements=e.target.elements;
          console.log(elements);
          console.log(elements["amount"].value); 
          console.log(elements["curency"].value);
          let amount=elements["amount"].value;
          let cd=elements["curency"].value;
          this.setState({result:(amount / (this.state.rate[cd] / this.state.rate['RUB']))})

      } 
        render() {
                return (
                    <div className="main__calc calc">
                    <div className="calc__body">
                        <div className="calc__caption caption">Exchange calculator</div>
                        <form className="calc__downside "  onSubmit={this.Calculate} >
                            <div className="calc__downside-body downside">
                                <div className="dowmside__wish">I want to</div>
                               
                                <div className="downside__select">
                                    <div className="downside__select-body">
                                        <input className="downside__bar" type="number"name="amount"/>
                                        <select className="downside__select" name="curency" id="">
                                        {Object.keys(this.props.rate).map((keyName,i)=>
                                     (
                                     <option key={keyName} value={keyName}>{keyName}</option>
                                     ))}

                          
                                        </select>
                                    </div>
                                </div>
                                <div className="downside__output">
                                    <div className="downside__output-content output">
                                        <div className="output__caption">Results {this.state.result.toFixed(2)}</div>
                                       
                                    </div>
                                    <input type="submit" defaultValue="Calculate mutherfucker"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                       
        )
    }
}
export default Calc;