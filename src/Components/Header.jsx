import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>What a Quack Shop</h1>
            <p>Walk like a duck, shop like a duck...</p>
        </header>
    );
};

const headerStyle = {
    background: '#D24e01',
    color: '#FFD801',
    textAlign: 'center',
    padding: '10px'

};

export default Header;
