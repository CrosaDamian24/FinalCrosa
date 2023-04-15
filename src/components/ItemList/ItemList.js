import Item from "../Item/Item";

export const ItemList = ({ items, items2 }) => {
  return (
    <div className="container fluid my-5">
      <h2 className="list-container__title">{items2.toUpperCase()}</h2>
      <hr />
      <div className="row justify-content-between list">
        {items.map((producto) => (
          <Item key={producto.id} item={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
