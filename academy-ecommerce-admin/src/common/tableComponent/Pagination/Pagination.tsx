import { getPaginationItems } from './PaginationDots';
import PageLink from './PageLink';
import styled from "styled-components";

type Props = {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  setCurrentPage: (page: number) => void;
};

export default function Pagination({
  currentPage,
  lastPage,
  maxLength,
  setCurrentPage,
}: Props) {
 const pageNums = getPaginationItems(currentPage, lastPage, maxLength);
 
  return (
    <Nav className="pagination" aria-label="Pagination">
      <PageLink
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => setCurrentPage(pageNum)}
        >
          {!isNaN(pageNum) ? pageNum : '...'}
        </PageLink>
      ))}
      <PageLink
        disabled={currentPage === lastPage}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </PageLink>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`