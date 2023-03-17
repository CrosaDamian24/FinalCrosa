import '../ItemListContainer/ItemListContainer.scss';
// import { Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

export const ItemListContainer = ({greeting}) => {

  // const onAdd = (qty) => {
  //   alert(`Agregaste ${qty} productos`);
  // };
  return (
    <div className="list-container">
      <h2 className="list-container__title">Postres </h2>
      <hr />
      <p>{greeting}</p>
      {/* <button className="btn btn-primary">Click</button> */}
      {/* <Button>Click </Button> */}
      <ItemCount   initial={1} stock={7} />
    </div>
  );
};
