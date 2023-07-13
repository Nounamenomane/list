import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      Todos {props.completed}/{props.length}
    </div>
  );
};
export default Header;
