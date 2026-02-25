import type { Link } from "@/lib/types";

export default function Lnk({ data }: { data: Link }) {
  return (
    <li key={data._id} className="my-4">
		<a
			href={data.url}
			target="_blank"
			className="hover:underline hover:underline-offset-4"
		>
			{data.title}
		</a>
		<br />
		<code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
		    <a href={data.url} target="_blank">
				{data.url}
		    </a>
		</code>
	</li>)
}