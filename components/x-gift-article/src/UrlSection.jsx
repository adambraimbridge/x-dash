import { h } from '@financial-times/x-engine';
import { SHARE_TYPE_GIFT } from './lib/constants';
import Url from './Url';
import Message from './Message';
import Buttons from './Buttons';
import styles from './GiftArticle.css';

const urlSectionClassNames = [
	'js-gift-article__url-section',
	styles['url-section']
].join(' ');

export default ({
	shareType,
	isGiftUrlCreated,
	isFreeArticle,
	url,
	urlType,
	giftCredits,
	monthlyAllowance,
	nextRenewalDateText,
	mailtoUrl,
	createGiftUrl,
	copyGiftUrl,
	copyNonGiftUrl,
	emailGiftUrl,
	emailNonGiftUrl,
	redemptionLimit,
	showCopyButton,
	showNativeShareButton,
	shareByNativeShare
}) => {

	const hideUrlShareElements = ( giftCredits === 0 && shareType === SHARE_TYPE_GIFT );
	const showUrlShareElements = !hideUrlShareElements;

	return (
		<div
			className={ urlSectionClassNames }
			data-section-id={ shareType + 'Link' }
			data-trackable={ shareType + 'Link' }>

			{ showUrlShareElements && <Url {...{
				shareType,
				isGiftUrlCreated,
				url,
				urlType,
			}} /> }

			<Message {...{
				shareType,
				isGiftUrlCreated,
				isFreeArticle,
				giftCredits,
				monthlyAllowance,
				nextRenewalDateText,
				redemptionLimit,
			}} />

			{ showUrlShareElements && <Buttons {...{
				shareType,
				isGiftUrlCreated,
				mailtoUrl,
				createGiftUrl,
				copyGiftUrl,
				copyNonGiftUrl,
				emailGiftUrl,
				emailNonGiftUrl,
				showCopyButton,
				showNativeShareButton,
				shareByNativeShare,
			}} />}

		</div>
	);
};
