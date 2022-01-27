import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Filters from "../Results/Filters";
import Results from "../Results/Results";

export default function Home({
  originalList,
  filteredList,
  updateProductList,
  userInformation,
  pointsUser,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  function updatePage(pageNumber) {
    setCurrentPage(pageNumber);
    if (pageNumber === 1) {
      updateProductList(originalList.slice(0, 16));
    } else {
      updateProductList(originalList.slice(16, originalList.length));
    }
  }

  return (
    <div>
      <Header />
      <Filters
        originalList={originalList}
        updateProductList={updateProductList}
        filteredList={filteredList}
        currentPage={currentPage}
        updatePage={updatePage}
      />
      <Results
        filteredList={filteredList}
        userInformation={userInformation}
        pointsUser={pointsUser}
        currentPage={currentPage}
        updatePage={updatePage}
        originalList={originalList}
      />
    </div>
  );
}
