import "../../Styles/Products.css";
import buyblue from "../../Images/icons/buy-blue.svg";
import coin from "../../Images/icons/coin.svg";
import bluyWhite from "../../Images/icons/buy-white.svg";

export default function Product(props) {
  return (
    <section>
      <div className="cardProduct">
        <div className="contenedorFoto">
          <img className="imagenProducto" src={props.imagen} alt="producto" />
          <img className="iconBuyBlue" src={buyblue} alt="icono-coin-b" />
        </div>

        <div className="lineaDescripcion"></div>
        <div className="descripcion">
          <h4 className="descripcionCategoria">{props.category}</h4>
          <h3 className="descripcionNombre">{props.name}</h3>
        </div>
        {props.pointsUser >= props.cost ? (
          <div className="transicionTransparencia">
            <img className="iconoBuyWhite" src={bluyWhite} alt="icono-coin-w" />
            <div className="contendorPrecio">
              <h1 className="precioTransicion">{props.cost}</h1>

              <button
                className="botonRedeem"
                onClick={() => props.buyProduct(props.productId)}
              >
                {" "}
                Redeem now{" "}
              </button>

              <img src={coin} alt="icono-coin" />
            </div>
          </div>
        ) : (
          <div className="monedasFaltantes">
            <p>You Need {props.cost - props.pointsUser} </p>
            <img className="monedasF" src={coin} alt="icono-coin" />
          </div>
        )}
      </div>
    </section>
  );
}
