import { useState } from 'react';

import cx from './index.module.scss';

export default function Task({ task, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	let taskContent;
	if (isEditing) {
		taskContent = (
			<>
				<input
					value={task.text}
					onChange={(e) => {
						onChange({
							...task,
							text: e.target.value,
						});
					}}
				/>
				<button
					className={cx('Btn')}
					onClick={() => {
						setIsEditing(false);
					}}
				>
					Save
				</button>
			</>
		);
	} else {
		taskContent = (
			<>
				{task.text}
				<button
					className={cx('Btn')}
					onClick={() => {
						setIsEditing(true);
					}}
				>
					Edit
				</button>
			</>
		);
	}

	return (
		<>
			<input
				className={cx('InputCheckBox')}
				id={task.id}
				type="checkbox"
				checked={task.done}
				onChange={(e) => {
					onChange({
						...task,
						done: e.target.checked,
					});
				}}
			/>
			<label className={cx('Task')} htmlFor={task.id}>
				{taskContent}
				<button className={cx('Btn')} onClick={() => onDelete(task.id)}>
					Delete
				</button>
			</label>
		</>
	);
}
