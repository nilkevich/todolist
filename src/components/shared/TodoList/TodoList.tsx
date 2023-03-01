// import cn from 'classnames/bind';
// import styles from './index.module.scss';
// const cx = cn.bind(styles);

import { TodoInput } from './partials/Input';
import { TodoFooter } from './partials/TodoFooter';
import { TodoHeading } from './partials/TodoHeading';
import { TodoItems } from './partials/TodoItems';

import cx from './index.module.scss';

export const TodoList = () => {
	console.log('я родился');
	return (
		<div className={cx('Root')}>
			<TodoHeading />
			<TodoInput />
			<TodoItems />
			<TodoFooter />
		</div>
	);
};

// прочитать в чем разница import и require
//  чем отличается export от export default
