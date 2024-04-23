'use client'
import { useState } from "react";
import SearchForm from "../components/form";
import searchArtwork from "../utils/api";
import { ImageList } from "../components/imageList";

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
      <div>
        <SearchForm onSearchSubmit={onSearchSubmit}/>
        <ImageList data={data} />
      </div>
    </main>
  );
}
