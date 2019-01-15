const addQueryParamToUrl = (name, value, url, append = true) => {
	const queryParam = `${name}=${value}`;
	return append === true ? `${url}&${queryParam}` : `${url}?${queryParam}`;
};

const suggest = function (suggestions, followedTopics, searchTerm) {
	if (suggestions.length) {
		suggestions.forEach((suggestion) => {
			if (suggestion && !suggestion.url){
				// TODO App needs different url?
				suggestion.url = '/stream/' + suggestion.id;
			}
		});
		return { status: 'suggestions', suggestions };
	} else {
		const matchingFollowedTopics = followedTopics
			.filter(topic => topic.name.toLowerCase().includes(searchTerm.toLowerCase()));

		if(matchingFollowedTopics.length > 0) {
			return { status: 'all-followed', matchingFollowedTopics };
		}

		return { status: 'no-suggestions' };
	}
};


export default (searchTerm, maxSuggestions, apiUrl, followedTopics) => {

	const dataSrc = addQueryParamToUrl('count', maxSuggestions, apiUrl, false);
	let url = addQueryParamToUrl('partial', searchTerm.replace(' ', '+'), dataSrc);

	if (followedTopics.length > 0) {
		const tagged = followedTopics
		.map(topic => topic.uuid)
		.join(',');
		url = addQueryParamToUrl('tagged', tagged, url);
	}

	return fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return response.json();
		})
		.then(suggestions => {
			return suggest(suggestions, followedTopics, searchTerm)
		})
		.catch(() => {
			throw new Error();
		});

};