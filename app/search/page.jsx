'use client'
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import { searchArtwork } from "../utils/api";
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
      <div className="text-center mx-10 mt-10">
      <h1 className="font-bold text-2xl mb-5 "> Search the Art Institute of Chicago</h1>
        <SearchForm onSearchSubmit={onSearchSubmit}/>
        <div className="bg-top h-screen bg-no-repeat bg-opacity-75" style={{backgroundImage: "url(/Art_Institute_of_Chicago_logo.png)"}}>
            <ImageList data={data} />
        </div>
      </div>
    </main>
  );
}
