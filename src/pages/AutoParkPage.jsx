import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import CarsCatalog from "../components/CarsCatalog/CarsCatalog";
import FiltersBar from "../components/FiltersBar/FiltersBar";

const AutoParkPage = () => {
  return (
    <>
      <SearchBar />
      <FiltersBar/>
      <CarsCatalog />
    </>
  );
};

export default AutoParkPage;
