import React from 'react';

const Hero = () => {
    return (
        <div className="hero">
            <h2 className="hero-text">
                A developer and writer obsessed with the process of making beautiful, intuitive websites and
                applications
            </h2>
            <div className="hero__subscribe-field">
                <input type="text"></input>
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default Hero;
