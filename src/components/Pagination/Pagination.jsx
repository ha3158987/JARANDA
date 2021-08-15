import styled from '@emotion/styled';

import usePagination from './hooks/usePagination';

import PageButton from './PageButton';
import ArrowButton from './ArrowButton';

export default function Pagination({ totalPage, currentPage, setCurrentPage }) {
  const {
    pages,
    isFirstPage,
    isLastPage,
    changePageNumbersBackward,
    changePageNumberForward,
  } = usePagination({ totalPage, currentPage, setCurrentPage });

  return (
    <PageListContainer>
      <ArrowButton
        type="back"
        inActive={isFirstPage}
        disabled={isFirstPage}
        changePageNumbersBackward={changePageNumbersBackward}
      />
      {pages.map((page, idx) => {
        return (
          <PageButton
            key={`pageNumber-${idx + 1}`}
            page={page}
            setCurrentPage={setCurrentPage}
            isActive={page === currentPage}
          />
        );
      })}
      <ArrowButton
        type="next"
        inActive={isLastPage}
        disabled={isLastPage}
        changePageNumberForward={changePageNumberForward}
      />
    </PageListContainer>
  );
}

const PageListContainer = styled.ul`
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
`;
