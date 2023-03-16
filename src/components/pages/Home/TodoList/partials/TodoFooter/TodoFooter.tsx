import cx from './index.module.scss';

export default function TodoFooter({ onTaskAmount, onDeleteAll }) {
	return (
		<div className={cx('BottomSection')}>
			<p className={cx('ItemsAmount')}> {onTaskAmount} items selected</p>
			<button className={cx('BtnClearAll')} onClick={onDeleteAll}>
				Clear All
			</button>
		</div>
	);
}
