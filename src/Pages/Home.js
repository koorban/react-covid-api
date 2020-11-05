import React from 'react';
import Header from '../Header';
import WorldInfoContainer from '../WorldInfoContainer';
import SearchByCountry from '../SearchByCountry';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Home() {
    return (
        <Container>
            <Header
                title='COVID-19 World Statistics'
                subTitle='Thanks to: https://api.covid19api.com/'
                imageSource=''
            />

            <Row>
                <WorldInfoContainer />
            </Row>

            <Row>
                <SearchByCountry />
            </Row>
        </Container>
    )
};
