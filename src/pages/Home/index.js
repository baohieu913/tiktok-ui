import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('hearder')}>
                <a className={cx('logo')} href="/" aria-label="Home page">
                    <div className={cx('Logo')}>
                        <img
                            className={cx('Logo')}
                            src="https://logos-world.net/wp-content/uploads/2021/02/Bumble-Logo.png"
                            alt="bumble"
                        />
                    </div>
                </a>

                <div className={cx('Menu')}>
                    <a className={cx('Trangchu')} href="/" aria-label="Home page">
                        <div className={cx('Trangchu')}> trang chủ </div>
                    </a>
                    <a className={cx('Timkiem')} href="/" aria-label="tìm kiếm ">
                        <div className={cx('Timkiem')}> Tìm đối tượng </div>
                    </a>
                    <a className={cx('Thongtin')} href="/" aria-label="Information page">
                        <div className={cx('Thongtin')}> Thông tin pages</div>
                    </a>
                </div>
                <a className={cx('btnLogin')} href="/login" aria-label="Login page">
                    <div className={cx('BtnLogin')}>
                        <button className={cx('BtnLogin')}>Đăng nhập</button>
                    </div>
                </a>
            </header>

            <div>
                <div className={cx('content')}>
                    <h1>Nơi tìm kiếm thêm màu sắc cho cuộc sống</h1>
                    <p>
                        Tôi không muốn một mối quan hệ… khi mà mọi người nhìn vào rồi nói: “Họ thật đẹp khi bên nhau.”Mà
                        tôi muốn một mối quan hệ… khi mọi người nhìn vào và ngưỡng mộ nói: “Họ thật hạnh phúc khi bên
                        nhau.”
                    </p>
                    <a className={cx('btnContent')} href="/register" aria-label="Login page">
                        <div className={cx('btnContent')}>
                            <button className={cx('btnContent')}>Đăng ký để biết thêm</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
