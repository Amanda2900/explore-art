export function ImageList({ data }) {
	return (
		<ul>
			{data.map((item) => {
				return (
					<li key={item.id}>
						<button
							type="button"
						>
							<span>{item.title}</span>
						</button>{' '}
						{item.artist_title}
					</li>
				);
			})}
		</ul>
	);
}
