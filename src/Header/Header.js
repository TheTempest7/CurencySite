
import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

class Header extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
                return (

                <div className="header">
                    <div className="header__container">
                        <div className="header__firstline">
        
                        </div>
                        <div className="header__secondline secondline">
                            <div className="secondline__body">
                                <div className="secondline__discription">
                                    React Lite Level
        
                                </div>
                            </div>
                        </div>
                     <Nav/>
                    </div>
                </div>
        
                
        )
    }
}
export default Header;