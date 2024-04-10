import className from 'classnames/bind';
import styles from './Header.module.scss';

const cx = className.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('Logo')}>
                <img
                    className={cx('Logo')}
                    src="https://logos-world.net/wp-content/uploads/2021/02/Bumble-Logo.png"
                    alt="bumble"
                />
            </div>
            <div className={cx('inner')}>
                {/* {Trang chu} */}
                {/* {tim doi tuong} */}
                {/* {Thong tin} */}
            </div>
            <div className={cx('btnLogin')}>{/* {Login} */}</div>
        </header>
    );
}

export default Header;
