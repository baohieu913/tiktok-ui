import classNames from 'classnames/bind';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('boxRegister')}>
                <h1 className={cx('bumble')}> Bumble </h1>
                <h2 className={cx('login')}> Đăng ký</h2>
                <div className={cx('boxName')}>
                    <input type="text" placeholder="Nhập họ tên?" name="name" spellCheck={false} />
                </div>
                <div className={cx('boxMail')}>
                    <input type="text" placeholder="Nhập gmail?" name="gmail" spellCheck={false} />
                </div>
                <div className={cx('boxAccount')}>
                    <input type="text" placeholder="Nhập tài khoản?" name="account" spellCheck={false} />
                </div>
                <div className={cx('boxPassword')}>
                    <input type="password" placeholder="Nhập mật khẩu?" name="password" spellCheck={false} />
                </div>

                <div className={cx('boxAccount')}>
                    <input type="radio" name="gender" value="male" /> nam
                    <input type="radio" name="gender" value="female" /> Nữ
                    <input type="radio" name="gender" value="other" /> Khác
                </div>
                <div className={cx('boxBirthDay')}>
                    Ngày sinh:
                    <input type="datetime-local" name="BirthDay" />
                </div>
                <button className={cx('BtnRegister')}>Đăng ký</button>
                <div className={cx('AddAlready')}>
                    <a className={cx('BtnAlready')} href="/login" aria-label="already have an account">
                        <p>Đã có tài khoản rồi ?</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Register;
