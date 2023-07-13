import { useEffect, useState } from "react";
import "./App.css";
import CreateTodo from "./components/creareTodo/createTodo";
import Header from "./components/Header/Header";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import TodoItem from "./components/TodoItem/TodoItem";

function App() {
  const arr = JSON.parse(localStorage.getItem('data'))

  const [todosArr, setTodosArr] = useState(arr);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(todosArr))
  }, [todosArr]);

  const addTodo = (newStr) => {
    const newTodo = {
      title: newStr,
      status: false,
      id: todosArr.length + 1,
      // Date.now()
    };

    setTodosArr([...todosArr, newTodo]);
  };

  const deleteTodo = (id) => {
    const newArr = todosArr.filter((item) => item.id !== id);
    setTodosArr(newArr);
  };
  const handleCheckboxChange = (id) => {
    const updatedTodosArr = todosArr.map(
      (item) => (item.id === id ? { ...item, status: !item.status } : item)

      // if(item.id === id){
      //   return {...item,status: !item.status}
      // }
      // return item
    );
    setTodosArr(updatedTodosArr);
  };

  const editSave = (id, newTitle) => {
    const updateTitle = todosArr.map(
      (item) => (item.id === id ? { ...item, title: newTitle } : item)
      // if(item.id === id){
      //   return {...item, title: newTitle}
      // }
      // return item
    );
    setTodosArr(updateTitle);
  };

  // const completedCount = todosArr.filter((item) => item.status).length;
  // let [sum, setSum] = useState(0);
  // const plus = () => {
  //   setSum(sum + 1);
  // };

  // const mines = () => {
  //   setSum(sum - 1);
  // };
  const resLenght = todosArr.reduce((acc, item) => {
    return acc + item.status;
  }, 0);

  return (
    <div className="App">
      {/* <div>
        <button onClick={plus}>PLUS</button>
        <h3>{sum}</h3> 
        <button onClick={mines}>MINES</button>
      </div> */}
      <Header completed={resLenght} length={todosArr.length} />
      <CreateTodo addTodo={addTodo} />
      <TodoContainer
        todosArr={todosArr}
        deleteTodo={deleteTodo}
        handleCheckboxChange={handleCheckboxChange}
        editSave={editSave}
      />
    </div>
  );
}

export default App;
