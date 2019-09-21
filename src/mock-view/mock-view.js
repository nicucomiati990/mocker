import React, { useState } from 'react';
import styles from './mock-view.module.scss';

const MockView = (props) => {
	const [ text, setText ] = useState('');
	const [ mockedText, setMockedText ] = useState('');

	const mock = () => {
		const letters = text.split('');
		let result = '';
		for (const letter of letters) {
			if (Math.random() < 0.5) {
				result += letter.toUpperCase();
			} else {
				result += letter;
			}
		}
		setMockedText(result);
	};

	return (
        <>
			<h1> MoCkEr</h1>
			<div>
				<input
					value={text}
					maxLength={30}
					onChange={(ev) => {
						setText(ev.target.value);
						setMockedText('');
					}}
					className="mock-input"
					placeholder="Your text goes here"
				/>
				<button className="mock-button" onClick={mock}>
					mOcK
				</button>
			</div>
			<h2 className="mocked-text"> {mockedText} </h2>
			{mockedText.length ? (
				<button
					className="reset-mock"
					onClick={() => {
						setMockedText('');
						setText('');
					}}
				>
					Reset
				</button>
            ) : null}
            </>
	);
};

export default MockView;
