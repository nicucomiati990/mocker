export const mockText = (text) => {
    const letters = text.toLowerCase().split('');
    let result = letters
        .reduce((acc, letter) =>
            (Math.random() < 0.5)
                ? acc + letter.toUpperCase()
                : acc + letter
            , '');

    return result;
}