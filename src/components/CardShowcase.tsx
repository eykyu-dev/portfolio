
import './CardShowcase.css';
import Card from './Card';
function CardShowcase() {
  return (
    <div className='showcase-div'>
        <div className='cards-in-showcase-div'>
            <Card img='/flos.png' title='flos-plants' titledate='e-commerce site!' button1='deployment 🧑🏻‍💻' button2='github 📂' href1='flos-frontend.vercel.app/' href2='github.com/eykyu-dev/flos-frontend'/>
            <Card img='/pitcher.png' title='pitcher' titledate='pitch-training site!' button1='deployment 🧑🏻‍💻' button2='github 📂' href1='pitcher-inky.vercel.app/' href2='github.com/eykyu-dev/pitcher'/>
            <Card img='/pitcher.png' title='cash-wallet' titledate='c++ back-end' button1='deployment 🧑🏻‍💻' button2='github 📂' href1='flos-frontend.vercel.app/' href2='github.com/eykyu-dev/flos-frontend'/>
        </div>
    </div>
  );
}

export default CardShowcase;
