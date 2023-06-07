
import './Cards.css';
import Card from './Card';
function Cards() {
  return (
    <div className='card-div'>
        <p>Below is a comprehensive collection of my coding projects.</p>
        <div className='decks'>
          <div className='card-deck'>
            <Card img='path/to/image.jpg' title='flos-plants' titledate='e-commerce site!' button1='deployment' button2='github' href1='flos-frontend.vercel.app/' href2='github.com/eykyu-dev/flos-frontend'/>
            <Card img='path/to/image.jpg' title='portfolio' titledate='this site!' button1='deployment' button2='github' href1='flos-frontend.vercel.app/' href2='github.com/eykyu-dev/flos-frontend'/>
            <Card img='path/to/image.jpg' title='pitcher' titledate='pitch-training app!' button1='deployment' button2='github' href1='flos-frontend.vercel.app/' href2='github.com/eykyu-dev/flos-frontend'/>  
          </div>
        </div>
    </div>
  );
}

export default Cards;
