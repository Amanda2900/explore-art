import { useState } from "react";

export default function SearchForm({ onSearchSubmit }) {

  const [query, setQuery] = useState('');

  function handleInputChange(event) {
		setQuery(event.target.value);
	}

  function handleFormSubmit() {
		onSearchSubmit(query);
	}

  return (
    <div className="mb-10 flex flex-col items-center">
      <form action={handleFormSubmit} className="w-1/2">
        <label htmlFor="search-field" className="sr-only">Label</label>
        <div className="relative flex rounded-lg shadow-sm">
          <input type="text" id="search-field" inputMode="search" value={query} name="query" onChange={handleInputChange} className="py-3 px-4 ps-11 block w-full shadow-sm rounded-s-lg text-sm focus:z-10 disabled:opacity-50 disabled:pointer-events-none bg-gray-800 border-gray-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600" />
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
            <svg className="flex-shrink-0 size-4 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-rose-600 text-white hover:bg-rose-700 disabled:opacity-50 disabled:pointer-events-none">Search</button>
        </div>
      </form>
    </div>
  );
}