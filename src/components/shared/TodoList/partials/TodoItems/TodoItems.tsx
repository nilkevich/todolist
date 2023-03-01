import cx from './index.module.scss';

export const TodoItems = () => (
	<ul>
		<li className={cx('ListTask')}>
			<input className={cx('InputCheckBox')} type="checkbox" id="task0"></input>
			<label className={cx('Task')} htmlFor="task0">New list item</label>
		</li>
		<li className={cx('ListTask')}>
			<input className={cx('InputCheckBox')} type="checkbox" id="task1"></input>
			<label className={cx('Task')} htmlFor="task1">New list item</label>
		</li>
		<li className={cx('ListTask')}>
			<input className={cx('InputCheckBox')} type="checkbox" id="task2"></input>
			<label className={cx('Task')} htmlFor="task2">New list item</label>
		</li>
	</ul>
);
