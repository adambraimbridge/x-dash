const Component = require('../../src/v2/layouts/hero/HeroWithImage');

exports.title = 'v2/Hero with Image';

// This data will provide defaults for the Knobs defined below and used
// to render examples in the documentation site.
exports.data = Object.assign(require('../../__fixtures__/v2/hero-with-image.json'), { Component });

// A list of properties to pass to the component when rendered in Storybook. If a Knob
// exists for the property then it will be editable with the default as defined above.
exports.knobs = [
	'id',
	'url',
	'type',
	// Meta
	'showMeta',
	'metaPrefixText',
	'metaSuffixText',
	'metaLink',
	// Title
	'showTitle',
	'title',
	'altTitle',
	// Standfirst
	'showStandfirst',
	'standfirst',
	'altStandfirst',
	// Status
	'showStatus',
	'publishedDate',
	'firstPublishedDate',
	'useRelativeTime',
	'status',
	// Image
	'showImage',
	'image',
	'imageSize',
	// Indicators
	'indicators',
	// Context
	'headlineTesting',
	// Variants
	'layout',
	'modifiers'
];

// This reference is only required for hot module loading in development
// <https://webpack.js.org/concepts/hot-module-replacement/>
exports.m = module;