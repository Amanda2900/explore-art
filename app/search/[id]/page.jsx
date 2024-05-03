import { getArtwork } from "@/app/utils/api";

export default async function ImageDetails({ params }) {

  const artwork = await getArtwork(params.id);

	return (
		
		<figure className="max-w-full m-10 flex flex-col items-center justify-center">
			<img className="h-auto max-w-full rounded-lg" src={`https://www.artic.edu/iiif/2/${artwork.data.image_id}/full/843,/0/default.jpg`} alt={artwork.data.title}/>
			<figcaption className="mt-2 text-sm text-center text-gray-800">
				<h2 className="font-bold">{artwork.data.title}</h2>
				{artwork.data.artist_title !== null ? (
					<p>
						{artwork.data.artist_title}
						{', '}
						{artwork.data.date_display}
					</p>
				) : (
					<p>Unknown, {artwork.data.date_display}</p>
				)}
			</figcaption>
		</figure>

	);
}