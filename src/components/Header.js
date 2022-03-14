import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <h3>Notes App</h3>
        <div className="change_elements_container">
          <div className="change_fonts_container">
            <button className="header_button">Change Font</button>
          </div>
          <div className="change_dark_mode_container">
            <button className="header_button">Change to Dark</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
