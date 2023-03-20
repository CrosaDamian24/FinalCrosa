import Item from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <div >
      <h2 className="list-container__title">Productos</h2>
      <hr />
      <div className="row justify-content-between list">
        {items.map((producto) =>    <Item key={producto.id} item={producto} /> )  }
      </div>
    </div>
  );
};

export default ItemList;
