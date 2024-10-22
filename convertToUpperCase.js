export const convertToUpperCase = (text) => {
    if (typeof text !== 'string') {
        throw new TypeError('string behövs');
    }
    return text.toUpperCase();
};