export default (path) => {
    return path.split('/').find(e => e !== '');
};