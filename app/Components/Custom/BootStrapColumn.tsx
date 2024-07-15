import PlaceHolder from '../Core/PlaceHolder';
export default async function BootStrapColumn({ pathName, uid }: { pathName: string, uid: string }) {
	return (
		<div className="component">
			<p>UID: {uid}</p>
			<PlaceHolder pathName={pathName} placeHolderName="bootstrap-column" />
		</div>
	);
}
