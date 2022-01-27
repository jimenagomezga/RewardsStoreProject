import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import "./Styles/App.css";
import NavBar from "./Components/Nav/Navbar";
import Home from "./Components/Templates/Home";
import HistoryPoints from "./Components/Templates/HistoryPoints";

export default function App() {
  const [user, setUser] = useState({});
  const [pointsUser, setPointsUser] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [listProducts, setListProducts] = useState([]);

  function updatePoints(point) {
    setPointsUser(point);
  }

  function updateProductList(productList) {
    setFilteredList(productList);
  }

  async function userInformation() {
    try {
      let peticion = await fetch(
        "https://coding-challenge-api.aerolab.co/user/me",
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNlMzY1YmY5MGRhZjAwMWE5NTY0ODYiLCJpYXQiOjE2MzE0NjcwOTl9.pxDW6yOw-etw-GoB4dsnQKc6oaC9jKReyKrw6BrWIJE",
          },
        }
      );
      let res = await peticion.json();
      setUser(res);
      setPointsUser(res.points);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userInformation();
  }, []);

  async function handlesubmitProducts() {
    try {
      let peticion = await fetch(
        "https://coding-challenge-api.aerolab.co/products",
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNlMzY1YmY5MGRhZjAwMWE5NTY0ODYiLCJpYXQiOjE2MzE0NjcwOTl9.pxDW6yOw-etw-GoB4dsnQKc6oaC9jKReyKrw6BrWIJE",
          },
        }
      );
      let res = await peticion.json();
      setListProducts(res);
      setFilteredList(res.slice(0, 16));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handlesubmitProducts();
  }, []);

  return (
    <div className="App">
      <NavBar user={user} updatePoints={updatePoints} pointsUser={pointsUser} />
      <Switch>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          component={() => (
            <Home
              originalList={listProducts}
              filteredList={filteredList}
              updateProductList={updateProductList}
              userInformation={userInformation}
              pointsUser={pointsUser}
            />
          )}
        /><Route
          path={process.env.PUBLIC_URL + "/history"}
          component={HistoryPoints}
        />
      </Switch>
    </div>
  );
}
