import { useState, useEffect } from 'react';

import { arrowHandler, getEmptyArray } from '../utils';

const PAGES_PER_LIST = 5;

const usePagination = ({ totalPage, currentPage, setCurrentPage }) => {
  const [showingNum, setShowingNum] = useState({
    start: 1,
    end: PAGES_PER_LIST,
  });
  const isFirstPage = showingNum.start === 1;
  const isLastPage = showingNum.end === totalPage;
  const pages = getEmptyArray(showingNum.start, showingNum.end);

  const changePageNumbersBackward = () => {
    currentPage > PAGES_PER_LIST &&
      setShowingNum(prev => arrowHandler(prev, -1, totalPage));
  };

  const changePageNumberForward = () => {
    showingNum.end <= totalPage &&
      setShowingNum(prev => arrowHandler(prev, 1, totalPage));
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
