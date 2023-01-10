import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

function Pagination({ changePage }) {
  return (
    <ReactPaginate
      className={styles.container}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => changePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={4}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
