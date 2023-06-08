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
        <div className='card-div'>
            <img className='card-img' src={props.img}></img>
            <div className='desc-sec-div'>
                <span className='desc-title'>{props.title}</span>
                <span className='desc-text'>{props.titledate}</span>
                <div className='desc-button-div'>
                    <a className='button-sec-href' href={"//" + props.href1}>{props.button1}</a>
                    <a className='button-sec-href' href={"//" + props.href2}>{props.button2}</a>
            </div>
            </div>
        </div>
        );
}

export default Card;
