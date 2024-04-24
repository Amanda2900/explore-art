import { getArtwork } from "@/app/utils/api";
import Image from "next/image";
import Link from "next/link";

export default async function ImageDetails({ params }) {

  const artwork = await getArtwork(params.id);

	return (
		<div className="image-details">
			<h2 className="hover:underline" ><Link href="../../search">Back to Search</Link></h2>
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
      <Image
        src={`https://www.artic.edu/iiif/2/${artwork.data.image_id}/full/843,/0/default.jpg`} 
        width={500}
        height={500}
        alt={artwork.data.title}
      />
		</div>
	);
}