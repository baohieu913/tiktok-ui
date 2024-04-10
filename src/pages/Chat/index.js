import classNames from 'classnames/bind';
import styles from './Chat.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Chat() {
    return (
        <div className={cx('wrapper')}>
            <a href="/bumble" className={cx('bumble')}>
                <h1 className={cx('bumble')}>bumble</h1>
            </a>
            <section className={cx('chat-area')}>
                <header>
                    <a href="" className={cx('back-icon')}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </a>
                    <img src="null" alt="avatar" />
                    <div className={cx('details')}>
                        <span>Nguyen Van B</span>
                        <div>dang hoat dong</div>
                    </div>
                </header>
                <div className={cx('chat-box')}>
                    <div className={cx('chat ', 'outgoing')}>
                        <div className={cx('details')}>
                            <p>2222</p>
                        </div>
                    </div>
                    <div className={cx('chat ', ' incoming')}>
                        <div className={cx('details')}>
                            <p>xin chao</p>
                        </div>
                    </div>
                    <div className={cx('chat ', 'outgoing')}>
                        <div className={cx('details')}>
                            <p>kakdsgjkdsg</p>
                        </div>
                    </div>
                    <div className={cx('chat ', ' incoming')}>
                        <div className={cx('details')}>
                            <p>xin chao</p>
                        </div>
                    </div>
                    <div className={cx('chat ', 'outgoing')}>
                        <div className={cx('details')}>
                            <p>skdgjskglsdjs</p>
                        </div>
                    </div>
                    <div className={cx('chat ', ' incoming')}>
                        <div className={cx('details')}>
                            <p>xin chao</p>
                        </div>
                    </div>
                    <div className={cx('chat ', 'outgoing')}>
                        <div className={cx('details')}>
                            <p>222àafafaf2</p>
                        </div>
                    </div>
                    <div className={cx('chat ', ' incoming')}>
                        <div className={cx('details')}>
                            <p>xin chao</p>
                        </div>
                    </div>
                    <div className={cx('chat ', 'outgoing')}>
                        <div className={cx('details')}>
                            <p>222sàdfffs2</p>
                        </div>
                    </div>
                    <div className={cx('chat ', ' incoming')}>
                        <div className={cx('details')}>
                            <p>xin chao</p>
                        </div>
                    </div>
                </div>
                <form action="#" className={cx('typing-area')}>
                    <input type="text" name="incomming_id" className={cx('incoming_id')} id="" hidden />

                    <input
                        type="text"
                        name="message"
                        className={cx('input-field')}
                        id=""
                        placeholder="Nhập nội dung chats..."
                        autoComplete="off"
                    />

                    <button>
                        <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Chat;
