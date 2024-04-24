import Image from "next/image";
import Link from "next/link";

export function ImageList({ data }) {
	return (
		<ul>
			{data.map((item) => {
				return (
					<li key={item.id}>
            <Link href={`../search/${item.id}`}>
							<p className="hover:underline font-bold">{item.title}</p>
							{' '}
							<p className="hover:underline" >{item.artist_title}</p>
							<Image 
								src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`} 
								width={100}
								height={100}
								alt={item.thumbnail.alt_text}/>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
