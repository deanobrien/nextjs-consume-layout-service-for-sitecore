export default async function BootStrapImage({ pathName, uid }: { pathName: string, uid: string }) {
	return (
		<div className="component">
			<p>UID: {uid}</p>
		</div>
	);
}
