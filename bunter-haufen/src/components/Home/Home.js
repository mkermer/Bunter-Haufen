import React from 'react';
import Gap from '../Gap/Gap';
import Hero from './Hero';
import Wie from './Wie';
import Was from './Was';
import Social from './Social';
// import Modal from '../LandingPage/AgeGate';
import './Home.scss';


const Home = () => {

    return (
        <div className="content">
            {/* <Modal /> */}
            <Hero />

            <Gap height="20em"/>

            <Wie />

            <Gap height="5em" />

            <Was />

            <Gap height="5em" />

            <Social />

        </div>
    )
}


export default Home;