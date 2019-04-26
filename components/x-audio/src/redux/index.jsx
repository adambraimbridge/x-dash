import { h, Component } from '@financial-times/x-engine';
import * as PropTypes from 'prop-types';
import { actions } from './player-logic';
import createStore from './store';

function wrapWithDispatch ({ dispatch }, actionsMap) {
	return Object.keys(actionsMap).reduce((acc, actionName) => ({
		...acc,
		[actionName]: (...args) => dispatch(actionsMap[actionName](...args))
	}), {})
}

export default function connectPlayer (Player) {
	const store = createStore();

	const playerActions = wrapWithDispatch(store, {
		onPlayClick: actions.requestPlay,
		onPauseClick: actions.requestPause
	});

	class ConnectedPlayer extends Component {
		constructor(props) {
			super(props);
			this.unsubscribe = store.subscribe(this.storeUpdated.bind(this));
		}

		componentDidMount() {
			const { playing, url } = this.props;
			if (playing) 	{
				playerActions.onPlayClick({ url });
			}
		}

		componentDidUpdate(prevProps, prevState) {
			this.respondToPropChanges(prevProps);
			this.notifyConsumers(prevState, prevProps);
		}

		componenentDidUnmount() {
			this.unsubscribe();
		}

		storeUpdated() {
			this.setState(store.getState());
		}

		respondToPropChanges(prevProps) {
			const { playing, url } = this.props;
			if (prevProps.url !== url) {
				playerActions.onPlay({ url });
			} else if (!prevProps.playing && playing) {
				playerActions.onPlay();
			} else if (prevProps.playing && !playing) {
				playerActions.onPause();
			}
		}

		notifyConsumers(prevState, prevProps) {
			if (!prevProps.playing && !prevState.playing && this.state.playing) {
				this.props.notifiers.play();
			} else if (prevProps.playing && prevState.playing && !this.state.playing) {
				this.props.notifiers.pause();
			}
		}

		render() {
			const { title, seriesName, onClose } = this.props;
			const { playing } = this.state;
			return <Player
				{...playerActions}
				{...{ playing, title, seriesName, onClose }}
			/>;
		}
	}

	ConnectedPlayer.defaultProps = {
		notifiers: {
			pause: () => {},
			play: () => {}
		},
		onCloseClick: () => {}
	}
	ConnectedPlayer.propTypes = {
		notifiers: PropTypes.shape({
			play: PropTypes.func,
			pause: PropTypes.func
		}),
		onCloseClick: PropTypes.func
	}

	return ConnectedPlayer;
}
