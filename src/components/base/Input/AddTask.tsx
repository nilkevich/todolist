import { useState } from 'react';

import cx from './index.module.scss';

export default function AddTask({ onAddTask }) {
	const [text, setText] = useState('');

	return (
		<div className={cx('Form')}>
			<input
				className={cx('InputNewTask')}
				value={text}
				placeholder="Add new list item"
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<button
				className={cx('BtnAdd')}
				onClick={() => {
					setText('');
					onAddTask(text);
				}}
			>
				Add
			</button>
		</div>
	);
}
