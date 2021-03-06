// NOTE: Only add configuration based component stories to this file. If you are using regular
// story definitions (i.e. implementing storiesOf() directly) then please add these to config.js
const components = [
	require('../components/x-teaser/storybook'),
	require('../components/x-styling-demo/stories'),
	require('../components/x-gift-article/stories'),
	require('../components/x-podcast-launchers/stories'),
	require('../components/x-teaser-timeline/stories'),
	require('../components/x-privacy-manager/storybook'),
];

module.exports = components;
