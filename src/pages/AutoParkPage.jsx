import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

import SearchBar from "../components/SearchBar/SearchBar";
import CarsCatalog from "../components/CarsCatalog/CarsCatalog";
import FiltersBar from "../components/FiltersBar/FiltersBar";

const AutoParkPage = () => {
  const [selectedDates, setSelelctedDates] = useState(null);

  return (
    <>
      <SearchBar setDates={setSelelctedDates} />
      <FiltersBar />
      <CarsCatalog selectedDates={selectedDates} />
      <Toaster />
    </>
  );
};

export default AutoParkPage;
