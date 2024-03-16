import * as React from 'react';
import '../styles/styles.scss';
import Layout from '../layouts/Layout';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/FeaturedProjects';
import FeaturedEssays from '../components/FeaturedEssays';

const IndexPage = () => {
    return (
        <Layout>
            <Hero />
            <FeaturedProjects />
            <FeaturedEssays />
        </Layout>
    );
};

export default IndexPage;

export const Head = () => (
    <>
        <title>Wesley De Witt</title>
    </>
);
