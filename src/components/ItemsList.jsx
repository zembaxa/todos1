import { todos } from "../todo";

export const ItemsList = () => {

  // updates status of an item
  const changeStatus = (indx) => {
    console.log("click", indx, todos[0]);
    todos[indx].status = todos[indx].status === "done" ? "todo" : "done";
    // console.log("todos", todos);
  };

  // renders list of items
  const renderList = todos.map((item, index) => {
    return (
      <li
        onClick={changeStatus.bind(this, index)}
        className={item.status === "done" ? "done" : "todo"}
        key={index}
      >
        {item.txt}
      </li>
    );
  });

  // console.log("Render");

  return <ul>{renderList}</ul>;
};
