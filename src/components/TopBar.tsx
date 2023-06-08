
import './TopBar.css';

function TopBar() {
  const handleEmailClick = () => {
    const emailUrl = 'mailto:eykyudev@gmail.com';
    window.location.href = emailUrl;
  };

  return (
    <div className='bar-div'>
      <button className='email-button' onClick={handleEmailClick}>Say Hi 👋</button>
      <a className='email-button' href='//github.com/eykyu-dev'>Github 👨🏻‍💻</a>
      <a className='email-button' href='//github.com/eykyu-dev'>Resume 📄</a>
      <a className='email-button' href='//linkedin.com/in/ethan-yu-a865a3117/'>Linkedin 💼</a>
      <a className='email-button' href='//flos-frontend.vercel.app/'>Newest Project 🧸</a>
    </div>
  );
}

export default TopBar;
