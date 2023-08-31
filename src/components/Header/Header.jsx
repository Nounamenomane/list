import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const todosArr = useSelector((state) => state.todos);
  const completed = todosArr.reduce((acc, item) => {
    return acc + item.status;
  }, 0);

  return (
    <div className="header">
      Todos {completed} / {todosArr.length}
    </div>
  );
};
export default Header;
