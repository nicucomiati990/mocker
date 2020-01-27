import React, { useState } from "react";
import Chat from "../chat/chat";
import toastr from "toastr";
import { mockText } from "../utils/mock-text";
import "toastr/build/toastr.min.css";
import styles from "./mock-view.module.scss";

const MockView = () => {
    const [text, setText] = useState(
        "safdafsafsdafdsafsdagsagfsaifsidfbisdafisnfsafsafdafnsdafbusdabfubasfusafdfnsdaifndsaifnsiaufniusnf"
    );
    const [mockedText, setMockedText] = useState("");
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

    const resetMockButton = isMockPanelVisible ? (
        <button
            className={styles.resetMock}
            onClick={() => {
                setMockPanelVisible(false);
                setText("");
                setMockedText("");
            }}
        >
            Reset
        </button>
    ) : null;

    return (
        <div className={styles.mockView}>
            <div>
                <h1 className={styles.header}>MoCkEr</h1>
                <div className={styles.subheader}>
                    Mock your imaginary friends
                </div>
            </div>
            <div className={styles.mockFields}>
                <textarea
                    rows={6}
                    value={text}
                    maxLength={300}
                    onChange={ev => {
                        setText(ev.target.value);
                        setMockPanelVisible(false);
                    }}
                    className={styles.mockInput}
                    placeholder="Your text goes here"
                />
                <button className={styles.mockButton} onClick={mock}>
                    {mockButtonText}
                </button>
                {resetMockButton}
            </div>
            <Chat
                isVisible={isMockPanelVisible}
                text={text}
                mockedText={mockedText}
            />
            <div className={styles.footer}>
                Made by Nicu Comiati
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/nicucomiati990/mocker"
                >
                    See on GitHub
                </a>
            </div>
        </div>
    );
};

export default MockView;
