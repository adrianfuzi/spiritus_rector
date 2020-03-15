import React from "react"

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? "/" : "/oldal/" + (currentPage - 1).toString()
  const nextPage = "/oldal/" + (currentPage + 1).toString()
  return (
    <div className="pagination">
      {isFirst ? (
        <div className="pagination__item">
          <a
            className="pagination__item--link pagination__item--link-disabled"
            href="/"
          >
            &laquo;
          </a>
        </div>
      ) : (
        <div className="pagination__item">
          <a className="pagination__item--link" href={previousPage}>
            &laquo;
          </a>
        </div>
      )}
      {Array.from({ length: numberOfPages }, (_, i) =>
        currentPage === i + 1 ? (
          <div className="pagination__item" key={`page-number${i + 1}`}>
            <a
              className="pagination__item--link pagination__item--link-active"
              href={`/${i === 0 ? "" : "oldal/" + (i + 1)}`}
            >
              {i + 1}
            </a>
          </div>
        ) : (
          <div className="pagination__item" key={`page-number${i + 1}`}>
            <a
              className="pagination__item--link"
              href={`/${i === 0 ? "" : "oldal/" + (i + 1)}`}
            >
              {i + 1}
            </a>
          </div>
        )
      )}
      {isLast ? (
        <div className="pagination__item">
          <a
            className="pagination__item--link pagination__item--link-disabled"
            href="/"
          >
            &raquo;
          </a>
        </div>
      ) : (
        <div className="pagination__item">
          <a className="pagination__item--link" href={nextPage}>
            &raquo;
          </a>
        </div>
      )}
    </div>
  )
}

export default PaginationLinks
