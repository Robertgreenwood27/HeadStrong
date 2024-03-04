import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import salonImage from '../public/salon.png';

export default function HeroSection() {
    const [isMobile, setIsMobile] = useState(false);

    // Update the isMobile state based on window width
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Set the initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const divStyle = {
        backgroundImage: `url(${salonImage.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1,
        height: '90vh',
    };

    const containerStyle = {
        position: 'relative',
        top: 70,
        display: 'block',
    };

    const arrowStyle = {
        position: 'absolute',
        bottom: '60px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
    };

    const bookButtonStyle = {
        backgroundColor: 'transparent',
        color: 'white',
        border: '2px solid white',
        borderRadius: '10px',
        padding: '10px 20px',
        textDecoration: 'none',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '120px',
        zIndex: 10,
    };

    return (
        <div style={containerStyle}>
            <div style={divStyle}>
                <div className="text-white relative z-10 text-center">
                    <img src="/HeadstrongLogo.svg" alt="Headstrong Salon"/>
                </div>
                {isMobile && (
                    <a 
                    href="https://www.fresha.com/a/headstrong-hair-and-nail-studio-pueblo-west-154-tiffany-drive-j7kcd6r0/booking?menu=true" 
                    className="book-button" // Apply class for styling
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    BOOK
                </a>
                
                )}
                <div style={arrowStyle}>
                    <FontAwesomeIcon icon={faChevronDown} size="2x" color="#fff" />
                </div>
            </div>
            <div style={overlayStyle}></div>
        </div>
    );
}
