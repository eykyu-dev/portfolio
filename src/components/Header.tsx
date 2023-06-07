import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 300); 

    return () => {
      setFade(false);
    };
  }, []);

  return (
    <div className={`header ${fade ? 'fade-in' : ''}`}>
      <span>
        Hi, I'm Ethan. I'm a passionate software engineer that loves providing optimal solutions to complex problems and turning <span className="gradient-text">designs into code.</span>
      </span>
    </div>
  );
}

export default Header;
