'use client'
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import { searchArtwork } from "../utils/api";
import { ImageList } from "../components/ImageList";
import Link from "next/link";

export default function Search() {
  const [data, setData] = useState([]);

  function onSearchSubmit(query) {
		searchArtwork(query).then((json) => {
			setData(json.data);
		});
	}

  return (
    <main> 
      <h1>Search Page</h1>
      <h2 className="hover:underline" ><Link href="/">Back to Home</Link></h2>
      <div>
        <SearchForm onSearchSubmit={onSearchSubmit}/>
        <ImageList data={data} />
      </div>
    </main>
  );
}
