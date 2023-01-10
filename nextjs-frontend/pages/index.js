import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from '../components/Header.js'
import HomePage from './HomePage.js'
import Footer from '../components/Footer.js'

export default function Home() {
    return (
        <>
            <HomePage />
        </>
    )
}
