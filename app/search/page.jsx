'use client'
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import { searchArtwork } from "../utils/api";
import { ImageList } from "../components/ImageList";

export default function Search() {
  const [data, setData] = useState([]);

  function onSearchSubmit(query) {
		searchArtwork(query).then((json) => {
			setData(json.data);
		});
	}

  return (
    <main className="h-screen"> 
      <h1>Search Page</h1>
      <div className="m-10">
        <SearchForm onSearchSubmit={onSearchSubmit}/>
        <div className="bg-top h-screen bg-no-repeat bg-opacity-75" style={{backgroundImage: "url(/Art_Institute_of_Chicago_logo.png)"}}>
            <ImageList data={data} />
        </div>
      </div>
    </main>
  );
}
