import React from "react";
import { Toaster } from "react-hot-toast";

import SearchBar from "../components/SearchBar/SearchBar";
import CarsCatalog from "../components/CarsCatalog/CarsCatalog";
import FiltersBar from "../components/FiltersBar/FiltersBar";

const AutoParkPage = ({ activeSlide, isModal, setModal }) => {
  return (
    <>
      <SearchBar />
      <FiltersBar filter={activeSlide} />
      <CarsCatalog isModal={isModal} setModal={setModal} />
      <Toaster />
    </>
  );
};

export default AutoParkPage;
