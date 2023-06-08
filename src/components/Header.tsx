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
        Hi! My name is Ethan. I'm a passionate software engineer that loves learning new ways to provide <span className="gradient-text-2">optimal solutions</span> to turn your <span className="gradient-text-2">designs into code</span>, and I would love for the chance to <span className="gradient-text-2">connect and work </span>for you.
      </span> 
      <span className='showcase-text'>
        Below is a comprehensive collection of my coding projects.
      </span>
    </div>
  );
}

export default Header;
