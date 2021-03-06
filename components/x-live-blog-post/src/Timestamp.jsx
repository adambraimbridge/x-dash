import { h } from '@financial-times/x-engine';
import styles from './LiveBlogPost.scss';

export default ({ publishedTimestamp }) => {
	const now = new Date();
	const oneDay = 24 * 60 * 60 * 1000;
	const date = new Date(publishedTimestamp);
	const formatted = date.toLocaleString();

	let format;
	let showExactTime;

	if (now.getTime() - date.getTime() < oneDay) {
		// display published date in 'xx minutes ago' format
		// and render exact time next to it
		format = 'time-ago-no-seconds';
		showExactTime = true;
	} else {
		// don't display time string if the post is older than one day
		// because it is already included in the formatted timestamp
		format = 'MMM dd, HH:mm';
		showExactTime = false;
	}

	return (
		<div className={styles['live-blog-post__timestamp-container']}>
			<time
				data-o-component="o-date"
				className={`o-date ${styles['live-blog-post__timestamp']}`}
				itemProp="datePublished"
				data-o-date-format={format}
				dateTime={publishedTimestamp}>{formatted}
			</time>
			{showExactTime && (
			<time
				data-o-component="o-date"
				className={`o-date ${styles['live-blog-post__timestamp-exact-time']}`}
				itemProp="exactTime"
				data-o-date-format="HH:mm"
				dateTime={publishedTimestamp}>{formatted}
			</time>
			)}
		</div>
	);
};
