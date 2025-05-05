import ReactPaginate from "react-paginate";

// prop type
type IProps = {
  pageCount: number;
  handlePageClick: (event: { selected: number }) => void;
};

const Pagination = ({ handlePageClick, pageCount }: IProps) => {
  return (
    <ReactPaginate
      className="list-wrap d-flex flex-wrap justify-content-center"
      breakLabel="..."
      activeClassName="current"
      breakLinkClassName="break-me"
      nextLabel={<i className="fas fa-angle-double-right"></i>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<i className="fas fa-angle-double-left"></i>}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;