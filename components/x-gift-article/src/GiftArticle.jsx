import { h } from '@financial-times/x-engine';
import { withActions } from '@financial-times/x-interaction';

import Loading from './Loading';
import Form from './Form';

import ApiClient from './lib/api';
import { copyToClipboard, createMailtoUrl } from './lib/share-link-actions';
import tracking from './lib/tracking';
import * as updaters from './lib/updaters';

const isCopySupported = typeof document !== 'undefined'
	&& document.queryCommandSupported
	&& document.queryCommandSupported('copy');

const withGiftFormActions = withActions(
	initialProps => {
		const api = new ApiClient({
			protocol: initialProps.apiProtocol,
			domain: initialProps.apiDomain
		});

		return {
			showGiftUrlSection() {
				return updaters.showGiftUrlSection;
			},

			showNonGiftUrlSection() {
				return async (state) => {
					const update = updaters.showNonGiftUrlSection(state);

					if (!state.isNonGiftUrlShortened) {
						const { url, isShortened } = await api.getShorterUrl(state.urls.nonGift);

						if (isShortened) {
							Object.assign(
								update,
								updaters.setShortenedNonGiftUrl(url)(state)
							);
						}
					}

					return update;
				}
			},

			async createGiftUrl() {
				const { redemptionUrl, redemptionLimit } = await api.getGiftUrl(initialProps.article.id);

				if (redemptionUrl) {
					const { url, isShortened } = await api.getShorterUrl(redemptionUrl);
					tracking.createGiftLink(url, redemptionUrl);

					return updaters.setGiftUrl(url, redemptionLimit, isShortened);
				} else {
					// TODO do something
				}
			},

			copyGiftUrl(event) {
				copyToClipboard(event);

				return state => {
					const giftUrl = state.urls.gift;
					tracking.copyLink('giftLink', giftUrl);

					return { showCopyConfirmation: true };
				};
			},

			copyNonGiftUrl(event) {
				copyToClipboard(event);

				return state => {
					const nonGiftUrl = state.urls.nonGift;
					tracking.copyLink('nonGiftLink', nonGiftUrl);

					return { showCopyConfirmation: true };
				}
			},

			emailGiftUrl() {
				return state => {
					tracking.emailLink('giftLink', state.urls.gift);
				};
			},

			emailNonGiftUrl() {
				return state => {
					tracking.emailLink('nonGiftLink', state.urls.nonGift);
				};
			},

			hideCopyConfirmation() {
				return { showCopyConfirmation: false };
			},

			shareByNativeShare() {
				throw new Error(`shareByNativeShare should be implemented by x-gift-article's consumers`);
			},

			activate() {
				return async state => {
					if (initialProps.isFreeArticle) {
						const { url, isShortened } = await api.getShorterUrl(state.urls.nonGift);

						if (isShortened) {
							return updaters.setShortenedNonGiftUrl(url)(state);
						}
					} else {
						const { giftCredits, monthlyAllowance, nextRenewalDate } = await api.getGiftArticleAllowance();

						// avoid to use giftCredits >= 0 because it returns true when null and ""
						if (giftCredits > 0 || giftCredits === 0) {
							return updaters.setAllowance(giftCredits, monthlyAllowance, nextRenewalDate);
						} else {
							return { invalidResponseFromApi: true };
						}
					}
				}
			}
		}
	},
	props => {
		const initialState = {
			title: 'Share this article',
			giftCredits: undefined,
			monthlyAllowance: undefined,
			showCopyButton: isCopySupported,
			isGiftUrlCreated: false,
			isGiftUrlShortened: false,
			isNonGiftUrlShortened: false,

			urls: {
				dummy: 'https://on.ft.com/gift_link',
				gift: undefined,
				nonGift: `${props.article.url}?shareType=nongift`
			},

			mailtoUrls: {
				gift: undefined,
				nonGift: createMailtoUrl(props.article.title, `${props.article.url}?shareType=nongift`)
			},

			mobileShareLinks: props.showMobileShareLinks
				? {
					facebook: `http://www.facebook.com/sharer.php?u=${encodeURIComponent(props.article.url)}&t=${encodeURIComponent(props.article.title)}`,
					twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(props.article.url)}&text=${encodeURIComponent(props.article.title)}&via=financialtimes`,
					linkedin: `http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(props.article.url)}&title=${encodeURIComponent(props.article.title)}&source=Financial+Times`,
					whatsapp: `whatsapp://send?text=${encodeURIComponent(props.article.title)}%20-%20${encodeURIComponent(props.article.url)}`
				}
				: undefined
		};

		const expandedProps = Object.assign({}, props, initialState);
		const sectionProps = props.isFreeArticle
			? updaters.showNonGiftUrlSection(expandedProps)
			: updaters.showGiftUrlSection(expandedProps);

		return Object.assign(initialState, sectionProps);
	}
);

const BaseGiftArticle = (props) => {
	return props.isLoading ? <Loading/> : <Form {...props}/>;
};

const GiftArticle = withGiftFormActions(BaseGiftArticle);

export { GiftArticle };
