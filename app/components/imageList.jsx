import Link from "next/link";

export function ImageList({ data, clickHandler }) {
	return (
		<ul>
			{data.map((item) => {
				return (
					<li key={item.id}>
            <p className="hover:underline"><Link href={`../search/${item.id}`}>{item.title}</Link></p>
						{' '}
						{item.artist_title}
					</li>
				);
			})}
		</ul>
	);
}
