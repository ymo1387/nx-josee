import Lnk from "@/components/lnk";
import { getLinks } from "@/lib/api";
import type { Link } from "@/lib/types";

export default async function Home() {
	const dataList: Link[] = await getLinks();
	return (
		<div>
			<ul className="font-mono list-inside list-disc text-sm/6 text-left p-8">
				{dataList.map((i) => (
					<Lnk key={i._id} data={i} />
				))}
			</ul>
		</div>
	);
}
