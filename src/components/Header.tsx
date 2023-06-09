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
        Hey I'm Ethan. I'm a Software Engineer.
      </span> 
      <span className='header-intro'>
      I excel at solving complex challenges, crafting seamless digital experiences <br></br>and bridging the gap between user needs and technical implementation.
      </span>
      <span className='showcase-text'>
        Below is a comprehensive collection of my coding projects.
      </span>
    </div>
  );
}

export default Header;
