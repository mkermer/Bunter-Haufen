import React from 'react';
import Logo from '../../img/logo3.png';
import './LandingPage.scss';
import Animation from './Animation';

const LandingPage = () => {

    return (
        <div className="content">
            <img className="logo rotate-slide-out" src={Logo} alt="Logo"/>
            {/* <Animation /> */}
        </div>
    )
}


export default LandingPage;