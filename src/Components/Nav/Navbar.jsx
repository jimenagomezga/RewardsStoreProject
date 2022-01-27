import { Link } from "react-router-dom";
import "../../Styles/NavBar.css";
import logo from "../../Images/aerolab-logo.svg";
import coin from "../../Images/icons/coin.svg";
import add from "../../Images/icons/plus.svg";
import { useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";

export default function NavBar({ user, updatePoints, pointsUser }) {
  async function addPoins(amount) {
    try {
      let peticion = await fetch(
        "https://coding-challenge-api.aerolab.co/user/points",
        {
          method: "POST",
          body: JSON.stringify({
            amount: amount,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNlMzY1YmY5MGRhZjAwMWE5NTY0ODYiLCJpYXQiOjE2MzE0NjcwOTl9.pxDW6yOw-etw-GoB4dsnQKc6oaC9jKReyKrw6BrWIJE",
          },
        }
      );
      let res = await peticion.json();
      updatePoints(res["New Points"]);
      //console.log(`los nuevos puntos son ${res["New Points"]}`);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    addPoins();
  }, []);

  return (
    <nav>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img className="iconNavbar" src={logo} alt="logo" />
      </Link>
      <div className="blockCoins">
        <Link to={process.env.PUBLIC_URL + "/history"}>
          <h3 className="userStore">{user.name}</h3>
        </Link>
        <div className="contenedorCoins">
          <h1 className="cantidadCoins">{pointsUser}</h1>
          <img className="iconCoin" src={coin} alt="icon-coins" />
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <img className="iconCoin" src={coin} alt="icon-coins" />
            <img className="iconAdd" src={add} alt="icon-add" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Button className="buttonAdd" onClick={() => addPoins(1000)}>
              1000 points
              <img className="iconCoin" src={coin} alt="icon-coins" />
            </Button>
            <Button className="buttonAdd" onClick={() => addPoins(5000)}>
              5000 points
              <img className="iconCoin" src={coin} alt="icon-coins" />
            </Button>
            <Button className="buttonAdd" onClick={() => addPoins(7500)}>
              7500 points
              <img className="iconCoin" src={coin} alt="icon-coins" />
            </Button>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}
