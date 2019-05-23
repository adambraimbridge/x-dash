import middleware, { NotifiersProxy } from '../../middleware/notifier';
import { actions, initialState } from '../../player-logic';


const create = (currentState = {}) => {
	const state = { ...initialState, ...currentState };
	const store = {
		getState: () => state,
		dispatch: jest.fn()
	}
	const next = jest.fn();

	const notifier = {
		play: jest.fn(),
		pause: jest.fn(),
		ended: jest.fn(),
		tracking: jest.fn()
	}

	const middlewareWithNext = middleware(notifier)(store)(next);
	const invoke = action => middlewareWithNext(action)
	return { store, next, invoke, notifier };
}

describe('Notifier middleware', () => {

	test('just calls next for unknown actions', () => {
		const { invoke, next } = create();
		const action = { type: 'OTHER_PLAYER_ACTION' }
		invoke(action);
		expect(next).toBeCalledWith(action);
	});

	[
		[ actions.play(), 'play' ],
		[ actions.pause(), 'pause' ],
		[ actions.ended(), 'ended' ],
	].forEach(([ action, notifyFn ]) => {
		test(`${action.type} action triggers ${notifyFn} notification`, () => {
			const { invoke, notifier, next } = create();
			invoke(action);
			expect(notifier[notifyFn]).toHaveBeenCalled();
			expect(next).toBeCalledWith(action);
		});
	});

	test('external PLAY action does not trigger play notification', () => {
		const { invoke, notifier, next } = create({ willPlayNotify: false });
		const action = actions.play();
		invoke(action);
		expect(notifier.play).not.toHaveBeenCalled();
		expect(next).toBeCalledWith(action);
	});
	test('external PAUSE action does not trigger pause notification', () => {
		const { invoke, notifier, next } = create({ willPauseNotify: false });
		const action = actions.pause();
		invoke(action);
		expect(notifier.pause).not.toHaveBeenCalled();
		expect(next).toBeCalledWith(action);
	});

	describe('tracking', () => {
		const state = { loading: true, error: false };

		[
			[ actions.requestPlay(), 'play', ['play-click', state ] ],
			[ actions.requestPause(), 'pause', ['pause-click', state ]],
			[ actions.willClose(), 'close', ['close-click', state ] ],
		].forEach(([ action, notifyFn, payload ]) => {
			test(`${action.type} action triggers ${notifyFn} notification`, () => {
				const { invoke, notifier, next } = create(state);
				invoke(action);
				expect(notifier.tracking).toHaveBeenCalledWith(...payload)
				expect(next).toBeCalledWith(action);
			});
		});

		test('external REQUEST_PAUSE action does not trigger tracking notification', () => {
			const { invoke, notifier, next } = create();
			const action = actions.requestPause({ willNotify: false });
			invoke(action);
			expect(notifier.pause).not.toHaveBeenCalled();
			expect(next).toBeCalledWith(action);
		});

		test('external REQUEST_PLAY action does not trigger tracking notification', () => {
			const { invoke, notifier, next } = create();
			const action = actions.requestPlay({ willNotify: false });
			invoke(action);
			expect(notifier.play).not.toHaveBeenCalled();
			expect(next).toBeCalledWith(action);
		});
	});

});

describe('NotifiersProxy', () => {
	test('Notifier calls play', () => {
		const play = jest.fn()
		const notifiers = new NotifiersProxy()
		notifiers.set({ play });
		notifiers.play();
		expect(play).toHaveBeenCalled();
	});
	test('Notifier calls pause', () => {
		const pause = jest.fn()
		const notifiers = new NotifiersProxy()
		notifiers.set({ pause });
		notifiers.pause();
		expect(pause).toHaveBeenCalled();
	});
	test('Notifier calls tracking', () => {
		const tracking = jest.fn()
		const notifiers = new NotifiersProxy()
		notifiers.set({ tracking });
		notifiers.tracking('payload');
		expect(tracking).toHaveBeenCalledWith('payload');
	});
});
