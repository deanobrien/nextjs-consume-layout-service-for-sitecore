async function getData( pathname: string) {
	if(!pathname){
		pathname = "/"
	}
	let fetchUrl='https://<insert-your-domain>/sitecore/api/layoutservice/get?site=website&lang=en&apiKey=xxx&path='+pathname
	const res = await fetch(fetchUrl)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

export const fetchComponentsForPlaceHolder = async (placeHolderName: string, newPath: string): Promise<any[]> => {
	try {
		const data = await getData(newPath)
		return data.Route.Components.filter((item: any) => item.PH.endsWith(placeHolderName))
	} catch (error) {
		throw ('Error on placeholder '+placeHolderName+' :'+error);
	}
}

export const fetchPath = async (slug: any): Promise<string> => {
	try {
		var pathName=''
		if (slug && slug[0]) {
			pathName += '/' + slug[0]
		}
		if (slug && slug[1]) {
			pathName += '/' + slug[1]
		}
		if (slug && slug[2]) {
			pathName += '/' + slug[2]
		}
		if (slug && slug[3]) {
			pathName += '/' + slug[3]
		}
		if (slug && slug[4]) {
			pathName += '/' + slug[4]
		}
		return pathName;
	} catch (error) {
		throw (error);
	}
}