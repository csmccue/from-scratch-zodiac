import './Zodiac.css';

export default function Zodiac(props) {
  return <>    
    <div>
      <img src={process.env.PUBLIC_URL + `${props.name}.png`} />
      <p className='name'>{props.name}</p>
      <p>{props.date}</p>
    </div>
  </>;

}
