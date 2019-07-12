import { h } from '@financial-times/x-engine';
import classNameMap from './classnames-helper';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import { ClickableContainer } from './ClickableContainer';
import { SwipeableContainer } from './SwipeableContainer';
import { PlaybackRate } from './PlaybackRate';
import { Close, PlayPause, Forward, Rewind } from './Buttons';
import { Timeline } from './Timeline';
import { TimeRemaining } from './TimeRemaining';
import { Marquee } from './Marquee';
import { Image } from './Image';

const Title = ({ text }) => (
	<div className={classNameMap('audio-player__title__marquee')}>
		<Marquee className={classNameMap('audio-player__info__title')} text={text} />
	</div>
);
const SeriesName = ({ text }) => <div className={classNameMap('audio-player__info__series-name')}><span title={text}>{text}</span></div>;

export const ExpandedPlayer = ({
	loading,
	error,
	playing,
	onPlayClick,
	onPauseClick,
	onMinimise,
	onPlaybackRateClick,
	updateCurrentTime,
	title,
	seriesName,
	imageDataSet,
	currentTime,
	duration,
	playbackRate,
	seeking,
	onScrub,
	scrubbing
}) => (
	<SwipeableContainer
		className={classNameMap('audio-player', 'audio-player--expanded')}
		onSwipeEnd={onMinimise}
		swipeEnabled={!scrubbing}>
		<button onClick={() => onMinimise()} className={classNameMap('audio-player__minimise-button')} aria-label='minimize player'/>
		<Image imageDataSet={imageDataSet} />
		<Title text={title} />
		<SeriesName text={seriesName} />
		<Timeline
			onScrub={onScrub}
			currentTime={currentTime}
			duration={duration}
			updateCurrentTime={updateCurrentTime}
			loading={loading}
			seeking={seeking}
			error={error}
		/>
		<div className={classNameMap('audio-player__control-buttons')}>
			<Rewind currentTime={currentTime} updateCurrentTime={updateCurrentTime} />
			<Forward currentTime={currentTime} updateCurrentTime={updateCurrentTime} duration={duration} />
			<PlayPause onPlayClick={onPlayClick} onPauseClick={onPauseClick} playing={playing} />
		</div>
		<PlaybackRate rate={playbackRate} onClick={newRate => onPlaybackRateClick({ playbackRate: newRate })} />
	</SwipeableContainer>
);


export const MinimisedPlayer = ({
	loading,
	error,
	playing,
	onPlayClick,
	onPauseClick,
	title,
	seriesName,
	currentTime,
	duration,
	onExpand,
	onCloseClick,
	options
}) => (
	<ClickableContainer
		className={classNameMap('audio-player', 'audio-player--minimised')}
		onClick={options.canExpand ? onExpand : () => {}}>
		<Close onClick={onCloseClick} />
		<Marquee text={`${seriesName}: ${title}`} className={classNameMap('audio-player__info__series-name')} />
		{error ? <ErrorMessage /> : (
			loading ? <Loading /> : <TimeRemaining currentTime={currentTime} duration={duration} />
		)}
		<PlayPause onPlayClick={onPlayClick} onPauseClick={onPauseClick} playing={playing} />
	</ClickableContainer>
);
