import { useState, useEffect } from 'react';

const PAGES_PER_LIST = 5;

const usePagination = ({ totalPage, currentPage, setCurrentPage }) => {
  const [showingNum, setShowingNum] = useState({
    start: 1,
    end: PAGES_PER_LIST,
  });
  const isFirstPage = showingNum.start === 1;
  const isLastPage = showingNum.end === totalPage;

  const pages = Array.from(
    { length: showingNum.end + 1 - showingNum.start },
    (_, i) => {
      return showingNum.start + i;
    },
  );

  const updateCurrentPageNumbers = (prev, sign, totalPage) => {
    const PAGES_PER_LIST = 5;
    const nextIndex = prev.end + PAGES_PER_LIST;
    let res;
    if (sign === 1) {
      res = nextIndex > totalPage ? totalPage : nextIndex;
    } else if (sign === -1) {
      res =
        prev.end - prev.start < 4
          ? prev.start + 4 - PAGES_PER_LIST
          : prev.end - PAGES_PER_LIST;
    }
    return { ...prev, start: prev.start + PAGES_PER_LIST * sign, end: res };
  };

  const changePageNumbersBackward = () => {
    currentPage > PAGES_PER_LIST &&
      setShowingNum(prev => updateCurrentPageNumbers(prev, -1, totalPage));
  };

  const changePageNumberForward = () => {
    showingNum.end <= totalPage &&
      setShowingNum(prev => updateCurrentPageNumbers(prev, 1, totalPage));
  };

  useEffect(() => {
    const lessThanFive = totalPage <= PAGES_PER_LIST;
    lessThanFive
      ? setShowingNum(prev => ({ ...prev, start: 1, end: totalPage }))
      : setShowingNum(prev => ({ ...prev, start: 1, end: PAGES_PER_LIST }));
  }, [totalPage]);

  useEffect(() => {
    setCurrentPage(showingNum.start);
  }, [showingNum, setCurrentPage]);

  return {
    pages,
    isFirstPage,
    isLastPage,
    changePageNumbersBackward,
    changePageNumberForward,
  };
};

export default usePagination;
