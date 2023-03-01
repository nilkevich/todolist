import cx from './index.module.scss';

export const TodoInput = () => <form className={cx('Form')}><input className={cx('InputNewTask')} type="text" placeholder="Add new list item"></input><button className={cx('BtnAdd')}>Add</button></form>
