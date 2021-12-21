import React from 'react';
import {Container} from 'react-bootstrap';
import './Gap.scss'


const Gap = (props) => {

    return (
            <Container fluid className="gap" style={{height: `${props.height}`}}>

            </Container>
    )
}


export default Gap;