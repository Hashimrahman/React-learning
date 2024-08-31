const List = (props) => {
  const itemList = props.items;
  const listItems = itemList.map((item) => (
    <>
      <li key={item.id}>
        {item.name} :&nbsp; <b>{item.calorie}</b>
        <button>Hi</button>
      </li>
    </>
  ));

  return (
    <>
      <h3 className="">{props.category}</h3>
      <ul>{listItems}</ul>
    </>
  );
};
export default List;
