
import './Cards.css';
import Card from './Card';
function Cards() {
  return (
    <div className='card-div'>
        <p>Below is a comprehensive collection of my coding projects.</p>
        <div className='card-deck'>
          <Card></Card>
        </div>
    </div>
  );
}

export default Cards;
