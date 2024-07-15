import PlaceHolder from '../Core/PlaceHolder';
export default async function BootStrapRow({ pathName, uid }: { pathName: string, uid: string }) {

	const placeholderName='BootStrap-Row-'+uid+'-0'
	return (
		<div className="component">
			<p>UID: {uid}</p>
			<PlaceHolder pathName={pathName} placeHolderName={placeholderName} />
		</div>
	);
}
