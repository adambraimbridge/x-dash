const { TeaserTimeline } = require('../');

exports.component = TeaserTimeline;

exports.package = require('../package.json');

// Set up basic document styling using the Origami build service
exports.dependencies = {
	'o-normalise': '^1.6.0',
	'o-typography': '^5.5.0',
	'o-teaser': '^2.3.1'
};

exports.stories = [
	require('./timeline'),
];

exports.knobs = require('./knobs');
