import "./App.css";
import CreateTodo from "./components/creareTodo/createTodo";
import Header from "./components/Header/Header";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import FilterTodo from "./components/FilterTodo/FilterTodo";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateTodo />
      <FilterTodo />
      <TodoContainer />
    </div>
  );
}

export default App;
