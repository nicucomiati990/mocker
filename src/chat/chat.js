import React from 'react';
import styles from './chat.module.scss';
import userIcon from './user.png';

const UserIcon = () => <img
    className={styles.userIcon}
    height={32}
    width={32}
    src={userIcon} alt="User"
/>

const Chat = ({ text, mockedText, isVisible }) => {

    return (
        <div className={isVisible ? styles.chatPanel : styles.hiddenPanel}>
            <div className={styles.chat}>
                <UserIcon />
                <div className={styles.textChat}>
                    {text}
                </div>
            </div>

            <div className={styles.mockedTextChat}>{mockedText}</div>
        </div>
    );
}

export default Chat;