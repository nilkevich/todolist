import Task from '../Task/Task';

import cx from './index.module.scss';

interface TodoItemsProps {
	tasks: any;
	task: any;
	onChangeTask: () => null;
	onDeleteTask: () => null;
}

export default function TodoItems({
	tasks,
	onChangeTask,
	onDeleteTask,
}: TodoItemsProps) {
	return (
		<ul>
			{tasks.map((task: any) => (
				<li key={task.id} className={cx('ListTask')}>
					<Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
				</li>
			))}
		</ul>
	);
}
