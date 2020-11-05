import React, { useContext } from 'react';
import { WorldStatsContext } from './Context';
import WorldInfo from './WorldInfo';
import Col from 'react-bootstrap/Col';

export default function WorldInfoContainer() {
    const { worldCovidStats } = useContext(WorldStatsContext);
    const { TotalDeaths, TotalConfirmed, TotalRecovered } = worldCovidStats;

    return (
        <>
            <Col>
                <WorldInfo title={'Total Deaths'} item={TotalDeaths} />
            </Col>
            <Col>
                <WorldInfo title={'Total Confirmed'} item={TotalConfirmed} />
            </Col>
            <Col>
                <WorldInfo title={'Total Recovered'} item={TotalRecovered} />
            </Col>  
        </> 
    )
};

