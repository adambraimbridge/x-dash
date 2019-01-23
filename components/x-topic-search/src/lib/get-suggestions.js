const addQueryParamToUrl = (name, value, url, append = true) => {
	const queryParam = `${name}=${value}`;
	return append === true ? `${url}&${queryParam}` : `${url}?${queryParam}`;
};

const separateFollowedAndUnfollowed = (suggestions = [], followedTopics) => {
	const followedSuggestions = suggestions.filter(suggestion => followedTopics.some(topic => topic.uuid === suggestion.id));
	const unfollowedSuggestions = suggestions.filter(suggestion => !followedTopics.some(topic => topic.uuid === suggestion.id));

	return { followedSuggestions, unfollowedSuggestions };
}

export default (searchTerm, maxSuggestions, apiUrl, followedTopics) => {

	const dataSrc = addQueryParamToUrl('count', maxSuggestions, apiUrl, false);
	const url = addQueryParamToUrl('partial', searchTerm.replace(' ', '+'), dataSrc);

	return fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(response.statusText);
			}
			return response.json();
		})
		.then(suggestions => {
			return separateFollowedAndUnfollowed(suggestions, followedTopics)
		})
		.catch(() => {
			throw new Error();
		});

};
