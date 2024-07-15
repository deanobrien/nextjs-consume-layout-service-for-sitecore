export default async function BootStrapContent({ pathName, uid }: { pathName: string, uid: string }) {
	return (
		<div className="component">
			<p>UID: {uid}</p>
		</div>
	);
}
