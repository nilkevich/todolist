import cx from './index.module.scss';

export const TodoFooter = () => (
	<div className={cx('BottomSection')}>
		<p className={cx('ItemsAmount')}>3 items selected</p>
		<button className={cx('BtnClearAll')}>Clear All</button>
	</div>
);
