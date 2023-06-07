import { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 200); 
    return () => {
      setFade(false);
    };
  }, []);

  return (
    <div className={`header ${fade ? 'fade-in' : ''}`}>
      <span className='header-text'>
        hey! my name is ethan. a passionate software engineer that loves providing optimal solutions to complex problems and turning <span className="gradient-text">your designs into code.</span>
      </span> 
    </div>
  );
}

export default Header;
