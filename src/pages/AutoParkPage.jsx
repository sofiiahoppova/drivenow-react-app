import React from "react";
import { Toaster } from "react-hot-toast";

import SearchBar from "../components/SearchBar/SearchBar/SearchBar";
import CarsCatalog from "../components/CarsCatalog/CarsCatalog";
import FiltersBar from "../components/FiltersBar/FiltersBar";

const AutoParkPage = ({ activeSlide }) => {
  return (
    <>
      <SearchBar />
      <FiltersBar filter={activeSlide} />
      <CarsCatalog />
      <Toaster />
    </>
  );
};

export default AutoParkPage;
