import "../../Styles/Filters.css";
import arrowRight from "../../Images/icons/arrow-right.svg";
import arrowLeft from "../../Images/icons/arrow-left.svg";

export default function Filters({
  originalList,
  updateProductList,
  filteredList,
  currentPage,
  updatePage,
}) {
  const PER_PAGE = 16;

  const handleMostRecent = () => {
    const newlistMostRecent = originalList.filter(
      (item) => item.category === "Gaming" || item.category === "Laptops"
    );
    return updateProductList(newlistMostRecent);
  };

  const handleLowestPrice = () => {
    const newlistLowesPrice = originalList.filter((item) => item.cost < 600);
    return updateProductList(newlistLowesPrice.slice(0, 16));
  };

  const handleHighestPrice = () => {
    const newlistHighestPrice = originalList.filter((item) => item.cost > 601);
    return updateProductList(newlistHighestPrice);
  };

  const handleReset = () => {
    console.log("la lista esta limpia");
    return updateProductList(originalList.slice(0, 16));
  };

  return (
    <section>
      <div className="contenedorMenu">
        <h1 className="cantidadProductos">
          {" "}
          {Math.min(PER_PAGE * currentPage, filteredList.length)} de{" "}
          {originalList.length} products
        </h1>
        <div className="lineFilter1"></div>
        <h1 className="ordenLista">Sort by:</h1>
        <button className="btn1" onClick={handleMostRecent}>
          Most recent
        </button>
        <button className="btn2" onClick={handleLowestPrice}>
          Lowest price
        </button>
        <button className="btn2" onClick={handleHighestPrice}>
          Highest price
        </button>
        <button className="btn2" onClick={handleReset}>
          Reset
        </button>
        <button className="arrowLeft" onClick={() => updatePage(1)}>
          <img src={arrowLeft} alt="icon-arrow-left" />
        </button>
        <button className="arrowLeft" onClick={() => updatePage(2)}>
          <img src={arrowRight} alt="icon-arrow-right" />
        </button>
        <div className="lineFilter2"></div>
      </div>
    </section>
  );
}
