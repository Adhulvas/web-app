import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CountriesCards.css'

function CountriesCards({country}) {
  return (
    <Card className='card-container'>
      <Card.Img variant="top" className='cardImage' src={country.flags.png} />
      <Card.Body>
        <Card.Title className='card-title'>{country.name.common}</Card.Title>
        <Card.Text className='.card-text'>
          {`capital : ${country.capital}`}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CountriesCards;