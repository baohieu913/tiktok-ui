import classNames from 'classnames/bind';
import styles from './login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('boxLogin')}>
                <h1 className={cx('bumble')}> Bumble </h1>
                <h2 className={cx('login')}> Đăng nhập</h2>
                <div className={cx('boxAccount')}>
                    <input type="text" placeholder="Nhập tài khoản?" name="account" spellCheck={false} />
                </div>
                <div className={cx('boxPassword')}>
                    <input type="password" placeholder="Nhập mật khẩu?" name="password" spellCheck={false} />
                </div>
                <button className={cx('BtnLogin')}>Đăng Nhập</button>
                <div className={cx('AddAndEdit')}>
                    <a className={cx('BtnEdit')} href="/forgotpassword" aria-label="Forgot password Page">
                        <p>Quên mật khẩu?</p>
                    </a>
                    <a className={cx('BtnAdd')} href="/register" aria-label="Register Page">
                        <p>Đăng ký tài khoản?</p>
                    </a>
                </div>
                <div>
                    <p>đăng nhập bằng tài khoản khác</p>
                    <div className={cx('BtnFacebook')}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
                            alt="fakebook"
                        />
                    </div>
                    <div className={cx('BtnGmail')}>
                        <img
                            src="https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png"
                            alt="gmail"
                        />
                    </div>
                    <div className={cx('BtnZalo')}>
                        <img
                            src="https://w7.pngwing.com/pngs/74/276/png-transparent-zalo-hd-logo-thumbnail.png"
                            alt="Zalo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
