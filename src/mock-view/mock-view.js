import React, { useState } from 'react';
import styles from './mock-view.module.scss';
import { mockText } from '../utils/mock-text';
import Chat from '../chat/chat';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const MockView = () => {
	const [text, setText] = useState('');
	const [mockedText, setMockedText] = useState('');
	const [isMockPanelVisible, setMockPanelVisible] = useState(false);

	const mock = () => {
		if (text) {
			setMockedText(mockText(text));
			setMockPanelVisible(true);

		} else {
			toastr["error"]("PlEasE pRoViDe tExT tO mOcK", "ErRoR");
		}
	};

	const mockButtonText = mockedText.length ? "mOcK AgAiN" : "mOcK";

	const resetMockButton = isMockPanelVisible
		? <button
			className={styles.resetMock}
			onClick={() => {
				setMockPanelVisible(false);
				setText('');
				setMockedText('');
			}}>Reset</button>
		: null;

	return (
		<>
			<h1 className={styles.header}>MoCkEr</h1>
			<div className={styles.subheader}>Mock your imaginary friends</div>
			<div className={styles.footer}>
				Made by Nicu Comiati
				<a
					rel="noopener noreferrer"
					target="_blank"
					href="https://github.com/nicucomiati990/mocker">
					See on GitHub
					</a>
			</div>
			<div className={styles.mockFields}>
				<textarea
					rows={3}
					value={text}
					maxLength={30}
					onChange={(ev) => {
						setText(ev.target.value);
						setMockPanelVisible(false);
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
				isVisible={isMockPanelVisible}
				text={text}
				mockedText={mockedText}
			/>
		</>
	);
};

export default MockView;
