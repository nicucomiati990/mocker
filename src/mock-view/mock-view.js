import React, { useState } from 'react';
import styles from './mock-view.module.scss';
import { mockText } from '../utils/mock-text';
import Chat from '../chat/chat';

const MockView = (props) => {
	const [text, setText] = useState('aaaaaaaaaaaaaa');
	const [mockedText, setMockedText] = useState('aaaaaaaaaaaaaa');

	const mock = () => {
		setMockedText(mockText(text));
	};

	const mockButtonText = mockedText.length ? "mOcK AgAiN" : "mOcK";

	const resetMockButton = mockedText.length
		? <button
			className={styles.resetMock}
			onClick={() => {
				setMockedText('');
				setText('');
			}}>Reset</button>
		: null;

	return (
		<>
			<h1 className={styles.header}>MoCkEr</h1>
			<div>
				<input
					value={text}
					maxLength={30}
					onChange={(ev) => {
						setText(ev.target.value);
						setMockedText('');
					}}
					className={styles.mockInput}
					placeholder="Your text goes here"
				/>
				<button className={styles.mockButton} onClick={mock}>
					{mockButtonText}
				</button>
			</div>
			{resetMockButton}
			<Chat
				text={text}
				mockedText={mockedText}
			/>
		</>
	);
};

export default MockView;
