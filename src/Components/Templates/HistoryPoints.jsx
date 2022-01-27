import { useEffect, useState } from "react";
import "../../Styles/HistoryPoints.css";
import banner from "../../Images/banner.png";

export default function HistoryPoints() {
  const [history, setHistory] = useState("");

  async function userHistoryPoints() {
    try {
      let peticion = await fetch(
        "https://coding-challenge-api.aerolab.co/user/history",
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNlMzY1YmY5MGRhZjAwMWE5NTY0ODYiLCJpYXQiOjE2MzE0NjcwOTl9.pxDW6yOw-etw-GoB4dsnQKc6oaC9jKReyKrw6BrWIJE",
          },
        }
      );
      let res = await peticion.json();
      console.log(res);
      setHistory(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userHistoryPoints();
  });

  return (
    <div className="contenedorHistorial">
      <img src={banner} alt="banner" width="100%" />
      <h1 className="tituloHistorial">
        These are the products you have redeemed
      </h1>
      <div>
        {history.length ? (
          <table>
            <tr>
              <th>Photo</th>
              <th>Product name</th>
              <th>Cost</th>
              <th>Date</th>
            </tr>
            {history.map((item) => {
              return (
                <tr>
                  <td>
                    <img src={item.img.url} alt="xc" width="150px" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.cost}</td>
                  <td>{item.createDate}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <h1>You have no purchase history</h1>
        )}
      </div>
    </div>
  );
}
