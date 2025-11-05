import React from "react";

import css from "./PriceTable.module.css";

const PriceTable = ({ price_per_day }) => {
  return (
    <>
      <table className={css.table}>
        <thead className={css.tableHead}>
          <tr>
            <th scope="col" className={css.tableTitle}>
              Rental period
            </th>
            <th scope="col" className={css.tableTitle}>
              Price /per day
            </th>
          </tr>
        </thead>
        <tbody className={css.tableBody}>
          <tr>
            <td colSpan={2} className={css.tableSeparator}></td>
          </tr>
          <tr>
            <td>1-6 days</td>
            <td>{price_per_day["1to6_days"]}$</td>
          </tr>
          <tr>
            <td>7-13 days</td>
            <td>{price_per_day["7to13_days"]}$</td>
          </tr>
          <tr>
            <td>14-29 days</td>
            <td>{price_per_day["14to29_days"]}$</td>
          </tr>
          <tr>
            <td>30+ days</td>
            <td>{price_per_day["30+_days"]}$</td>
          </tr>
        </tbody>
      </table>
      <button className={css.selectBtn}>Select Dates</button>
    </>
  );
};

export default PriceTable;
