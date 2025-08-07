export default function Home() {
	return (
		<div>
			<ul className="font-mono list-inside list-disc text-sm/6 text-left p-8">
				{mydata.map((i) => (
					<li key={i.id} className="my-4">
						<a
							href={i.url}
							target="_blank"
							className="hover:underline hover:underline-offset-4"
						>
							{i.title}
						</a>
						<br />
						<code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
							<a href={i.url} target="_blank">
								{i.url}
							</a>
						</code>
					</li>
				))}
			</ul>
		</div>
	);
}

const mydata = [
	{
		id: 1,
		title: "fc menu",
		url: "https://fcmenu-dub-regionalized.corp.amazon.com/AUH1",
	},
	{
		id: 2,
		title: "printmon",
		url: "http://localhost:5965/barcodegenerator",
	},
	{
		id: 3,
		title: "generate barcode",
		url: "https://prod.barcodes.robotics.amazon.dev/#auto",
	},
	{
		id: 4,
		title: "dr sku",
		url: "https://dr-sku-dub.amazon.com/en_US/#!/",
	},
	{
		id: 5,
		title: "time details",
		url: "https://fclm-portal.amazon.com/employee/timeDetails?warehouseId=AUH1",
	},
	{
		id: 6,
		title: "portal menu",
		url: "https://fclm-portal.amazon.com/?warehouseId=AUH1",
	},
	{
		id: 7,
		title: "stow map",
		url: "https://stowmap-eu.amazon.com/stowmap/loadFCAreaMap.htm?warehouseId=AUH1",
	},
	{
		id: 8,
		title: "ticket menu",
		url: "https://t.corp.amazon.com/issues/all-my-groups",
	},
	{
		id: 9,
		title: "phone tool",
		url: "https://phonetool.amazon.com/users/ajassy",
	},
	{
		id: 10,
		title: "prep manager",
		url: "https://prepmanager-iad.amazon.com/",
	},
	{
		id: 11,
		title: "dach",
		url: "https://dachs.corp.amazon.com/bincheck",
	},
	{
		id: 12,
		title: "pandash",
		url: "https://pandash.amazon.com/",
	},
	{
		id: 13,
		title: "apollo",
		url: "https://apollo-audit.corp.amazon.com/",
	},
	{
		id: 14,
		title: "csi tool",
		url: "https://csi.amazon.com/",
	},
	{
		id: 15,
		title: "rodeo",
		url: "https://rodeo-dub.amazon.com/AUH1",
	},
	{
		id: 16,
		title: "pops",
		url: "https://aft-pops-dub.aka.amazon.com/",
	},
];
