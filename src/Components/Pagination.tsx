import {ArrowLongLeftIcon, ArrowLongRightIcon} from "@heroicons/react/16/solid";


interface Props {
    totalItems: number;
    currentPage: number;
    itemsPerPage: number;
    onPageChange: (nextPage: number) => void;
}

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ")
}

const Pagination = ({totalItems, currentPage, itemsPerPage, onPageChange}: Props) => {
    const pages = Math.ceil(totalItems / itemsPerPage);

    // Ensure current page is within bounds
    const pageNumbers = [...Array(pages).keys()].map(num => num + 1);

    // Handler for next and previous buttons
    const handleNextPage = () => {
        if (currentPage < pages) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };
    return (
        <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
            <div className="-mt-px flex w-0 flex-1">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="inline-flex items-center border-b-2 pb-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-indigo-300 hover:text-gray-700"
                >
                    <ArrowLongLeftIcon aria-hidden="true" className="mr-3 h-5 w-5 text-gray-400"/>
                    Previous
                </button>
            </div>
            <div className="hidden md:-mt-px md:flex">
                {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
                {
                    pageNumbers.map((pageNumber, i) => (
                        <button

                            onClick={() => onPageChange(pageNumber)}
                            key={i}
                            aria-current="page"
                            className={classNames(
                                pageNumber === currentPage ? "border-indigo-500 text-indigo-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                                "inline-flex items-center px-4 pt-4 text-sm font-medium "
                            )}
                        >
                            {pageNumber}
                        </button>
                    ))
                }
                <span
                    className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                  ...
                </span>
            </div>
            <div className="-mt-px flex w-0 flex-1 justify-end">
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === pages}
                >
                    Next
                    <ArrowLongRightIcon aria-hidden="true" className="ml-3 h-5 w-5 text-gray-400"/>
                </button>
            </div>
        </nav>
    );
};

export default Pagination;