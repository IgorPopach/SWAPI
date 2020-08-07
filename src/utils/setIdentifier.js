export default (path) => {
    const arr = path.split('/');
    if (arr.length === 2) {
        return arr.find(e => e !== '');
    }
    return arr[4];
};