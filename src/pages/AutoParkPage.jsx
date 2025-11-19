import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

import SearchBar from "../components/SearchBar/SearchBar";
import CarsCatalog from "../components/CarsCatalog/CarsCatalog";
import FiltersBar from "../components/FiltersBar/FiltersBar";

const AutoParkPage = ({ activeSlide, isModal, setModal }) => {
  const [selectedDates, setSelelctedDates] = useState(null);

  return (
    <>
      <SearchBar setDates={setSelelctedDates} />
      <FiltersBar filter={activeSlide} />
      <CarsCatalog
        selectedDates={selectedDates}
        isModal={isModal}
        setModal={setModal}
      />
      <Toaster />
    </>
  );
};

export default AutoParkPage;
