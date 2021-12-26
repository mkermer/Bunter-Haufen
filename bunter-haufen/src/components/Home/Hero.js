import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';


const Hero = () => {

    return (
            <Container fluid className="hero">
                {/* <h1 className="neonText"> Bunter Haufen </h1> */}
                <Container>
                    <div className='marker'>
                        <p>
                            Wie ein Haufen Laub, vom Wind zusammengetragen. 
                        </p>
                        <p>
                            Junge kinky Blätter die lernen, erfahren und über sich hinauswachsen.
                        </p>
                        <p>
                            Alle bunt verstreut, gemeinsam formen sie den
                        </p>
                    </div>

                    <h1>
                        <span className='neonTextLila'>Bu</span>
                        <span className='neonTextBlau'>nt</span>
                        <span className='neonTextGruen'>en</span>&nbsp;
                        <span className='neonTextGelb'>Hau</span>
                        <span className='neonTextRot'>fen</span>
                    </h1>
                </Container>
            </Container>
    )
}


export default Hero;