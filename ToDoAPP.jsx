import { useState } from "react";

const ToDoAPP = () => {
  const [list, setlist] = useState([]);
  const [item, setItem] = useState();

  const addTodoList = () => {
    list.push(item);
    setlist([...list]);
  };
  const removeItem = (index) => {
    list.splice(index, 1);
    setlist([...list]);
  };
  return (
    <div>
      <h1>ToDo Application</h1>

      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="Item"
      />
      <button onClick={addTodoList}>Add</button>
      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeItem(index);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoAPP;
