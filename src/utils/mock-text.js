export const mockText = (text) => {
    const letters = text.toLowerCase().split('');
    let result = '';
    for (const letter of letters) {
        if (Math.random() < 0.5) {
            result += letter.toUpperCase();
        } else {
            result += letter;
        }
    }
    return result;
}