import React from "react";
import Link from "next/link";

const BlogPagination = () => {
  return (
    <ul className="list-wrap d-flex flex-wrap justify-content-center">
      <li>
        <Link href="#" className="page-numbers">
          01
        </Link>
      </li>
      <li>
        <span className="page-numbers current">02</span>
      </li>
      <li>
        <Link href="#" className="page-numbers">
          03
        </Link>
      </li>
      <li>
        <Link href="#" className="page-numbers">
          04
        </Link>
      </li>
      <li>
        <Link href="#" className="page-numbers">
          ....
        </Link>
      </li>
      <li>
        <Link href="#" className="next page-numbers">
          <i className="fas fa-angle-double-right"></i>
        </Link>
      </li>
    </ul>
  );
};

export default BlogPagination;
