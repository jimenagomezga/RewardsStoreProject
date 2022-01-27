import "../../Styles/Header.css";
import header1 from "../../Images/header-x1.png";

export default function Header() {
  return (
    <header>
      <div className="contenedorHeader">
        <img className="banner1" src={header1} alt="header-1" />
        <h1 className="titleHeader">Electronics</h1>
      </div>
    </header>
  );
}
