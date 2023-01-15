//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Layout from '../components/Layout'

import '../styles/_global.scss'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Layout>
                {typeof window === 'undefined' ? null : <Component {...pageProps} />}
            </Layout>
        </>
    );
}
