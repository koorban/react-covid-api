import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Header({ title, subTitle, imageSource }) {
    return (
        <Jumbotron>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <img src={imageSource} alt="header-image"/>
        </Jumbotron>
    )
};
