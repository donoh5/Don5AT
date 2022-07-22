import React, { useState } from 'react'
import {Card, Button} from 'react-bootstrap';

function CardComp(props) {
    return (
        <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/` + props.image}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.gpa}</Card.Text>
                <Button variant="primary">Grade</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComp