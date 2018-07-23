exports.title = 'Free article';

exports.data = {
	isFreeArticle: true,
	articleUrl: 'https://www.ft.com/content/blahblah',
	articleTitle: 'Title Title Title Title',
};

exports.knobs = [
	'title',
	'isFreeArticle',
	'articleUrl',
	'articleTitle'
];

// This reference is only required for hot module loading in development
// <https://webpack.js.org/concepts/hot-module-replacement/>
exports.m = module;