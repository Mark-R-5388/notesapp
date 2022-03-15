import { CgNotes } from "react-icons/cg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="header_logo_container">
          <CgNotes className="header_logo" />

          <h3>Notes App</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
