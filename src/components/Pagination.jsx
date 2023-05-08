import React from "react";

import { usePagination, DOTS } from "../helpers";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }
  let lastPage =
    paginationRange && paginationRange[paginationRange?.length - 1];

  const onNext = () => {
    if (currentPage === lastPage) return;
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };
  return (
    <ul style={{ display: "flex", position: "relative" }}>
      <li
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          marginRight: "4",
          borderRadius: "1ch",
          border: "#435258",
          cursor: "pointer",
        }}
        className={`flex items-center justify-center w-[40px] h-[40px] mr-4 rounded border  border-[#435258] cursor-pointer ${
          currentPage === 1 && "opacity-50"
        }`}
        onClick={onPrevious}
      >
        <FaArrowCircleLeft />{" "}
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, idx) => {
          if (pageNumber === DOTS) {
            return (
              <li key={idx} className="text-[#435258] font-bold mt-1 mr-4">
                &#8230;
              </li>
            );
          }

          return (
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                marginRight: "4",
                borderRadius: "1ch",
                border: "#435258",
                cursor: "pointer",
              }}
              key={idx}
              className={`flex items-center justify-center w-[40px] h-[40px] mr-4 rounded border border border-[#435258] hover:bg-[#435258] hover:text-white cursor-pointer ${
                pageNumber === currentPage && " bg-[#435258] text-white"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40px",
          height: "40px",
          marginRight: "4",
          borderRadius: "1ch",
          border: "#435258",
          cursor: "pointer",
        }}
        className={`flex items-center justify-center w-[40px] h-[40px] mr-4 rounded border border border-[#435258]  cursor-pointer ${
          currentPage === lastPage && "opacity-50"
        }`}
        onClick={onNext}
      >
        <FaArrowCircleRight />
      </li>
    </ul>
  );
};

export default Pagination;
