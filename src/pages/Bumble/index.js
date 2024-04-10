import classNames from 'classnames/bind';
import styles from './Bumble.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCancel, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function BUmble() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('bumble')}>bumble</h1>
            <div className={cx('BoxBumble')}>
                <div className={cx('img')}>
                    <img
                        className={cx('avatar')}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecBNrIXsxUTsLvmZ1-eZv43oXNMPqw33uGsyvgR0Qgw&s"
                        alt=""
                    />
                </div>
                <div className={cx('profile')}>
                    <h1 className={cx('name')}>họ tên</h1>
                    <h2 className={cx('Age')}>tuổi</h2>
                    <h2 className={cx('interest')}>sở thích</h2>
                    <p className={cx('describe')}>
                        mô tảs ss sss sss sss ss sss s sss ssss ss ss sss sss sss sss sss sss sss sss ssss ssss ssssss
                        ss ssssss ssss ssss sss sss sss ssss ssss ss ssss sss sss ss sss sss sss ss s sssss sss ss sss
                        sss ssss ssss sss ssss s sssss sss ss sss s sss sss ssss ssss ss sss ss sssss sss ssss
                    </p>
                    <div className={cx('btn')}>
                        <button className={cx('BtnTicket')}>
                            <FontAwesomeIcon icon={faCheck} />
                        </button>
                        <button className={cx('BtnCansel')}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BUmble;
