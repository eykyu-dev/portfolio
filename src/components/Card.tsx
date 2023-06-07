import './Card.css';

interface CardProps{
    img: string;
    title: String;
    titledate: String;
    button1: String;
    button2: String;
    href1: string;
    href2: string;
}


function Card(props: CardProps) {
        return (
        <div className='card'>
            <div className='img-sec'>
                <img className='card-logo' src={props.img}></img>
            </div>
            <div className='desc-sec'>
                <span className='card-title'>{props.title}</span>
                <span className='desc-text'>{props.titledate}</span>
            </div>
            <div className='button-sec'>
                <a className='button-sec-href' href={"//" + props.href1}>{props.button1}</a>
                <a className='button-sec-href' href={"//" + props.href2}>{props.button2}</a>
            </div>
        </div>
        );
}

export default Card;
