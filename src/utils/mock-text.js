export const mockText = (text) => {
    const letters = text.toLowerCase().split('');
    let result = letters
        .reduce((acc, letter, index) => {
            if (index % 2 || Math.random() < 0.1) {
                return acc + letter.toUpperCase();
            }
            return acc + letter;
        }
            , '');

    return result;
}