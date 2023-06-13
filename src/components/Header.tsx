import { useEffect, useRef } from 'react';
import './Header.css';

function Header() {

  const ref = useRef<HTMLDivElement>(null);
  const reftext = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.classList.add('fade-in');
      }
    }, 1000); // 2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (reftext.current) {
        reftext.current.classList.add('fade-in');
      }
    }, 1500); // 2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={ref} className='header'>
      <span className='header-text'>
        Hey I'm Ethan. <span className='header-text-lighter'>I'm a Software Engineer.</span>
      </span> 
      <span className='header-intro'>
      I excel at solving complex challenges, crafting seamless digital experiences <br></br>and bridging the gap between user needs and technical implementation.
      </span>
      <span ref={reftext} className='showcase-text'>
        Below is a comprehensive collection of my coding projects.
      </span>
    </div>
  );
}

export default Header;
