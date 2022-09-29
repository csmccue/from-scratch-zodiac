import './Zodiac.css';

export default function Zodiac(props) {
  return <>    
    <div>
      <img src={`/../imgs/${props.name}.png`} />
      <p className='name'>{props.name}</p>
      <p>{props.date}</p>
    </div>
  </>;

}
