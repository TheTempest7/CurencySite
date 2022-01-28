
import './App.css';
import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import {BrowserRouter as Router ,Switch ,Route,Link, Routes } from 'react-router-dom';
import About from './About/About';


class App extends React.Component {
        constructor(props) {
            super(props);
           
           
        }

       

        
        render() {
                return (<div className="wrapper">

                <Header/>
        
                <div className="main">
                    <div className="main__container">

<Router>
    <Routes>
        <Route  exact path="/" element={<Rate/>}/>
        <Route  exact path="/About" element={<About/>}/>
    </Routes>
</Router>

                        
                       
                        <div className="main__rules">
                            <div className="main__rules-content">
                                We use cookies on our web-site for gathering technical type information. <br/> In particular we get your place location.
                            </div>
        
                        </div>
        
        
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default App;