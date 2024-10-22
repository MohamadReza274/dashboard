import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";

interface Props {
    searchValue: string;
    onSearchChange: (value: string) => void;
}

const Search = ({searchValue, onSearchChange}: Props) => {
    return (
        <form className="flex flex-1 items-center px-2 lg:pl-6">
            <div className="w-full max-w-lg lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-gray-400"
                        />
                    </div>
                    <input
                        onChange={(e) => {
                            onSearchChange(e.target.value);
                        }}
                        value={searchValue}
                        id="search"
                        name="search"
                        type="search"
                        placeholder="Search"
                        className="block w-full rounded-md border-b-2 focus:outline-0 shadow bg-white py-1.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </form>
    );
};

export default Search;