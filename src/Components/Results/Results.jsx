import "../../Styles/Results.css";
import Product from "../Results/Product";
import arrowRight from "../../Images/icons/arrow-right.svg";
import arrowLeft from "../../Images/icons/arrow-left.svg";
//import useResults from "../../Hooks/useResults";

export default function Results({
  filteredList,
  userInformation,
  pointsUser,
  updatePage,
  currentPage,
  originalList,
}) {
  const buyProduct = async (productId) => {
    try {
      let peticion = await fetch(
        "https://coding-challenge-api.aerolab.co/redeem",
        {
          method: "POST",
          body: JSON.stringify({
            productId: productId,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTNlMzY1YmY5MGRhZjAwMWE5NTY0ODYiLCJpYXQiOjE2MzE0NjcwOTl9.pxDW6yOw-etw-GoB4dsnQKc6oaC9jKReyKrw6BrWIJE",
          },
        }
      );
      let res = await peticion.json();
      //setUpdatedPoints(false);
      alert(res.message);
      userInformation();
    } catch (error) {
      console.error(error);
    }
  };

  const PER_PAGE = 16;

  return (
    <section>
      <div className="contenedorPrincipal">
        <div className="contenedorCard">
          {filteredList.length ? (
            filteredList.map((item, index) => {
              return (
                <Product
                  key={index}
                  pointsUser={pointsUser}
                  buyProduct={buyProduct}
                  productId={item._id}
                  category={item.category}
                  name={item.name}
                  imagen={item.img.url}
                  cost={item.cost}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
        <h1 className="cantidadProductosR">
          {" "}
          {Math.min(PER_PAGE * currentPage, filteredList.length)} de{" "}
          {originalList.length} products
        </h1>
        <div className="contenedorBotones">
          <button className="arrowLeft" onClick={() => updatePage(1)}>
            <img src={arrowLeft} alt="icon-arrow-left" />
          </button>
          <button className="arrowRight" onClick={() => updatePage(2)}>
            <img src={arrowRight} alt="icon-arrow-right" />
          </button>
        </div>
        <div className="lineFilter3"></div>
      </div>
    </section>
  );
}
