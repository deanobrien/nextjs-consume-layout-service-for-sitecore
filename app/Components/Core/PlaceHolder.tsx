import { fetchComponentsForPlaceHolder} from '@/app/lib/data';
import DynamicComponent from './DynamicComponent';

const PlaceHolder = async ({ placeHolderName, pathName }: { placeHolderName: string, pathName: string }) => {

	if (pathName != "/_next/static/css/app/styles.css.map" && !pathName.includes("/js/") && !pathName.includes("/css/") && !pathName.includes("/img/")) {

		const components = await fetchComponentsForPlaceHolder(placeHolderName, pathName);
		//console.log('RESULT FROM FETCH ('+placeHolderName+'):'+ JSON.stringify(components))
		return (
			<>
				<div className="placeholder" key={placeHolderName} id={placeHolderName}>
					<p>[PlaceHolder: {placeHolderName}]</p>
					{
						components.map((c) => {
						return (
							<>
								<DynamicComponent pathName={pathName} uid={c.UID} componentName={c.ComponentName} key={c.UID} />
							</>
						);
					})
					}
				</div>
			</>
		);
	};
}
export default PlaceHolder;