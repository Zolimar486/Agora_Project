
export default function Pagination({ totalCards, cardsPerPage, paginations }) {
  let pagesNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pagesNumbers.push(i);
  }

  console.log("Pages number", pagesNumbers);

  return (
    <div className=" mt-9">
      <div className="flex items-center justify-center">
        <ul className="flex items-baseline justify-normal gap-4">
          {pagesNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                className=" change cursor-pointer "
                onClick={() => paginations(pageNumber)}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}