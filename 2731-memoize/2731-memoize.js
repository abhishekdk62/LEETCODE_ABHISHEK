/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map(); // to store results based on argument keys

    return function (...args) {
        const key = JSON.stringify(args); // create a unique key for the args
        if (cache.has(key)) {
            return cache.get(key); // return cached result
        }
        const result = fn(...args); // call original function
        cache.set(key, result); // store result in cache
        return result;
    };
}
