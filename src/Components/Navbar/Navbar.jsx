//* Styles
import { NavbarStyle } from "./NavbarStyle";

export const Navbar = ({ toggleTheme }) => {
  return (
    <>
      <NavbarStyle>
        <div className="web_logo">
          <h1>
            Multi<span>Step</span>Form
          </h1>
        </div>
        <button onClick={toggleTheme} className="btn_theme">
          Mudar tema
        </button>
      </NavbarStyle>
    </>
  );
};
