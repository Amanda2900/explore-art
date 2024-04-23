import Image from "next/image";


async function getArtwork(id) {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);

  if (!res.ok) throw new Error('Failed to fetch artwork');

  return res.json();
}

export default async function Home() {
  function getRandomInt() {
    return Math.floor(Math.random() * 250000);
  }
  
  const random = getRandomInt();
  console.log(random)
  const data = await getArtwork(random);
  const image = data.config.iiif_url + '/' + data.data.image_id + '/full/843,/0/default.jpg'

  return (
    <main> 
      <h1 className="font-bold">Artwork Search</h1>
      <h2>{data.data.title}</h2>
      <h2>{data.data.artist_display}</h2>
      <Image 
        src={image} 
        width={500}
        height={500}
        alt={data.title}
      />
    </main>
  );
}
