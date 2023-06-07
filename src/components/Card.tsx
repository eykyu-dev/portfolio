
import './Card.css';

function Card() {
  return (
    <div className='card'>
        <div className='img-sec'>
            <img src="./public/pitcher.png"></img>
        </div>
        <div className='desc'>
            <span className='card-title'>Pitcher</span>
            <span className='desc-text'>May 2023</span>
        </div>
    </div>
  );
}

export default Card;
