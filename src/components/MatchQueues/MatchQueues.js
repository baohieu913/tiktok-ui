import classNames from 'classnames/bind';
import styles from './MatchQueues.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function MatchQueues({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}> {label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}
MatchQueues.propTypes = {
    label: PropTypes.string.isRequired,
};
export default MatchQueues;
