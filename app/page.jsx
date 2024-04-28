
export default async function Home() {

  return (
    <main className="text-center flex flex-col items-center mx-16 mt-10 text-gray-900 text-lg"> 
      <h1 className="font-bold text-2xl mb-5 ">Welcome to Explore Art!</h1>
      <p className="mb-5">Through this project I'm diving into the <a href="https://api.artic.edu/docs/#introduction" className="text-rose-600 hover:underline" rel="noopener noreferrer" target="_blank">Art Institute of Chicago's API</a> using React and Next.js. With these powerful tools at my disposal, I'm on a mission to create a captivating digital experience that seamlessly integrates the museum's extensive collection.</p>

      <p className="mb-5">The <a href="https://api.artic.edu/docs/#introduction" className="text-rose-600 hover:underline" rel="noopener noreferrer" target="_blank">Art Institute of Chicago's API</a> is the key to unlocking a wealth of information about artworks, artists, and historical context. With each API call, I'm able to retrieve detailed data, including titles, descriptions, and stunning images. Through the magic of React and Next.js, I'm weaving this information into an immersive interface that invites users to explore the museum's treasures from their screens.</p>

      <p className="mb-10">As I continue to develop my project, I'm inspired by the endless possibilities. With each feature I implement, I'm not only showcasing my technical skills but also honoring the Art Institute's mission of accessibility and education. Join me on this journey as I blend art and technology to craft a truly unique digital experience.</p>

      <img src="/sculpture.png" class="h-28" alt="Sculpture line art icon" />
    </main>
  );
}
