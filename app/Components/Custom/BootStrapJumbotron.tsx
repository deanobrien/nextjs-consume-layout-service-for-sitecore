export default async function BootStrapJumbotron({ pathName, uid }: { pathName: string, uid: string }) {
	return (
		<div className="component">
			<p>UID: {uid}</p>
		</div>
	);
}
