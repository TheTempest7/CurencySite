
import React from 'react';
import './Nav.css';

class Nav extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
                return (

                
                        <div className="header__thirdline  thirdline">
                            <div className="thirdline__body">
                                <div className="thirdline__discription-body">
        
                                    <div className="thirdline__discription discription">
                                        <div className="discription__nav"><a href='/' className='discription__link'> Main</a></div>
                                        <div className="discription__nav">Exchange points</div>
                                        <div className="discription__nav"> <a href='/About' className='discription__link'>Contacts</a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
        
                
        )
    }
}
export default Nav;