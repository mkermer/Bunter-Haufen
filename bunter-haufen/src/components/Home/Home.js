import React from 'react';
import Gap from '../Gap/Gap';
import Hero from './Hero';
import './Home.scss';


const Home = () => {

    return (
        <div className="content">
            <Hero />

            <Gap height="20em"/>

            <Hero />

            <Gap height="5em" />

            <Hero />

        </div>
    )
}


export default Home;