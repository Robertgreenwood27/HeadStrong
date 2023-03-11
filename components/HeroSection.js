import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import salonImage from '../public/salon.png';

export default function HeroSection() {
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
    zIndex: 2,

  };


  return (
    <div style={containerStyle}>
    <div style={divStyle}>
        <div className="text-white relative z-10 text-center">
          <img src="/HeadstrongLogo.svg" alt="Headstrong Salon"/>
        </div>
        <div style={arrowStyle}>
        <FontAwesomeIcon icon={faChevronDown} size="2x" color="#fff" />
      </div>
    </div>
      <div style={overlayStyle}></div>
    </div>
  );
}
