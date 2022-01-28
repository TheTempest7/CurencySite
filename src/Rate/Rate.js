
import './Rate.css';
import React from 'react';
import Calc from '../Calc/Calc' ;

class Rate extends React.Component {
        constructor(props) {
            super(props);
            this.getApi();
            this.state={
                'date':'',
                'currencyRate':{}
            };
            this.currency=['USD','RUB','CAD','PHP'];
        }

        getApi=()=>{
            fetch('https://openexchangerates.org/api/latest.json?app_id=f35b1c47a6db40e09d366acf6358467f')
            .then(data=>{
                return data.json();
                
            })
            .then ( data=> {
                console.log(data);
                this.setState({date: data.date});
                let result={};
                for (let i=0;i<this.currency.length ;i++){
                    result[this.currency[i]]=data.rates[this.currency[i]];
                }
                console.log(result);
                this.setState({currencyRate:result});
            });
        }
        render() {
                return (
                        <div className="main__cards">
                            <div className="main__caption caption">
                                {this.state.date} curency value
                            </div>
                            <div className="main__cards-body cards">
                            {Object.keys(this.state.currencyRate).map((keyName,i)=>
                                (<div className="cards__item" key={keyName}>
                                <div className="cards__item-body" >
                                    <div className="cards__curency-name">{keyName}</div>
                                    <div className="cards__curency-first-value">{this.state.currencyRate[keyName].toFixed(2)}*</div>
                                    <div className="cards__curency-second-value">* You can acquire<br/>for a Euro </div>
                                </div>
                            </div>)
                                )}
                                
                                
                            </div>
                            <Calc rate={this.state.currencyRate} />
                        </div>
                
        )
    }
}
export default Rate;