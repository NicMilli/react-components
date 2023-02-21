const {useState} = React;

const GroceryListItem = (props) => {
  const [isBought, setIsBought] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    textDecoration: isBought ? 'line-through' : 'none',
    fontWeight: isHovered ? 'bold' : 400,
    cursor: 'pointer'
  };

  const onGroceryItemClick = (event) => {
    setIsBought(true);
  };

  const onOverHandler = (event) => {
    setIsHovered(true);
  };

  const onLeaveHandler = (event) => {
    setIsHovered(false);
  };

  return (
    <li onClick={onGroceryItemClick} style={style} onMouseEnter={onOverHandler} onMouseLeave={onLeaveHandler}>
      {props.groceryItem}
    </li>
  );
}

const GroceryList = (props) => (
  <ul>
    {props.groceries.map((groceryItem) => {
      return <GroceryListItem groceryItem={groceryItem} />
    })}
  </ul>
)

const App = () => (
  <div>
    <h2>My Todo List</h2>

    <GroceryList groceries={['Cucumbers', 'Kale']}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));