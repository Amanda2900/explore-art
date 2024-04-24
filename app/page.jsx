import Link from "next/link";

export default async function Home() {

  return (
    <main> 
      <h1 className="font-bold">Explore Art Homepage</h1>
      <h2 className="hover:underline" ><Link href="./search">Search!</Link></h2>
    </main>
  );
}
