import Link from "next/link";

export function ImageList({ data }) {
	return (
		<ul className="grid lg:grid-cols-3 gap-5">
			{data.map((item) => {
				return (
					<li key={item.id}>
            <Link href={`/search/${item.id}`} className="flex flex-col items-center border rounded-lg shadow lg:flex-row lg:max-w-xl border-gray-700 bg-gray-800 hover:bg-gray-700">
    					<img className="object-cover w-full rounded-t-lg h-96 lg:h-44 lg:w-48 lg:rounded-none lg:rounded-s-lg text-white" src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`} alt={item.thumbnail.alt_text}/>
    					<div className="flex flex-col justify-between p-4 leading-normal">
       					 <h5 className=" mb-2 text-lg font-bold tracking-tight text-white">{item.title}</h5>
        					{item.artist_title !== null ? (
										<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
											By {item.artist_title}
										</p>
									) : (
										<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">By Unknown</p>
									)}
    					</div>
						</Link>
					</li>
				);
			})}
		</ul>



	);
}
