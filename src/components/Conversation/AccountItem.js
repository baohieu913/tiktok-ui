import classNames from 'classnames/bind';
import styles from './Conversation.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src="null" alt="" />
            <div className={cx('item-info')}>
                <p className={cx('name')}>Nguyen Van A </p>
                <p className={cx('gmail')}> anv@gmail.com</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
