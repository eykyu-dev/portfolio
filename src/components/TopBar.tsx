import { useEffect, useRef } from 'react';
import './TopBar.css';

function TopBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('fade-in');
    }
  }, []);

  const handleEmailClick = () => {
    const emailUrl = 'mailto:eykyudev@gmail.com';
    window.location.href = emailUrl;
  };

  return (
    <div ref={ref} className='bar-div fade-in'>
      <button className='email-button' onClick={handleEmailClick}>
        Say Hi 👋
      </button>
      <a className='email-button' href='//github.com/eykyu-dev'>
        Github 👨🏻‍💻
      </a>
      <a className='email-button' href='//github.com/eykyu-dev'>
        Resume 📄
      </a>
      <a
        className='email-button'
        href='//linkedin.com/in/ethan-yu-a865a3117/'
      >
        Linkedin 💼
      </a>
      <a className='email-button' href='//flos-frontend.vercel.app/'>
        Newest Project 🧸
      </a>
    </div>
  );
}

export default TopBar;
