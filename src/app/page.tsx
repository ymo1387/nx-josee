export default function Home() {
	return (
		<div>
			<ul className="font-mono list-inside list-disc text-sm/6 text-left p-8 p">
				{Array.from({ length: 30 }, (_, i) => (
					<li key={i} className="my-4">
						<a
							href="https://tailwindcss.com/docs/margin"
							target="_blank"
							className="hover:underline hover:underline-offset-4"
						>
							Title placeholder.
						</a>
						<br />
						<code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
							https://tailwindcss.com/docs/margin
						</code>
					</li>
				))}
			</ul>
		</div>
	);
}
