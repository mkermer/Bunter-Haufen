import React from 'react';
import Logo from '../../img/logo3.png';
import './LandingPage.scss';
import AnimationLogo from './Animation';

const LandingPage = () => {

    return (
        <div className="content">
            <img className="logo rotate-slide-out" src={Logo} alt="Logo"/>
            {/* <AnimationLogo /> */}
        </div>
    )
}


export default LandingPage;