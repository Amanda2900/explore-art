export default async function searchArtwork(query) {
  const res = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${query}&query[term][is_public_domain]=true&fields=artist_title,date_display,id,image_id,thumbnail.alt_text,thumbnail.width,thumbnail.height,title`);

  if (!res.ok) throw new Error('Failed to fetch artwork');

  return res.json();
}