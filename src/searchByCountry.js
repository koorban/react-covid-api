import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function SearchByCountry() {
    const [country, setCountry] = useState('');

    const handleSubmit = () => {

    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" srOnly>
                        Name
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Enter a Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </Col>
                <Col xs="auto">
                <Button type="submit" className="mb-2">
                    Search
                </Button>
                </Col>
            </Form.Row>
        </Form>
    )
};
