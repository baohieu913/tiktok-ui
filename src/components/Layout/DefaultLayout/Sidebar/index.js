import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import MatchQueues from '~/components/MatchQueues/MatchQueues';
import Conversation from '~/components/Conversation';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('MyProfile')}>
                <img className={cx('avarta')} src="null" alt="" />

                <p className={cx('MyName')}>{} Nguyễn Văn A</p>
            </div>
            <MatchQueues label="Match Queues" />

            <Conversation label='Conversation'/>
        </aside>
    );
}

export default Sidebar;
