import { middleware, actions, initialState, reducer } from '../player-logic';
import Tracking from '../tracking';
jest.mock('../tracking');

const runActions = (initialState, ...actions) => actions.reduce(reducer, initialState);

describe('actions and reducer', () => {

	test('Actions not relevant to audio have no effect on state', () => {
		const updatedState = runActions(initialState, { type: 'UNKNOWN_ACTION' });

		expect(updatedState).toBe(initialState);
	});

	test('Play action sets playing to true', () => {
		const updatedState = runActions(initialState, actions.play());

		expect(updatedState).toMatchSnapshot();
	});

	test('Pause action sets playing to false', () => {
		const updatedState = runActions(initialState, actions.play(), actions.pause());

		expect(updatedState).toMatchSnapshot();
	});

	test('Loading action sets loading to true', () => {
		const updatedState = runActions(initialState, actions.loading());

		expect(updatedState).toMatchSnapshot();
	});

	test('Loaded action sets loading to false', () => {
		const updatedState = runActions(initialState, actions.loading(), actions.loaded());

		expect(updatedState).toMatchSnapshot();
	});

	test('Ended action sets ended to true', () => {
		const updatedState = runActions(initialState, actions.play(), actions.ended());

		expect(updatedState).toMatchSnapshot();
	});

	test('Playing audio after previous has ended resets ended state', () => {
		const updatedState = runActions(initialState, actions.ended(), actions.play());

		expect(updatedState).toMatchSnapshot();
	});

	test('Requesting new audio play resets ended state', () => {
		const updatedState = runActions(initialState, actions.ended(), actions.requestPlay());

		expect(updatedState).toMatchSnapshot();
	});

	test('External play request sets willPlayNotify to false', () => {
		const updatedState = runActions(
			initialState,
			actions.requestPlay( { willNotify: false })
		);
		expect(updatedState).toMatchSnapshot();
	});

	test('External pause request sets willPauseNotify to false', () => {
		const updatedState = runActions(
			initialState,
			actions.requestPause( { willNotify: false })
		);
		expect(updatedState).toMatchSnapshot();
	});

	test('Update duration action updates duration', () => {
		const duration = 60;
		const updatedState = runActions(initialState, actions.updateDuration({duration}));

		expect(updatedState).toMatchSnapshot();
	});

	test('Update current time action updates currentTime', () => {
		const currentTime = 10;
		const updatedState = runActions(initialState, actions.updateCurrentTime({currentTime}));

		expect(updatedState).toMatchSnapshot();
	});

	test('Expand action sets expanded to true', () => {
		const updatedState = runActions(initialState, actions.expand());
		expect(updatedState).toMatchSnapshot();
	});

	test('Minimise action sets expanded to false', () => {
		const updatedState = runActions(initialState, actions.expand(), actions.minimise());
		expect(updatedState).toMatchSnapshot();
	});

	test('Set playback rate action updates playback rate', () => {
		const playbackRate = 2;
		const updatedState = runActions(initialState, actions.setPlaybackRate({playbackRate}));

		expect(updatedState).toMatchSnapshot();
	});

	test('seeking action sets seeking to true', () => {
		const updatedState = runActions(initialState, actions.seeking());
		expect(updatedState).toMatchSnapshot();
	});

	test('seeked action sets seeking to false', () => {
		const updatedState = runActions(initialState, actions.seeking(), actions.seeked());
		expect(updatedState).toMatchSnapshot();
	});

	test('updateScrubbing sets scrubbing', () => {
		const updatedState = runActions(initialState, actions.updateScrubbing({ isScrubbing: true }));
		expect(updatedState).toMatchSnapshot();
	});
});

describe('middleware', () => {

	const create = (state = initialState) => {
		const store = {
			getState: jest.fn(() => state),
			dispatch: jest.fn()
		}
		const next = jest.fn();
		const audio = new Audio();
		Tracking.mockClear();

		audio.play = jest.fn();
		audio.pause = jest.fn();
		const middlewareWithNext = middleware(store, audio)(next);
		const invoke = action => middlewareWithNext(action)
		const trackingMock = Tracking.mock.instances[0];
		return { store, next, invoke, audio, trackingMock };
	}

	describe('loadMedia', () => {
		const { invoke, audio, trackingMock, store } = create();
		invoke(actions.loadMedia({
			url: 'https://local.ft.com/url',
			trackingContext: { contentId: 'abc-123' }
		}));

		test('sets the URL', () => {
			expect(audio.src).toBe('https://local.ft.com/url');
		});

		test('starts tracking with context', () => {
			expect(
				trackingMock.start
			).toHaveBeenCalledWith({contentId: 'abc-123' });
		});

		test('by default does not autoplay', () => {
			expect(store.dispatch).not.toHaveBeenCalled();
		});

		test('starts playing when autoplay is true', () => {
			const { invoke, store } = create();
			invoke(actions.loadMedia({
				url: 'https://local.ft.com/url',
				autoplay: true
			}));
			expect(store.dispatch).toHaveBeenCalledWith(actions.requestPlay({ willNotify: false }))
		})
	});


	test('requestPlay plays', () => {
		const { invoke, audio } = create();
		invoke(actions.requestPlay());
		expect(audio.play).toHaveBeenCalled();
	});

	test('requestPause pauses', () => {
		const { invoke, audio } = create();
		invoke(actions.requestPause());

		expect(audio.pause).toHaveBeenCalled();
	});

	test('HTML play event dispatches play action', () => {
		const { store, audio } = create();
		audio.dispatchEvent(new Event('play'));

		expect(store.dispatch).toHaveBeenCalledWith(actions.play());
	});

	test('HTML pause event dispatches pause action', () => {
		const { store, audio } = create();
		audio.dispatchEvent(new Event('pause'));

		expect(store.dispatch).toHaveBeenCalledWith(actions.pause());
	});

	test('HTML ended event dispatches ended action', () => {
		const { store, audio } = create();
		audio.dispatchEvent(new Event('ended'));

		expect(store.dispatch).toHaveBeenCalledWith(actions.ended());
	});

	test('HTML seeking event dispatches play action', () => {
		const { store, audio } = create();
		audio.dispatchEvent(new Event('seeking'));

		expect(store.dispatch).toHaveBeenCalledWith(actions.seeking());
	});

	test('HTML seeked event dispatches play action', () => {
		const { store, audio } = create();
		audio.dispatchEvent(new Event('seeked'));

		expect(store.dispatch).toHaveBeenCalledWith(actions.seeked());
	});

	[
		'waiting',
		'stalled',
		'loadstart',
		'loadeddata'
	].forEach(action => {
		test(`HTML ${action} event dispatches loading action`, () => {
			const { store, audio } = create();
			audio.dispatchEvent(new Event(action));

			expect(store.dispatch).toHaveBeenCalledWith(actions.loading());
		});
	});

	test('HTML canplay event dispatches loaded action', () => {
		const { store, audio } = create();
		audio.dispatchEvent(new Event('canplay'));

		expect(store.dispatch).toHaveBeenCalledWith(actions.loaded());
	});

	test('HTML durationchange event dispatches updateDuration action', () => {
		const { store, audio } = create();
		audio.dispatchEvent(new Event('durationchange'));

		expect(store.dispatch).toHaveBeenCalledWith(actions.updateDuration({duration: 0}));
	});

	test('HTML timeupdate event dispatches updateCurrentTime action', () => {
		const { store, audio } = create({ currentTime: 9 });
		audio.currentTime = 10;
		audio.dispatchEvent(new Event('timeupdate'));

		expect(store.dispatch).toHaveBeenCalledWith(actions.updateCurrentTime({currentTime: 10}));
	});

	test('updateCurrentTime action is only dispatched once per second', () => {
		const { store, audio } = create({ currentTime: 10 });
		audio.currentTime = 10.5;
		audio.dispatchEvent(new Event('timeupdate'));

		expect(store.dispatch).not.toHaveBeenCalled();
	});

	test('setPlaybackRate action sets playbackRate on audio element', () => {
		const { invoke, audio } = create();
		invoke(actions.setPlaybackRate({ playbackRate: 2 }));
		expect(audio.playbackRate).toEqual(2);
	});

	describe('willClose', () => {
		const { invoke, store, trackingMock } = create();
		invoke(actions.willClose());

		test('pauses audio', () => {
			expect(store.dispatch).toHaveBeenCalledWith(actions.requestPause({ willNotify: false }));
		});

		test('finishes tracking', () => {
			expect(trackingMock.finish).toHaveBeenCalled();
		});
	});

	test('requestUpdateCurrentTime sets current time on the audio', () => {
		const { invoke, audio } = create();
		invoke(actions.requestUpdateCurrentTime({ currentTime: 10.5 }));
		expect(audio.currentTime).toEqual(10.5);
	});
});