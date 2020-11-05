import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function WorldInfo({ title, item }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>{title}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>{item}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
};
