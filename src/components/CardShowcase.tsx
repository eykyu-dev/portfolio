
import './CardShowcase.css';
import Card from './Card';
import { useEffect, useRef } from 'react';

function CardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.classList.add('fade-in');
      }
    }, 2200); // 2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref2.current) {
        ref2.current.classList.add('fade-in');
      }
    }, 2500); // 2 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <div className='showcase-div'>
        <div ref={ref} className='cards-in-showcase-div'>
            <Card img='/flos.png' title='flos-plants' titledate='e-commerce site!' button1='deployment 🧑🏻‍💻' button2='github 📂' href1='flos-frontend.vercel.app/' href2='github.com/eykyu-dev/flos-frontend'/>
            <Card img='/pitcher.png' title='simple-pitch' titledate='pitch-training site!' button1='deployment 🧑🏻‍💻' button2='github 📂' href1='pitcher-inky.vercel.app/' href2='github.com/eykyu-dev/pitcher'/>
            <Card img='/model-viewer.png' title='model-viewer' titledate='3d-model-viewer from scratch' button1='deployment 🧑🏻‍💻' button2='github 📂' href1='model-viewer-eykyu-dev.vercel.app/' href2='github.com/eykyu-dev/model-viewer'/>
        </div>
        <div ref={ref2} className='cards-in-showcase-div'>
            <Card img='/portfolio.png' title='portfolio-site' titledate='this site!' button1='deployment 🧑🏻‍💻' button2='github 📂' href1='flos-frontend.vercel.app/' href2='github.com/eykyu-dev/flos-frontend'/>
            <Card img='/placeholder.png' title='soon-tm' titledate='soon!' button1='deployment 🧑🏻‍💻' button2='github 📂' href1='flos-frontend.vercel.app/' href2='github.com/eykyu-dev/flos-frontend'/>
            <Card img='/placeholder.png' title='soon-tm' titledate='soon!' button1='deployment 🧑🏻‍💻' button2='github 📂' href1='flos-frontend.vercel.app/' href2='github.com/eykyu-dev/flos-frontend'/>
        </div>
    </div>
  );
}

export default CardShowcase;
