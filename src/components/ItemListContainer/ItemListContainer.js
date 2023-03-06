import './ItemListContainer.css';
import { Button } from 'react-bootstrap';

export const ItemListContainer = ({greeting}) => {
  return (
    <div className="list-container">
      <h2 className="list-container__title">Titulo 1 </h2>
      <hr />
      <p>{greeting}</p>
      {/* <button className="btn btn-primary">Click</button> */}
      <Button>Click </Button>
    </div>
  );
};
