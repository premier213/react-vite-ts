import { SearchIcon } from "../icons/search";

export const Search = () => {
  return (
    <div className="shadow-lg border bg-white rounded-md flex justify-between w-full placeholder-right">
      <input
        type="text"
        placeholder="جستجوی نام فرد"
        className="h-12 w-full text-right"
      />
      <SearchIcon />
    </div>
  );
};

export default Search;
