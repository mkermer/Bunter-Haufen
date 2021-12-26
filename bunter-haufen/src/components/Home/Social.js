import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Telegram from '../Telegram/Telegram';
import { Discord } from 'react-bootstrap-icons';


const Social = () => {

    return (
            <Container fluid className="hero social">
                <Container>
                    <h2>
                        <span className='neonTextLila'>Social</span>
                    </h2>
                    <Row>
                        <Col md={6}>
                            <Telegram />
                        </Col>
                        <Col md={6} className='d-flex discord'>
                            <h3>
                                Join us on Discord!
                            </h3>
                            <a href='https://discord.gg/dsmXE9f2F6'>
                                <Discord size={100} />
                            </a>
                        </Col>
                    </Row>
                    
                </Container>
            </Container>
    )
}


export default Social;