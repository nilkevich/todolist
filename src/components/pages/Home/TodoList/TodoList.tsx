import { useReducer } from 'react';

import AddTask from '../../../base/Input/AddTask';

import TodoFooter from './partials/TodoFooter/TodoFooter';
import { TodoHeading } from './partials/TodoHeading';
import TodoItems from './partials/TodoItems/TodoItems';

import cx from './index.module.scss';

export default function TodoList() {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
	const tasksAmount = tasks.length;

	function handleAddTask(text) {
		dispatch({
			type: 'added',
			id: nextId++,
			text,
		});
	}

	function handleChangeTask(task) {
		dispatch({
			type: 'changed',
			task,
		});
	}

	function handleDeleteTask(taskId) {
		dispatch({
			type: 'deleted',
			id: taskId,
		});
	}

	function handleDeleteAll(taskId) {
		dispatch({
			type: 'deletedAll',
			id: taskId,
		});
	}

	return (
		<div className={cx('Root')}>
			<TodoHeading />
			<AddTask onAddTask={handleAddTask} />
			<TodoItems
				tasks={tasks}
				onChangeTask={handleChangeTask}
				onDeleteTask={handleDeleteTask}
			/>
			<TodoFooter onTaskAmount={tasksAmount} onDeleteAll={handleDeleteAll} />
		</div>
	);
}

function tasksReducer(tasks, action) {
	switch (action.type) {
		case 'added': {
			return [
				...tasks,
				{
					id: action.id,
					text: action.text,
					done: false,
				},
			];
		}

		case 'changed': {
			return tasks.map((t) => {
				if (t.id === action.task.id) {
					return action.task;
				}

				return t;
			});
		}

		case 'deleted': {
			return tasks.filter((t) => t.id !== action.id);
		}

		case 'deletedAll': {
			return (tasks = Array());
		}

		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}

let nextId = 2;

const initialTasks = [
	{ id: 0, text: 'toDo', done: true },
	{ id: 1, text: 'toDo', done: false },
];
