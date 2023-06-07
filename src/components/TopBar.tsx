
import './TopBar.css';

function TopBar() {
  const handleEmailClick = () => {
    const emailUrl = 'mailto:eykyudev@gmail.com';
    window.location.href = emailUrl;
  };

  return (
    <div className='bar-div'>
      <button className='email-button' onClick={handleEmailClick}>Say Hi 👋</button>
      <button className='email-button' onClick={handleEmailClick}>Say Hi 👋</button>
    </div>
  );
}

export default TopBar;
